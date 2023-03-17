import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
ᴛʜᴇ ɢᴜʀᴜ ʙᴏᴛ ꜱᴄʀɪᴘᴛ
923466056497
ᴅᴏ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʀᴋ
`
let pp = 'MUBASHIR NAWAB' 
conn.sendButton(m.chat, m2, pp, [
  ['⏍ Info', `${usedPrefix}botinfo`],
  ['⌬ Groups', `${usedPrefix}gpguru`]
],m, rpyt)

}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['script', 'sc', 'repo'] 

export default handler
