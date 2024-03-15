import IDiscount from '@src/components/discount/model/IDiscount'
import IUser from '@src/components/user/model/IUser'
import UserHandler from './handlers/UserHandler'
import LimitHandler from './handlers/LimitHandler'
import ExpireHandler from './handlers/ExpireHandler'

export default class DiscountValidator {
    handle(discount: IDiscount, user?: IUser) {
        const userHandler = new UserHandler()
        const limitHandler = new LimitHandler()
        const expireHandler = new ExpireHandler()

        userHandler.setNext(limitHandler).setNext(expireHandler)

        return userHandler.process(discount, user)
    }
}
