import IDiscount from '@src/components/discount/model/IDiscount'
import IUser from '@src/components/user/model/IUser'

export default interface DiscountHandler {
    setNext(handler: DiscountHandler): DiscountHandler
    process(discount: IDiscount, user?: IUser): IDiscount | null
}
