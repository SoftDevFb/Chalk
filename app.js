console.log("hello world");

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

const chalkAnimation = require('chalk-animation');

chalkAnimation.glitch('Lorem ipsum dolor sit amet');

const rainbow = chalkAnimation.glitch('Frankie Barrios'); // Animation starts

//Stops animation
setTimeout(() => {
    console.log('Is Awesome!');
}, 3000);

