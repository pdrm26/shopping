import { Schema, model } from 'mongoose'
import IOrderItem from './IOrderItem'

const orderItemSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
})

export default model<IOrderItem>('OrderItem', orderItemSchema)
