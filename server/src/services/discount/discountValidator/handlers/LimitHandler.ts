import IDiscount from '@src/components/discount/model/IDiscount'
import IUser from '@src/components/user/model/IUser'
import AbstractDiscountHandler from '../AbstractDiscountHandler'

export default class LimitHandler extends AbstractDiscountHandler {
    process(discount: IDiscount, user?: IUser): IDiscount | null {
        if (discount.used >= discount.limit) {
            throw new Error('Discount code is excceded')
        }

        return super.process(discount, user)
    }
}
