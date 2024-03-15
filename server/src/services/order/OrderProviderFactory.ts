import IOrder from './contracts/IOrder'
import OrderMemoryProvider from './providers/OrderMemoryProvider'
import OrderRedisProvider from './providers/OrderRedisProvider'

export default class OrderProviderFactory {
    providers = new Map<string, IOrder>()

    constructor() {
        this.providers.set('redis', new OrderRedisProvider())
        this.providers.set('memory', new OrderMemoryProvider())
    }

    //******** in the line below we have two ways to infer the keys of the map provider dynamically.  ** ONLY FOR CONSTRAINT SITUTATIONS*/
    // getProvider(provider: Parameters<(typeof OrderProviderFactory.prototype.providers)['get']>[0]) {
    // getProvider(provider: typeof OrderProviderFactory.prototype.providers extends Map<infer K, unknown> ? K : never) {
    getProvider(providerName: string) {
        if (this.hasProvider(providerName)) return this.providers.get(providerName)
    }

    registerProvider(providerName: string, providerClass: IOrder) {
        if (!this.hasProvider(providerName)) this.providers.set(providerName, providerClass)
    }

    private hasProvider(providerName: string) {
        return this.providers.has(providerName)
    }
}
