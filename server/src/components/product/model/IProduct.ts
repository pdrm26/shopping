import { Document } from 'mongoose'
import ProductStatus from './ProductStatus'
import IProductAttribute from './IProductAttribute'

export default interface IProduct extends Document {
    title: string
    thumbnail: string
    gallery?: string[]
    price: number
    discount: number
    createdAt: Date
    updatedAt: Date
    status: ProductStatus
    category: string
    attributes: IProductAttribute[]
}
