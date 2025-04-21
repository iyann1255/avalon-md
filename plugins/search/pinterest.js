import { pinterest } from '../../lib/scrape.js'
			
let handler = async (m, { conn, text, usedPrefix, command, isPrems }) => {
	if (!text) throw `Example : ${usedPrefix + command} spongebob`
	try {
		let anu = await (await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${text}`)).json()
		await conn.sendMsg(m.chat, { react: { text: '🔍', key: m.key } })
		anu = anu.data.getRandom()
		await conn.sendFile(m.chat, anu.images_url, '', anu.grid_title || `*Search : ${text.trim()}*`, m)
	} catch (e) {
		console.log(e)
		m.reply('media tidak ditemukan')
	}
}

handler.help = ['pinterest <teks>']
handler.tags = ['searching']
handler.command = /^(pin(terest2?)?)$/i

export default handler