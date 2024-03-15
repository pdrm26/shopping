import IProductOffer from './IProductOffer'

export default interface IOffer extends Document {
    products: IProductOffer[]
    startDate: Date
    endDate: Date
    createdAt: Date
}
