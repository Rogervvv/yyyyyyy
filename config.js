/**
   *HENDRA LUBECK
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6281227607864']
global.ownernomer = "6281227607864"
global.premium = ['6281227607864']
global.packname = 'HENDRA LUBECK🇲🇨'
global.author = 'HENDRA LUBECK🇮🇩'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group! MEMEK',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu! KONTOL',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot NGENTOD',
    group: 'Fitur Digunakan Hanya Untuk Group! BANGSAD',
    private: 'Fitur Digunakan Hanya Untuk Private Chat! GOBLOK! ',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 50
}
global.thumb = fs.readFileSync('./image/naze.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
