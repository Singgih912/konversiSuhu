const chalk = require('chalk'); // package eksternal
const { celciusToFahrenheit, } = require('./rumusSuhu');

const suhuCelcius = 30;
const suhuFahrenheit = celciusToFahrenheit(suhuCelcius);

console.log(chalk.blue.bold('===Program Konversi Suhu==='));
console.log(chalk.green(`Suhu dalam Celcius; ${suhuCelcius}°C`));
console.log(chalk.yellow(`Hasil konversi ke Fahrenheit: ${suhuFahrenheit}°F`));
console.log(chalk.magenta('Terima kasih telah menggunakan program ini!')); 
console.log(chalk.magenta('Dicoding oleh Restu Singgih dan Diffa Syafiq Juhaeni'));
