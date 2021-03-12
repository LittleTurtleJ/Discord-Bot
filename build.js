const Chance = require('chance');
const chance = new Chance();

module.exports = {
    name: 'build',
    description: 'Gives you a random build idea.',
    execute(message, args) {
        let randomized = chance.integer({ min: 1, max: 50 });

        if (randomized === 1) {
            message.channel.send('Mountain-top Airport');
        } else if (randomized === 2) {
            message.channel.send('Inside Out Arcade');
        } else if (randomized === 3) {
            message.channel.send('Floating Vault');
        } else if (randomized === 4) {
            message.channel.send('Abandoned Ship');
        } else if (randomized === 5) {
            message.channel.send('Water-themed Bakery');
        } else if (randomized === 6) {
            message.channel.send('Small Automatic Farm');
        } else if (randomized === 7) {
            message.channel.send('Jungle Prison');
        } else if (randomized === 8) {
            message.channel.send('Abandoned Roller-coaster');
        } else if (randomized === 9) {
            message.channel.send('Tacky Citadel');
        } else if (randomized === 10) {
            message.channel.send('Dismal House');
        } else if (randomized === 11) {
            message.channel.send('Inside Out Hut');
        } else if (randomized === 12) {
            message.channel.send('Ice Country Farm');
        } else if (randomized === 13) {
            message.channel.send('Fire-themed Artificial Biome');
        } else if (randomized === 14) {
            message.channel.send('Bloody Evil Lair');
        } else if (randomized === 15) {
            message.channel.send('Underwater Pool');
        } else if (randomized === 16) {
            message.channel.send('Inside Out Fountain');
        } else if (randomized === 17) {
            message.channel.send('Sinking Hobbit Hole');
        } else if (randomized === 18) {
            message.channel.send('Underwater Blacksmith');
        } else if (randomized === 19) {
            message.channel.send('Stone-based Bakery');
        } else if (randomized === 20) {
            message.channel.send('Mountain-top Strip Mall');
        } else if (randomized === 21) {
            message.channel.send('Underwater Warehouse');
        } else if (randomized === 22) {
            message.channel.send('Inside Out Museum');
        } else if (randomized === 23) {
            message.channel.send('Prehistoric Windmill');
        } else if (randomized === 24) {
            message.channel.send('Underwater Fountain');
        } else if (randomized === 25) {
            message.channel.send('Abandoned Library');
        } else if (randomized === 26) {
            message.channel.send('Inside Out Artificial Biome');
        } else if (randomized === 27) {
            message.channel.send('Underwater hut');
        } else if (randomized === 28) {
            message.channel.send('Fire-themed Foritifications');
        } else if (randomized === 29) {
            message.channel.send('Sunken Hotel');
        } else if (randomized === 30) {
            message.channel.send('Spooky Hospital');
        } else if (randomized === 31) {
            message.channel.send('Asian-architect Themed Powerplant');
        } else if (randomized === 32) {
            message.channel.send('Psychadelic Powerplant');
        } else if (randomized === 33) {
            message.channel.send('Underwater Factory');
        } else if (randomized === 34) {
            message.channel.send('Small Citadel');
        } else if (randomized === 35) {
            message.channel.send('Stone-based Treasure-room');
        } else if (randomized === 36) {
            message.channel.send('Sunken Citadel');
        } else if (randomized === 37) {
            message.channel.send('Inside Out Hospital');
        } else if (randomized === 38) {
            message.channel.send('Psychadelic Roller-coaster');
        } else if (randomized === 39) {
            message.channel.send('Corrupted Geyser');
        } else if (randomized === 40) {
            message.channel.send('Water-themed Sacrificial-room');
        } else if (randomized === 41) {
            message.channel.send('Spooky Cave');
        } else if (randomized === 42) {
            message.channel.send('Psychadelic Treasure-room');
        } else if (randomized === 43) {
            message.channel.send('Lava-themed Citadel');
        } else if (randomized === 44) {
            message.channel.send('Gothic School');
        } else if (randomized === 45) {
            message.channel.send('Colourful City Block');
        } else if (randomized === 46) {
            message.channel.send('Holy Geyser');
        } else if (randomized === 47) {
            message.channel.send('Asian-architect Themed Arena');
        } else if (randomized === 48) {
            message.channel.send('Lava-themed Restaurant');
        } else if (randomized === 49) {
            message.channel.send('Sunken Pool');
        } else if (randomized === 50) {
            message.channel.send('Corrupted Country Farm');
        }
    }
}