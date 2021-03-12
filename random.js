const chalk = require('chalk');
const Chance = require('chance');
const chance = new Chance();

module.exports = {
    name: 'random',
    description: 'Picks a number between two specified numbers',
    example: '`>random [num1] [num2] [+/-] [+/-]`',
    execute(message, args) {
        if(!args[0]) return message.channel.send('Please enter the number you want as the minimum.');
        if(isNaN(args[0])) return message.channel.send('Please enter a valid number');
        if(!args[1]) return message.channel.send('Please enter the number you want as the maximum.');
        if(isNaN(args[1])) return message.channel.send('Please enter a valid number');
        if(!args[2]) return message.channel.send('Please enter if the first number is negative or positive with +/-');
        if(!args[3]) return message.channel.send('Please enter if the second number is negative or positive with +/-');
        
        if(args[2] === '-') {
            if(args[3] === '-') {
                const x = -1;
                const y = args[0];
                const z = args[1];
                
                const a = x * y;
                const b = x * z;

                if(a > b) {
                    const randomized = chance.integer({ min: b, max: a });
                    message.channel.send(randomized);
                } else if(a < b) {
                    const randomized = chance.integer({ min: a, max: b });
                    message.channel.send(randomized);
                } else {
                    message.channel.send('Something went wrong.')
                }
            } else if(args[3] === '+') {
                const w = 1;
                const x = -1;
                const y = args[0];
                const z = args[1];
                
                const a = x * y;
                const b = w * z;

                if(a > b) {
                    const randomized = chance.integer({ min: b, max: a });
                    message.channel.send(randomized);
                } else if(a < b) {
                    const randomized = chance.integer({ min: a, max: b });
                    message.channel.send(randomized);
                } else {
                    message.channel.send('Something went wrong.')
                }
            } else {
                message.channel.send('You can\'t do that.');
            }
        } else if(args[2] === '+') {
            if(args[3] === '+') {
                const x = 1;
                const y = args[0];
                const z = args[1];
                
                const a = x * y;
                const b = x * z;

                if(a > b) {
                    const randomized = chance.integer({ min: b, max: a });
                    message.channel.send(randomized);
                } else if(a < b) {
                    const randomized = chance.integer({ min: a, max: b });
                    message.channel.send(randomized);
                } else {
                    message.channel.send('Something went wrong.')
                }
            } else if (args[3] === '-') {
                const x = -1;
                const y = args[0];
                const z = args[1];
                
                const a = x * y;
                const b = x * z;

                if(a > b) {
                    const randomized = chance.integer({ min: b, max: a });
                    message.channel.send(randomized);
                } else if(a < b) {
                    const randomized = chance.integer({ min: a, max: b });
                    message.channel.send(randomized);
                } else {
                    message.channel.send('Something went wrong.')
                }
            } else {
                message.channel.send(`You can't do that.`)
            }
        }
    }
}