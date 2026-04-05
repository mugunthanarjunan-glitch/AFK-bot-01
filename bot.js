const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'serveroneeref.play.hosting',
    port: 30023,
    username: 'AFK_Bot_01',
    version: false // auto-detect (important for new versions)
  })

  bot.on('spawn', () => {
    console.log('✅ Bot joined server!')

    // Anti-AFK movement
    setInterval(() => {
      const actions = ['forward', 'back', 'left', 'right', 'jump']
      const action = actions[Math.floor(Math.random() * actions.length)]

      bot.setControlState(action, true)

      setTimeout(() => {
        bot.setControlState(action, false)
      }, 1000)

    }, 5000)
  })

  bot.on('error', (err) => {
    console.log('❌ Error:', err.message)
  })

  bot.on('end', () => {
    console.log('⚠️ Bot disconnected. Reconnecting in 10s...')
    setTimeout(createBot, 10000)
  })
}

createBot()