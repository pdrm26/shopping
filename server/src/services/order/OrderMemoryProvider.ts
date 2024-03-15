import IProduct from '@src/components/product/model/IProduct'
import IOrder from './contracts/IOrder'

export default class BasketMemoryProvider implements IOrder {
    private orderItems: IProduct[] = []

    add(product: IProduct): void {
        this.orderItems.push(product)
    }

    remove(product: IProduct): void {
        if (this.has(product)) this.orderItems.splice(this.orderItems.indexOf(product, 1))
    }

    items(): IProduct[] {
        return this.orderItems
    }

    count(): number {
        return this.orderItems.length
    }

    clear(): void {
        this.orderItems = []
    }

    totalOrdersPrice(): number {
        return this.orderItems.reduce((total, product) => total + product.price, 0)
    }

    has(product: IProduct): boolean {
        return this.orderItems.includes(product)
    }
}
