import { Document } from 'mongoose'
import DiscountStatus from './DiscountStatus'

export default interface IDiscount extends Document {
    code: string
    percent: number
    limit: number
    used: number
    expiresAt: Date
    constraints: object
    status: DiscountStatus.ACTIVE
}
