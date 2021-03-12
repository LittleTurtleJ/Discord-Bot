module.exports = {
    name: 'kick',
    description: 'This command kicks a member.',
    example: '`>kick [@user]`',
    execute(message, args) {
        if (!args[0]) return message.channel.send('Please specify who you want to kick');

        const member = message.mentions.members.first();
        if (!member) return message.channel.send('That is not a user');
        const memberTarget = message.guild.members.cache.get(member.id);

        if(message.member.roles.cache.has('749104805204721684')){
            if(member){
                //Admin Kick
                if(member.roles.cache.has('749404550481313812')) { //Owner
                    message.channel.send('You cannot kick this member.')
                } else if(member.roles.cache.has('771857082898448394')) { //Co-Owner
                    message.channel.send('You cannot kick this member.')
                } else if(member.roles.cache.has('749104805204721684')) { //Admin
                    message.channel.send('You cannot kick this member.')
                } else if(member.roles.cache.has('749404974097891328')) { //Trial Admin
                    message.channel.send('You cannot kick this member.')
                } else {
                    memberTarget.kick();
                    message.channel.send('User has been kicked.')
                }
            } else {
                message.channel.send('Something went wrong, please alert Turtle to this issue.')
            }
        } else if(message.member.roles.cache.has('771857082898448394')){
            if(member){
                //Co Owner Kick
                if(member.roles.cache.has('749404550481313812')) { //Owner
                    message.channel.send('You cannot kick this member.')
                } else if(member.roles.cache.has('771857082898448394')) { //Co-Owner
                    message.channel.send('You cannot kick this member.')
                } else if(member.roles.cache.has('749104805204721684')) { //Admin
                    message.channel.send('You cannot kick this member.')
                } else if(member.roles.cache.has('749404974097891328')) { //Trial Admin
                    message.channel.send('You cannot kick this member.')
                } else {
                    memberTarget.kick();
                    message.channel.send('User has been kicked.')
                }
            } else {
                message.channel.send('Something went wrong, please alert Turtle to this issue.')
            }
        } else if(message.member.roles.cache.has('749404550481313812')){
            if(member){
                //Owner Kick
                if(member.roles.cache.has('749404550481313812')) { //Owner
                    message.channel.send('You cannot kick this member.')
                } else if(member.roles.cache.has('771857082898448394')) { //Co-Owner
                    message.channel.send('You cannot kick this member.')
                } else if(member.roles.cache.has('749104805204721684')) { //Admin
                    message.channel.send('You cannot kick this member.')
                } else if(member.roles.cache.has('749404974097891328')) { //Trial Admin
                    message.channel.send('You cannot kick this member.')
                } else {
                    memberTarget.kick();
                    message.channel.send('User has been kicked.')
                }
            } else {
                message.channel.send('Something went wrong, please alert Turtle to this issue.')
            }
        } else {
            message.channel.send('Try applying for staff and you could get this permission.')
        }
    }
}