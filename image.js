const Chance = require('chance');
const chance = new Chance();
const Bing = require('node-bing-api')({ accKey: 'As1vSSEEAcShEelRyYjsnPeEL0qOXGtAUnFrxzqaQDyiYFwnijKyNVDlpEUGeOpT' });
const request = require('request');

module.exports = {
    name: 'image',
    description: 'Gives you an image from Google.',
    example: '`>image [image of]`',
    async execute(message, args) {
        const imageQuery = args.join(' ');
        const random = chance.integer({ min: 0, max: 5000 });

        request('')

        /*Bing.images(imageQuery, {
            count: 50,
            offset: random
        }, function(error, res, body) {
            console.log(body);
        }); */
    }
}