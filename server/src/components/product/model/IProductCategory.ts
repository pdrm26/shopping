import { Document } from 'mongoose'
import IProductAttribute from './IProductAttribute'

export default interface IProductCategory extends Document {
    title: string
    totalProducts: number
    attributes: IProductAttribute[]
}
