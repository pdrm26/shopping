import { Document } from 'mongoose'
import DiscountStatus from './DiscountStatus'

export default interface IDiscount extends Document {
    code: string
    percent: number
    limit: number
    used: number
    expiresAt: Date
    constraints: {
        users: string[]
        products: string[]
    }
    status: DiscountStatus.ACTIVE
}
