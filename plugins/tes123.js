let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Putbotz on banhπ§
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*β§ββββββββββΒ·Β·Β·βββββββββββ§*\n                   ${wm}`, 'status@broadcast')
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
