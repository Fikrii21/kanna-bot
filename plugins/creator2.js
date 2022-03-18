const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "ᴏᴡɴᴇʀ ᴋᴀɴɴᴀʙᴏᴛ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Owner Putbotz\nitem1.TEL;waid=60147366955:60147366955\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:puttxd@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/Putbotz/\nitem3.X-ABLabel:📮 My Github\nitem4.ADR:;;🇲🇾 Malaysia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Selangor 🇲🇾\nitem5.X-ABLabel:───────[ *PUTBOTZ* ]───────\nEND:VCARD"
  }, {
    "displayName": "Whatsapp",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Whatsapp\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:📍 Whatsapp\nitem2.EMAIL;type=INTERNET:Whatsapp@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://faq.whatsapp.com/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;⛩️ Whatsapp;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:📞 Official Bot Whatsapp\nitem5.X-ABLabel:───────[ ᴠᴇʀɪғʏ ʙʏ ᴡʜᴀᴛsᴀᴘᴘ ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner)$/i

module.exports = handler
