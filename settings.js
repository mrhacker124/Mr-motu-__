//base by mr motu PATLU
//re-upload? recode? copy code? give credit ya :)
//YouTube: @ANONEYMOUSE
//Instagram: ANONEYMOUSE
//Telegram: t.me/ANONEYMOUSE
//GitHub: @ANONEYMOUSE
//WhatsApp: +48459434368
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@ANONEYMOUSE

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: loard hanuman" //ur yt chanel name
global.socialm = "GitHub: MRbacker" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'ANONEYMOUSE Bot MD V15' //ur bot name
global.ownernumber = ['48729751112'] //ur owner number, dont add more than one
global.ownername = '🦄드림 가이 Mr motu' //ur owner name
global.websitex = "https://youtu.be/Ljt4MaHq1L"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD2"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD13' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+48729751112"
global.creator = "48729751112@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["48729751112"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
