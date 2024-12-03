const fs = require('fs')
global.d = new Date()
global.calender = d.toLocaleDateString('id')
global.apikey = '-'
global.capikey = '-'
global.domain = '-'
global.eggsnya = '15' 
global.location = '1' 
global.prefa = [','] 
global.owner = ["60108995561"] 
global.ownMain = '60108995561' 
global.NamaOwner = '𝐔𝐋𝐓𝐑𝐀𝐕𝟐.𝟗 𝐁𝐄𝐓𝐀'
global.sessionName = 'session'
global.connect = true
global.namabot = '𝐔𝐋𝐓𝐑𝐀𝐕𝟐.𝟗 𝐁𝐄𝐓𝐀'
global.mess = {
ingroup: '*𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝙞𝙣 𝙂𝙧𝙤𝙪𝙥シ*',
admin: '*𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝘽𝙮 𝘼𝙙𝙢𝙞𝙣シ*',
owner: '*𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝘽𝙮 𝙊𝙬𝙣𝙚𝙧シ*',
premium: '*𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝙊𝙬𝙣𝙚𝙧 𝘼𝙣𝙙 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 𝙐𝙨𝙚𝙧シ*',
usingsetpp: '*𝙎𝙚𝙩𝙥𝙥 𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝘽𝙮 𝙏𝙝𝙚 𝙊𝙬𝙣𝙚𝙧*',
wait: '*𝙒𝙖𝙞𝙩𝙞𝙣𝙜 𝙁𝙤𝙧 𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🔥*',
success: '*𝙎𝙪𝙘𝙘𝙚𝙨𝙨〽️*',
bugrespon: '*𝙋𝙧𝙤𝙘𝙚𝙨𝙨⚡*'
}
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})