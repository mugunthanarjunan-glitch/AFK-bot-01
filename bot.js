const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'YOUR_SERVER_IP', // example: abc.play.hosting
  port: 25565,
  username: 'AFK_Bot_01'
})

bot.on('spawn', () => {
  console.log('Bot joined server!')

  // move randomly to avoid AFK kick
  setInterval(() => {
    const actions = ['forward', 'back', 'left', 'right']
    const action = actions[Math.floor(Math.random() * actions.length)]

    bot.setControlState(action, true)

    setTimeout(() => {
      bot.setControlState(action, false)
    }, 1000)

  }, 5000)
})