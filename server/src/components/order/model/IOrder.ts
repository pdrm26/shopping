import { Document } from 'mongoose'
import OrderStatus from './OrderStatus'
import IOrderItem from './IOrderItem'

export default interface IOrder extends Document {
    user: object
    createdAt: Date
    updatedAt: Date
    status: OrderStatus
    quantity: number
    totalPrice: number
    discount: object
    finalPrice: number
    orderItems: IOrderItem[]
}
