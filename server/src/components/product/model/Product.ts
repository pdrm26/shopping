import { Schema, model } from 'mongoose'
import IProduct from './IProduct'
import ProductStatus from './ProductStatus'

const productSchema = new Schema({
    title: { type: String, required: true },
    Price: { type: Number, required: true },
    thumbnail: { type: String },
    gallery: { type: [String] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: ProductStatus, default: ProductStatus.INIT },
    discount: { type: Number, default: 0 },
    category: { type: Schema.Types.ObjectId, ref: 'ProductCategory' },
    attributes: { type: [Object], required: true },
})

export default model<IProduct>('Product', productSchema)
