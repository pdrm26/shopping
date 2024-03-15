import { Document } from 'mongoose'

export default interface IOrderItem extends Document {
    price: number
    product: object
    createdAt: Date
}
