require('dotenv').config()


const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on('ready', () => {
    console.log('Our bot is ready to go')
})

// client.on('messageDelete', msg => {
//     msg.channel.send(`Stop deleting messages!`)
// })

client.on('message', msg => {
    // if (msg.content != '') {
    //     msg.react('❤️')
    // }

    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
    // if(msg.content === "!mod-me") {
    //     msg.member.roles.add("797937514262036531")
    // }
})

function modUser(member) {
    member.roles.add('398355485000073236')
}

client.login(process.env.BOT_TOKEN)