# Упражнение 3

1. Използвайки `fs` модула за работа с файловата система и двата файла: `students.txt` и `scores.txt`, пресметнете средната оценка на всеки студент и я запазете във файл с името `avg-scores.txt`. Изходният файл да изглежда по следния начин: `<f_number> <student_name> <avg_score>`.

2. Пренапишете задача 1, като използвате Promises.

3. Напишете функция promisify, която взима като аргумент асинхронна функция f от вида - `asyncFunc(arg1, arg2, arg3, cb)` и връща нова функция, която при извикването си връща Promise, който обработва f.

    Пример:
    ```javascript
    const fs = require('fs');

    const readFilePromise = promisify(fs.readFile);

    readFilePromise('/path/to/file')
      .then(console.log)
      .catch(console.error);
    ```