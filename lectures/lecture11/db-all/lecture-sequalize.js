const Sequelize = require('sequelize');
const conf = {
    db: {
        name: 'fmidb',
        user: 'dbuser',
        pass: '12345678!!!!!!!!',
        host: 'localhost',
        port: 5432
    }
}

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: conf.db.name,
    username: conf.db.user,
    password: conf.db.pass,
    host: conf.db.host,
    port: conf.db.port
});

const City = sequelize.define('city', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
});

const Person = sequelize.define('person', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false
    },
    egn: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    },
});

Person.City = Person.belongsTo(City, { foreignKey: 'cityId'})
City.People = City.hasMany(Person)

sequelize.sync().then(() => {
    console.log("db created. sanity check : ");
    let pms = []
    for (let ent of [Person, City]) {
        pms.push(ent.count().then(res =>
            console.log(`${res} rows in ${ent.getTableName()}`)))
    }

    return Promise.all(pms).then(() => {
        console.log("all models seem to be working!!!")
    })
}).then(async() => {

    // if we only create
    //
    // await Person.create({
    //     name: 'Gheorghi',
    //     age: 25,
    //     city: {
    //         name: 'Burgas'
    //     }
    // }, {
    //     include: [{
    //         association: Person.City,
    //         include: [City.People]
    //     }]
    // })

    let fnd = await Person.findOrCreate({
        where: {
            name: 'Gheorghi',
            age: 25,
        },
        include: [{
            association: Person.City,
            where: {
                name: 'Burgas'
            },
        }]
    })

    let cityObj = await City.findOne({
        name: 'Burgas'
    })

    let persObj = await Person.create({
        name: 'Mary',
        age: 25,
    });

    await persObj.setCity(cityObj)

    Person.findAll({
        include: [{
            model: City,
            where: {
                name: "Burgas"
            },
        }],
    }).then(res => {
        for (let p of res) {
            console.log(`Person ${p.name} lives in ${p.city.name}`)
        }
    })
});