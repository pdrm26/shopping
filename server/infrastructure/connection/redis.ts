import { Tedis } from 'tedis'

// no auth
export const tedis = new Tedis({
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
})
