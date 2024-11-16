// NEW ADDED NEWS SITE [ BBC , LANKADEEPA ]

const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')
const axios = require('axios')

const apilink = 'https://dark-yasiya-news-apis.vercel.app/api' // API LINK ( DO NOT CHANGE THIS!! )


// ================================LANKADEEPA NEWS========================================

cmd({
    pattern: "lankadeepanews",
    alias: ["lankadeepa","news4"],
    desc: "lankadeepaNews",
    category: "news",
    use: '.lankadeepanews',
    react: "🧾",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply }) => {
try{

const news = await fetchJson(`${apilink}/lankadeepa`)
  
const msg = `
           🕵️‍♂️ *LANKADEEPA NEWS* 🕵️‍♂️

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Date* - ${news.result.date}

• *Link* - ${news.result.url}`


await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
await m.react("✅");

} catch (e) {
console.log(e)
reply(e)
}
})

// ================================BBC NEWS========================================

cmd({
    pattern: "bbcnews",
    alias: ["bbc","news5"],
    desc: "bbcNews",
    category: "news",
    use: '.bbcnews',
    react: "🧾",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply }) => {
try{

const news = await fetchJson(`${apilink}/bbc`)
  
const msg = `
           ⛩ *BBC NEWS* ⛩

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Link* - ${news.result.url} `


await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
await m.react("✅");

} catch (e) {
console.log(e)
reply(e)
}
})


//==================== hiru news ============================



cmd({
    pattern: "hirunews",
    alias: ["hiru","news1"],
    desc: "hiruNews",
    category: "news",
    use: '.hirunews',
    react: "🧾",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply }) => {
try{

const news = await fetchJson(`${apilink}/hiru`)
  
const msg = `
           ⭐ *HIRU NEWS* ⭐

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Link* - ${news.result.url}`


await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
await m.react("✅");

} catch (e) {
console.log(e)
reply(e)
}
})

// ================================SIRASA NEWS========================================

cmd({
    pattern: "sirasanews",
    alias: ["sirasa","news2"],
    desc: "hiruNews",
    category: "news",
    use: '.sirasa',
    react: "🧾",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply }) => {
try{

const news = await fetchJson(`${apilink}/sirasa`)
  
const msg = `
           🔺 *SIRASA NEWS* 🔺

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Link* - ${news.result.url} `


await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
await m.react("✅");

} catch (e) {
console.log(e)
reply(e)
}
})

// ================================DERANA NEWS========================================

cmd({
    pattern: "derananews",
    alias: ["derana","news3"],
    desc: "deranaNews",
    category: "news",
    use: '.derana',
    react: "🧾",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply}) => {
try{

const news = await fetchJson(`${apilink}/derana`)
  
const msg = `
           📑 *DERANA NEWS* 📑

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Date* - ${news.result.date}

• *Link* - ${news.result.url} `


await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
await m.react("✅");

} catch (e) {
console.log(e)
reply(e)
}
})

//====================================esana news=============================================


cmd({
    pattern: "esananews",
    alias: ["esana","news6"],
    desc: "esanaNews",
    category: "news",
    use: '.esananews',
    react: "🧾",
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply }) => {
try{

const news = await fetchJson(`${apilink}/esana`)
  
const msg = `
           🏛️ ESANA NEWS 🏛️

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Link* - ${news.result.url}

`


await conn.sendMessage( from, { image: { url: news.result.image || '' }, caption: msg }, { quoted: mek })
await m.react("✅");

} catch (e) {
console.log(e)
reply(e)
}
})


//==========================================

