import { Document } from 'mongoose'

interface IProductAttribute extends Document {
    title: string
    name: string
    filterable: boolean
    isMultiple: boolean
}

export default IProductAttribute
