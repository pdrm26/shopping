import IDiscount from '@src/components/discount/model/IDiscount'
import IUser from '@src/components/user/model/IUser'
import AbstractDiscountHandler from '../AbstractDiscountHandler'

export default class ExpireHandler extends AbstractDiscountHandler {
    process(discount: IDiscount, user?: IUser | undefined): IDiscount | null {
        const now = new Date()
        if (now > discount.expiresAt) {
            throw new Error('Discount code is expire')
        }

        return super.process(discount, user)
    }
}
