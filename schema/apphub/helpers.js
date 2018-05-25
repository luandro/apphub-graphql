import pull from 'pull-stream'

export const getApplications = (sbot) => new Promise((resolve, reject) => {
  // sbot.apphub.get((err, view) => {
  //   if (err) console.log('Error on getting apphub', err)
  //   console.log('Got view', view)
    // resolve(view)
    pull(
      sbot.apphub.stream(),
      pull.collect((err, view) => {
        if (err) reject(err)
        console.log('VIEW', view)
        resolve(view)
      }),
    )
    // ssbServer.close()
  // })
})

export const publishMessage = (content, sbot) => new Promise((resolve, reject) => {
  sbot.publish(content, (err, msg) => {
    if (err) {
      console.log(err)
      reject(err)
    }
    resolve(msg)
  })
})