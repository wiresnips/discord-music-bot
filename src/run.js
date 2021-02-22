const MusicBot = require('./index');

const config = {
  // these 3 are always required.
  token: '',
  serverId: '',
  textChannelId: '',

  // permissions is technically optional, but if you want to access to all
  // permissions you'll need to at the very least make yourself an admin.
  permissions: {
    users: {
      '': ''
    },
  }
};

const musicBot = new MusicBot(config);

musicBot.run();