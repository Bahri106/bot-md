let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana/pulsa 」
│ • Im3 [6285732195087]
│ • Gopay/pulsa [6285707645429]
│ • Dana  [6285707645429]
│ • Klo udah Masuk ss sbg bukti ye🤓
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285707645429
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler