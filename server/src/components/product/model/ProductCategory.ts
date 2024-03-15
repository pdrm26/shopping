import { Schema, model } from 'mongoose'
import IProductCategory from './IProductCategory'

const productCategorySchema = new Schema({
    title: { type: String, required: true },
    totalProducts: { type: Number, default: 0 },
    attributes: { type: [Object] },
})

export default model<IProductCategory>('ProductCategory', productCategorySchema)
