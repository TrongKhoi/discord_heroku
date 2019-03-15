const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

 client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on('message', message => {
  // If the message is "avatar"
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.on('message', msg => {
  if (msg.content === 'Hi') { msg.reply('Hi');}
  if (msg.content === 'ten k') { msg.reply('anh đây');}
  if (msg.content === "đm") { msg.reply('bậy nè');}
  if (msg.content === "ai hay thủ dâm") { msg.reply('Là bạn đó');}
  if (msg.content === "ai hay ăn cứt") { msg.reply('Ngoài bạn ra còn ai đâu');}
  if (msg.content === "Tenk") { msg.reply('Anh ấy đang bận.');}
  if (msg.content === "dm") { msg.reply('tự vả vào mồm đi');}
  if (msg.content === "tenk") { msg.reply('gọi cc');}
});

const embed = new Discord.RichEmbed()
  .setTitle("**Đây là info về người bạn xin**")
  .setAuthor("Meo K", "https://cdn.discordapp.com/avatars/468789858450800640/b7b595325b3712a82971397dba9e76f2.png?size=2048")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("________________________________________________________________________________________________")
  .setFooter("Meo K", "https://cdn.discordapp.com/attachments/416629410062532623/487245094156632064/Gasmic.png")
  .setImage("https://cdn.discordapp.com/attachments/416629410062532623/487244925159866388/haha.gif")
  .setThumbnail("https://cdn.discordapp.com/avatars/379669925301714946/17c6a4e3446157794e13ebf89abe9fe1.png?size=2048")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Name: Ten K", "🙄🙄🙄🙄🙄")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Date of birth", "xx/xx/xxxx.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Address", "Sao Hỏa", true);

client.on("message", (message) => {
 
 if (message.content.startsWith("meo meo")) {message.channel.send("Gâu gâu");}
 if (message.content.startsWith("em thích ai")) {message.channel.send("em thích trai kỹ thuật, họ mạnh mẽ và đầy nam tính");}
 if (message.content.startsWith("info")) {message.channel.send({embed});}
 if (message.content.startsWith("hello")) {message.channel.send("lô cc");}
 if (message.content.startsWith("Hello")) {message.channel.send("lô cc");}
 if (message.content.startsWith("helo")) {message.channel.send("lô cc");}
 if (message.content.startsWith("Helo")) {message.channel.send("lô cc");}
 if (message.content.startsWith("Hế lô")) {message.channel.send("Lố hê");}
  if (message.content.startsWith("dm bot")) {message.channel.send("Bậy nè");}
  if (message.content.startsWith("bye")) {message.channel.send("Thả chó, tiễn khách");}
  if (message.content.startsWith("@@")) {message.channel.send("O_o");}
  if (message.content.startsWith("vuông tròn")) {message.channel.send("□ ○");}
  if (message.content.startsWith("tròn vuông")) {message.channel.send("○ □");}
  if (message.content.startsWith("vuông vuông")) {message.channel.send("□ □");}
  if (message.content.startsWith("tròn tròn")) {message.channel.send("○ ○");}
  if (message.content.startsWith("Ten K là ai")) {message.channel.send(":)");}
  if (message.content.startsWith("cú lừa")) {message.channel.send("lừa cc");}
  if (message.content.startsWith("lễ tân đâu")) {message.channel.send("Dạ, em đây.");}
  if (message.content.startsWith("rên thử coi")) {message.channel.send("ư ư kimochi");}
  if (message.content.startsWith("lễ tân làm gì")) {message.channel.send("Vui lòng khách đến, vừa lòng khách đi.");}
  if (message.content.startsWith("cu lua")) {message.channel.send("Lừa cc");}
  if (message.content.startsWith("làm tốt anh có thưởng")) {message.channel.send("Dạ <3");}
  if (message.content.startsWith(":eyes:")) {message.channel.send(":eyes:");}
 
});
 
 
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
