import { Schema, model } from 'mongoose'
import IOrder from './IOrder'
import OrderStatus from './OrderStatus'
import OrderItem from './OrderItem'
import addressSchema from '@src/components/user/model/Address'

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', rquired: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: OrderStatus, default: OrderStatus.INIT, required: true },
    product: { type: Number },
    quantity: { type: Number },
    totalPrice: { type: Number, required: true },
    discount: { type: Object, default: null },
    finalPrice: { type: Number, rquired: true },
    orderItems: { type: [OrderItem], required: true },
    deliveryAddress: { type: [addressSchema], default: null },
})

export default model<IOrder>('Order', orderSchema)
