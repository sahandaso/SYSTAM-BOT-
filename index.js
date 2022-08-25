

const express = require("express");
const app = express();

app.listen(() => console.log(`
    `));

app.use('/ping', (req, res) => {
  res.send(new Date());
});




const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

const mySecret = process.env['TOKEN']

////////////

client.on("guildCreate", (guild) => {
       let channel = client.channels.get(guild.channels.filter(c => c.permissionsFor(client.user).has("SEND_MESSAGES") && c.type === "text").map(r => r.id)[0])    
       channel.send(``)
});




///bot حاله

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(prefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `)
  } else 
  if (message.content.startsWith(prefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `)
  } else 
  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Chill");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `)
  }

  });




const prefix = "-"///your id
const developers = ""///your id


///كود الهيلب

      client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "help") {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#36393e')
        .setTitle('Check Your Private 🔒')
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('Our Server')
         .setURL('https://discord.gg/SaGrHxfjwT')
         .setDescription(`
         \`\`\`Main Commands  :\`\`\`         
         
         ⚡ ${prefix} bot : To See Bot Info
         
         ⚡ ${prefix} avatar : To See Your Picture
		 
         ⚡ ${prefix} savatar : To See Server Picture
         
         ⚡ ${prefix} allbots : To See Bots List
         
         ⚡ ${prefix} user : To See Your Account Info
         
         ⚡ ${prefix} server : To See Server Info

         ⚡ ${prefix} ping : To See Your Ms

         ⚡ ${prefix} roles : To See Server Roles
         
         ⚡ ${prefix} meme : To See A Meme

         \`\`\`Admin Commands :\`\`\` 
         
         \`Text Commands \`
         
         ⚡ ${prefix}ban  
         
         ⚡ ${prefix}kick  
         
         ⚡ ${prefix}bc  
         
         ⚡ ${prefix}mute 
         
         ⚡ ${prefix}unmute  
         
         ⚡ ${prefix}lock  
         
         ⚡ ${prefix}unlock 

         ⚡ ${prefix}hide  
         
         ⚡ ${prefix}show   
         
         ⚡ ${prefix}role  
        
         ⚡ ${prefix}role all    
         
         ⚡ ${prefix}role humans    
         
         ⚡ ${prefix}role bots    
         
         ⚡ ${prefix}say    
         
         ⚡ ${prefix}embed    
         
         \`Voice Commands  \`
         
        - ${prefix}Move all      

         \`\`\`Credits Commands  \`\`\`  
        - ${prefix}credits   

        ⚡ ${prefix}daily    

        ⚡ ${prefix}credits <@User> <Amount> 




         
`)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('**Open Your Dm**'))
   
   }
   });
  

///أوامر عامة

///ping
client.on('message', message => {   
  if (message.content === prefix + "ping") {
   const embed = new Discord.RichEmbed()

.setColor("RANDOM")
.addField(':chart_with_upwards_trend:  **Your Ping is:** ' , `${Date.now() - message.createdTimestamp}` + 'ms :signal_strength: ')


message.channel.sendEmbed(embed);
 }
});

///avatar savatar
client.on("message",message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "avatar")){
  const mention = message.mentions.users.first()
  
  if(!mention) return console.log("") 
  let embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
  .setTitle("Avatar Link")
  .setURL(`${mention.avatarURL}`)
  .setImage(`${mention.avatarURL}`)
  .setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
      message.channel.send(embed)
  }
  })
  
  client.on("message", message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "savatar")) {
      let doma = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL)
      .setImage(message.guild.iconURL)
      .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
      message.channel.send(doma)
    } else if(message.content.startsWith(prefix + "avatar")) {
      let args = message.content.split(" ")[1]
  var avt = args || message.author.id;    
      client.fetchUser(avt).then(user => {
       avt = user;
    let embed = new Discord.RichEmbed() 
    .setColor("BLACK")
    .setAuthor(`${avt.tag}`, avt.avatarURL)
    .setTitle("Avatar Link")
    .setURL(avt.avatarURL)
    .setImage(avt.avatarURL)
    .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed) 
      })
    }
  });

  ///bot info
  
client.on('message', message => {
  if (message.content.startsWith( prefix + "bot")) {
  message.channel.send({
  embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
     .setColor('RANDOM')
     .setTitle('``Info The Bot`` ')
     .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
     .addField('``servers``', [client.guilds.size], true)
     .addField('``channels``' , `[ ${client.channels.size} ]` , true)
     .addField('``Users``' ,`[ ${client.users.size} ]` , true)
     .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
     .addField('``My ID``' , `[ ${client.user.id} ]` , true)
           .addField('``My Prefix``' , `[ > ]` , true)
           .addField('``My Language``' , `[ Js ]` , true)
           .addField('``Bot Version``' , `[ v0.1 ]` , true)
           .setFooter('By | @YassineHz#8175')
  })
  }
  });


///server

client.on('message', function(msg) {

  if(msg.content.startsWith (prefix + 'server')) {
    if(!msg.channel.guild) return msg.reply('**❌ This Command Only For Servers **');
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`,true)
    .addField(':id: **Server ID:**',`${msg.guild.id}`,true)
    .addField('📅** Created On**',msg.guild.createdAt.toLocaleString())
    .addField('👑** Owned By**',`${msg.guild.owner}`,true)
    .addField(':busts_in_silhouette:  **Members **' + `[ ${msg.guild.memberCount} ]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}**` + ' Online')
    .addField(':speech_balloon: Channels ' + `[ ${msg.guild.channels.size} ]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}**` + ' Text | ' + `**${msg.guild.channels.filter(m => m.type === 'voice').size}**` + ' Voice')//tt
    .addField(':earth_africa: Others','**Region: **' + `${msg.guild.region}` + ' **Verification Level:** ' + `${msg.guild.verificationLevel}`)
    .addField(':closed_lock_with_key:** Rules **' + `[ ${msg.guild.roles.size} ]`,'To see a list with all roles use **$roles**');
    msg.channel.send({embed:embed});
  }
});


///user
client.on("message", pixelbot => {

  if (pixelbot.content.startsWith(prefix + "user")) {

    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {

      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() 
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | User Info") 
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**✽ Name :**   ", pixelbot.author.username, true)
        .addField("**✽ Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**✽ ID :** ", pixelbot.author.id, true) 
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**✽ Total invites :**    ", inviteCount, true)
        .setTimestamp(); 

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); 
    });
  }
}); 


///allbots
client.on('message', alphamsg => {
  if(alphamsg.content === prefix + "allbots") { 
  if(!alphamsg.channel.guild) return;
let alphaf = 1;
const alpha = alphamsg.guild.members.filter(m=>m.user.bot).map(m=>`:small_orange_diamond: ${alphaf++} - <@${m.id}>`);
          alphamsg.channel.send(`**وجدت ${alphamsg.guild.members.filter(m=>m.user.bot).size} بوت
البوتات الموجوده في السيرفر

${alpha.join('n')}
**
`)
}
});

///roles

client.on('message', message => {
  if (message.content.startsWith(prefix + 'roles')) {

      const Rank = message.guild.roles.map(e => e.toString()).join(" ");

      const RankList = new Discord.RichEmbed()
          .setTitle('➠ Roles.')
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('RANDOM')
          .setDescription(Rank)
          .setFooter(message.guild.name)
      message.channel.send(RankList)
  }
});

////اوامر ادارية

///kick

client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!reason) return message.reply("**Type The Reason**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**U can't Kick This Person**"
      );
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("Ican't Kick Person Higher Then You!");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});


///ban
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You don't have Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**Mention The Person**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**Role Of Bot Must Be Heigher Then The Person  That you Want To Ban Him**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});

///show hide
client.on('message', message => {
        if(message.content === prefix + "hide") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('**Chat Hided**')
   }
  });
  
  
  client.on('message', message => {
        if(message.content === prefix + "show") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('**Chat Appear Again**')
   }
  });

/// lock unlock
client.on('message', message => {

  if(message.content === `${prefix}lock`) {
                      if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("** ✅ | Chat Closed  **")
         });
           }

if(message.content === `${prefix}unlock`) {
                   if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('** You dont have `MANAGE_CHANNELS` permission **');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("**✅ | Chat Opened **")
         });
           }
           
    
  
});

///mute unmute

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "mute") {
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** You Don't Hvae Role Of 'Manage Roles' **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("**  There isn't Muted Role  'Muted' **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("**Mention The Person First**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("الأستعمال:", "Mute/Unmute")
      .addField(
        " Succefully Muted:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "With:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** You Don't Have Permission Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .reply("**:white_check_mark: .. Member Muted**")
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .reply("**:white_check_mark: ..Member Chat Muted**")
            .catch(console.error);
        });
    }
  }
  
  
});



client.on("message", message => {
  if(!message.channel.guild) return;  
   if (message.author.bot) return;
  
   let command = message.content.split(" ")[0];
  
   if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
         if (!message.member.hasPermission('MANAGE_ROLES')) return;
   let user = message.mentions.users.first();
   let modlog = client.channels.find('name', 'log');
   let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
   if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
   if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
  
   if (message.guild.member(user).removeRole(muteRole.id)) {
       return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
   } else {
     message.guild.member(user).removeRole(muteRole).then(() => {
       return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
     });
   }
  
 };
  
 });

//clear
client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "**```fix\f" +
                  messagesDeleted +
                  " " +
                  "Deleted Messages" +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " +
                "**```fix\n" +
                args[1] +
                " " +
                "Deleted Messages" +
                "```**"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});

//say embad

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
    if (!message.channel.guild)
      return message.channel
        .send("This Command Only For Servers")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("You Don't Have Acces To This Command");
    message.delete();
    message.channel.sendMessage(args.join(" "));
  }

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("This Command Only For Servers")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You Don't Have Acces To This Command");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});

//role

client.on("message", message => {
  let roleembed = new Discord.RichEmbed()
.setDescription(`
  Examples :
-role @mention rolename 
-role all rolename    
-role humans rolename    
-role bots rolename :  `)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
var args = message.content.split(' ').slice(1);
var msg = message.content.toLowerCase();
if( !message.guild ) return;
if( !msg.startsWith( prefix + 'role' ) ) return;
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You Don`t Have Acces To This Command__** ');
if( msg.toLowerCase().startsWith( prefix + 'roleembed' ) ){
    if( !args[0] ) return message.channel.sendEmbed(roleembed)
    if( !args[1] ) return message.channel.sendEmbed(roleembed)
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
    if( !role1 ) return message.reply( '**:x:Mention The Person That You Want Give Him Role**' );if( message.mentions.members.first() ){
        message.mentions.members.first().addRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ] Role gave to [ '+args[0]+' ] Succefully **');
    }
    if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.addRole( role1 ))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ]   Role Gave To All  **');
    } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ]   Role Gave To Bots  **');
    } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ]Role Gave To this 2 Humans**');
    }  
} else {
    if( !args[0] ) return message.reply( '**:x:Mention The Person That You Want Give Him Role**' );
    if( !args[1] ) return message.reply( '**:x:Put The Role That You Want**' );
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
    if( !role1 ) return message.reply( '**:x:Mention The Person That You Want Give Him Role**' );if( message.mentions.members.first() ){
        message.mentions.members.first().addRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ]  [ '+args[0]+' ]  Done **');
    }
    if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.addRole( role1 ))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ]  Role Gave Succefully  **');
    } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] Role Gave Succefully To Bots **');
    } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ]Role Gave To this 2 Humans**');
    }
}
});



// ------------ = [Voice Commands] = ------------

 client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });




/////كود كريدت
  
const cool = [];

client.on('message',async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:| هذه الخانة يجب ان تتكون من ارقام وليس احرف.**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} Person Not Found **`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| Wtf Are Your Doing !**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x:| You Don`t Have This Amount**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, Type The Number To Continue**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, Amount Sent \`${balance}\` لـ ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: | Message Cancled**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} Person Not Found**`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
  }
 
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , Wait 24h To Claim Your Prise **`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
 
      var number = `${one}${two}${three}${four}`;
 
      message.channel.send(`**:atm: | \`${number}\`, Type The Number To Continue**`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
          message.channel.send(`**:atm: | \`${daily}\`, Amount Sent**`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
      message.channel.send(`**:atm: | \`${daily}\`, Amount Sent **`);
    }
    cool.unshift(message.author.id);
 
    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: | \`Daily\`, You Can Your Free Reward Now**").catch();
    }, ms("1d"));
  }
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});




client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "meme")){
    let reply =[
      'https://pm1.narvii.com/7630/ca050d19dc9832424a888f017e6f1c28762d8f17r1-863-540v2_hq.jpg',
      'https://i.pinimg.com/originals/9a/b7/b7/9ab7b7e225f2cc5ee190e8a67c126c66.jpg',
      'https://pbs.twimg.com/media/Ecq6FxYWkAIQ8pE.jpg',
      'https://i.ytimg.com/vi/sm6z50Qoxqg/maxresdefault.jpg',
      'https://64.media.tumblr.com/tumblr_m7mw1u9vb81rr8kmyo1_1280.jpg',
      'https://i.ytimg.com/vi/7lTvO9wxqPw/hqdefault.jpg',
      'https://pm1.narvii.com/7723/6ed7ca7c14b84d2f36a9383ba01751a600e537f8r1-799-624v2_uhq.jpg',
      'https://i.pinimg.com/564x/04/80/c8/0480c863e93e5f83f3eb087c0579961a.jpg',
      'https://i.ytimg.com/vi/rlOT3GCBVjE/hqdefault.jpg',
      'https://i.ytimg.com/vi/C7-hq9Ffcj8/maxresdefault.jpg',
      'https://pbs.twimg.com/media/ESnM7BbXQAAb0w2.jpg',
      'https://i.ytimg.com/vi/0Hp2a-lrm_o/hqdefault.jpg',
      'https://i.ytimg.com/vi/SRrIcSkwYGQ/mqdefault.jpg',

      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
})

client.login(mySecret);
