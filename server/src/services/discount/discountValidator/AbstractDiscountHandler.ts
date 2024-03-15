import IDiscount from '@src/components/discount/model/IDiscount'
import IUser from '@src/components/user/model/IUser'
import DiscountHandler from './DiscountHandler'

export default abstract class AbstractDiscountHandler implements DiscountHandler {
    nextHandler: DiscountHandler | null = null

    setNext(handler: DiscountHandler): DiscountHandler {
        this.nextHandler = handler
        return handler
    }

    process(discount: IDiscount, user?: IUser): IDiscount | null {
        if (this.nextHandler) {
            this.nextHandler.process(discount, user)
        }

        return null
    }
}
