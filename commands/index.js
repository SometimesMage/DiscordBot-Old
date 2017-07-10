const events = require('events');
const commandPrefix = require('../config').command.prefix;
const commandEmitter = new events.EventEmitter();

commandEmitter.on('command', (cmd, msg) => {
    let name = msg.member.nickname ? msg.member.nickname : msg.member.user.username;
    console.log(`${name} issued ${commandPrefix}${cmd} command.`);
});

module.exports.emitter = commandEmitter;

require('./userinfo');
require('./custom');