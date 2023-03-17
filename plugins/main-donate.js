
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 69 MILLION FOLLOWERS ON MY INSTAGRAM`
let img = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg'
conn.sendHydrated2(m.chat, don, '▢ MAY LORD  BLESS YOUR DAY\n923466056497\n▢ Subscribe  Youtube\n923466056497\n', img,'923466056497', 'Instagram', '923466056497', 'TELEGRAM', [
    ], m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
