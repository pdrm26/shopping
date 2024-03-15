import IProduct from '@src/components/product/model/IProduct'

export default interface IOrder {
    add(product: IProduct): void
    remove(product: IProduct): void
    items(): IProduct[]
    count(): number
    clear(): void
    totalOrdersPrice(): number
    has(product: IProduct): boolean
}
