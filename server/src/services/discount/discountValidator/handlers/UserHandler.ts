import IDiscount from '@src/components/discount/model/IDiscount'
import IUser from '@src/components/user/model/IUser'
import AbstractDiscountHandler from '../AbstractDiscountHandler'

export default class UserHandler extends AbstractDiscountHandler {
    process(discount: IDiscount, user?: IUser): IDiscount | null {
        if (discount.constraints && 'users' in discount.constraints) {
            const { users } = discount.constraints
            if (user && users && users.length > 0 && !users.includes(user.id)) {
                throw new Error('This discount code is not for you')
            }
        }

        return super.process(discount, user)
    }
}
