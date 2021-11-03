
const { chain } = require('mathjs')
function helloWorld() {//just a console.log package
console.log(`Hello world`);
}
//usage hellowWorld()

function sum(a, b) {//addtion function
let add = new chain(a)
.add(b)
.done()
message.channel.send(add)
//usage sum(here, here1)
} //justunicode first do in shell npm login and then put ur email, password ok  no fakes real cuz u need to sign up for npmjs.com to work on package okay 

function randomNumber(number) {
  if(typeof number !== "number") return TypeError("❌ | Only numbers can be randomized")
  return Math.floor(Math.random() * number)
}

function del() {//short message.delete function
message.delete();
}

function card(background, text) {
`https://api.popcat.xyz/welcomecard?background=`+ background + `&text1=` + text + `&text2=${member.guild.name}&text3=Welcome!&avatar=${member.displayAvatarURL({ dynamic: false })}`
}


//usage del()


module.exports = { helloWorld, sum, del, card, randomNumber };
//put shiny token takin long idk why also who would use this pakage if they need shinybot token and this sint loading
//I will fix one sec im gonna watch yt
//kk let me know when you have time