import Redis from 'ioredis'

export default async function (req, res) {
  const redis = new Redis({
    port: 11579, // Redis port
    host: 'redis-11579.c72.eu-west-1-2.ec2.cloud.redislabs.com', // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    /* password: '___', */
    db: 0
  })
  const count = await redis.incr('counter')
  redis.quit()

  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify({ count }))
  res.end()
}
