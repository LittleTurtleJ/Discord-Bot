const Chance = require('chance');
const chance = new Chance();

module.exports = {
    name: 'insult',
    description: 'Randomly insults a player',
    example: '`>insult [@user]`',
    execute(message, args) {
        if (!args[0]) return message.channel.send('You didn\'t specify who you want to insult.');
        
        const user = message.mentions.members.first();
        if (!user) return message.channel.send('Why are you trying to insult something smarter than you?');

        let randomized = chance.integer({ min: 1, max: 10 })

        if (randomized === 1 ) {
            message.channel.send(`${user} is a fricking idgit.`)
        } else if (randomized === 2) {
            message.channel.send(`Imagine being a dumbass like ${user} is.`)
        } else if (randomized === 3) {
            message.channel.send(`${user} is so dumb they cant find their feet if the instructions were written on their shoe.`)
        } else if (randomized === 4) {
            message.channel.send(`${user} is a buttface.`)
        } else if (randomized === 5) {
            message.channel.send(`Who called ${user} smart?`)
            
            setTimeout(() => {
                message.channel.send(`Ah, that's right. Nobody.`);
            }, 2000);
        } else if (randomized === 6) {
            message.channel.send(`${user} is the reason God made the middle finger.`)
        } else if (randomized === 7) {
            message.channel.send(`${user} is a grey sprinkle on an otherwise colourful cupcake.`)
        } else if (randomized === 8) {
            message.channel.send(`${user} is more disappointing than a cinder block that hasnt moved.`)
        } else if (randomized === 9) {
            message.channel.send(`If ${user}'s life was a candle, it would smell worse than disappointment`)
        } else if (randomized === 10) {
            message.channel.send(`${user} is cool.`)

            setTimeout(() => {
                message.channel.send(`Jk lol Gottem`)
            }, 2000)
        }
    }
}