import IProduct from '@src/components/product/model/IProduct'
import { Document } from 'mongoose'

export default interface IProductOffer extends Document {
    product: IProduct[]
    image: string
    price: number
}
