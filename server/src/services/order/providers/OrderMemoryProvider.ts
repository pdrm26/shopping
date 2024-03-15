import IProduct from '@src/components/product/model/IProduct'
import IOrder from '../contracts/IOrder'

export default class OrderMemoryProvider implements IOrder {
    private orderItems: IProduct[] = []

    add(product: IProduct) {
        this.orderItems.push(product)
    }

    async remove(product: IProduct) {
        const isProductExist = await this.has(product)
        if (isProductExist) this.orderItems.splice(this.orderItems.indexOf(product, 1))
    }

    async items() {
        return Promise.resolve(this.orderItems)
    }

    count() {
        return Promise.resolve(this.orderItems.length)
    }

    clear(): void {
        this.orderItems = []
    }

    totalOrdersPrice() {
        return Promise.resolve(this.orderItems.reduce((total, product) => total + product.price, 0))
    }

    has(product: IProduct) {
        return Promise.resolve(this.orderItems.includes(product))
    }
}
