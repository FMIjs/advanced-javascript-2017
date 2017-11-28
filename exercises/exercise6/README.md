# Упражнение 6

Като основа за днешното упражнение, използвайте проекта от [миналата лекция](https://github.com/FMIjs/advanced-javascript-2017/tree/master/lectures/lecture6).

1. Да се създаде базов клас, който да се използва като основа от други класове за [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping).
    Идеята е данните да бъдат пазени на файловата система под `json` формат в папка `.database`

    ``` typescript
    export interface IEntryStructure {
      _id: number
    }

    export interface IDbStructure<T> {
      index: number;
      entities: T[];
    }
    ```
    ```typescript
    export class DefaultDbStructure<T> implements IDbStructure<T> {
      constructor(...) { ... }
      ...
    }
    ```

    ```typescript
    constructor(name: string, modelCtor: any = DefaultDbStructure)

    insert(entry: T, skipSave = false): Promise<T>

    delete(id: number, skipSave = false): Promise<T>

    update(updated: T, skipSave = false): Promise<T>

    saveToDisk = (data: T): Promise<T>

    findById = (id: number): T

    getAll = (): T[]
    ```

2. Да се създаде `User` модел, разширяващ горепосочения и да се създаде `API` за [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) операции за `User`-и
    ```typescript
      export class Users extends DbModel<User, UserStructure> { ... }
    ```
