import IProduct from '@src/components/product/model/IProduct'

export default interface IOrder {
    add(product: IProduct): void
    remove(product: IProduct): void
    items(): Promise<IProduct[]>
    count(): Promise<number>
    clear(): void
    totalOrdersPrice(): Promise<number>
    has(product: IProduct): Promise<boolean>
}
