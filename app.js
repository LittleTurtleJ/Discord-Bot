const chalk = require('chalk');
const Discord = require('discord.js');

module.exports = {
    name: 'app',
    description: 'Starts a application process.',
    execute(message, args) {
        const writer = message.author.id;
        
        message.react('🇾').then(() => message.react('🇳')).then(() => {
            message.reply('please react with 🇾 to continue or 🇳 to stop.')
        });

        const filter = (reaction, user) => {
	        return ['🇾', '🇳'].includes(reaction.emoji.name) && user.id === writer;
        };

        message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
	        .then(collected => {
		        const reaction = collected.first();

		        if (reaction.emoji.name === '🇾') {
                    message.author.send('Let the application process begin.').then(() => {
                        const filter2 = new Discord.MessageCollector(m => m.author.id === message.author.id, { time: 60000 })

                        message.author.send('Question 1: How much do you know about Discord? Please respond with 1-10. 1 for almost nothing and 10 for basically everything.')
                        filter2.on('collect', message => {
                            if (message.content === '1') {
                                console.log('1')
                            } else if (message.content === '2') {
                                console.log('2')
                            } else if (message.content === '3') {
                                console.log('3')
                            } else if (message.content === '4') {
                                console.log('4')
                            } else if (message.content === '5') {
                                console.log('5')
                            } else if (message.content === '6') {
                                console.log('6')
                            } else if (message.content === '7') {
                                console.log('7')
                            } else if (message.content === '8') {
                                console.log('8')
                            } else if (message.content === '9') {
                                console.log('9')
                            } else if (message.content === '10') {
                                console.log('10')
                            }
                        })
                        .catch(error)
                    })
		        } else {
		        	message.reply('I will not continue the application process');
		        }
	        })
	        .catch(collected => {
	        	message.reply('this message is now void.');
            });
    }
}