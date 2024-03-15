/* eslint-disable no-unused-vars */
import { model, Schema } from 'mongoose'
import DiscountStatus from './DiscountStatus'
import IDiscount from './IDiscount'

const DiscountSchema = new Schema({
    code: { type: String, required: true },
    percent: { type: Number, required: true },
    limit: { type: Number, default: 0 },
    used: { type: Number, default: 0 },
    expiresAt: { type: Date, default: null },
    constraints: { type: Object, default: null },
    status: { type: DiscountStatus, default: DiscountStatus.ACTIVE },
})

export default model<IDiscount>('Discount', DiscountSchema)
