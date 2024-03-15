import IProduct from '@src/components/product/model/IProduct'
import IOrder from '../contracts/IOrder'
import { tedis } from '@infrastructure/connection/redis'
import IOrderConfigurable from '../contracts/IOrderConfigurable'

export default class OrderRedisProvider implements IOrder, IOrderConfigurable {
    // key = 'session:order:uid'

    private key = ''

    private async getOrdersFromRedis(): Promise<IProduct[]> {
        const orders = await tedis
            .get(this.key)
            .then((res) => res)
            .catch((err) => `Can not get the products from redis: ${err}`)

        if (orders) {
            return JSON.parse(orders as string)
        }

        return []
    }

    config(key: string) {
        this.key = key
    }

    async add(product: IProduct) {
        const orders = await this.getOrdersFromRedis()
        await tedis.set(this.key, JSON.stringify(orders.push(product)))
    }

    async remove(product: IProduct) {
        const orders = await this.getOrdersFromRedis()
        await tedis.set(this.key, JSON.stringify(orders.splice(orders.indexOf(product), 1)))
    }

    async items() {
        return await this.getOrdersFromRedis()
    }

    async count() {
        const orders = await this.getOrdersFromRedis()
        return orders.length
    }

    async clear() {
        await tedis
            .del(this.key)
            .then((res) => console.log('Clear Operation success', res))
            .catch((err) => `Clear Operation fail: ${err}`)
    }

    async totalOrdersPrice() {
        const orders = await this.getOrdersFromRedis()
        return orders.reduce((total, order) => total + order.price, 0)
    }

    async has(product: IProduct) {
        const orders = await this.getOrdersFromRedis()
        return orders.includes(product)
    }
}
