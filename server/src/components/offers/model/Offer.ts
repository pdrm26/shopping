import { model, Schema } from 'mongoose'
import productOfferSchema from './ProductOffer'
import IOffer from './IOffer'

const OfferSchema: Schema = new Schema({
    products: { type: [productOfferSchema], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
})

export default model<IOffer>('Offer', OfferSchema)
