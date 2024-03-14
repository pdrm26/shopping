export interface IUser {
    first_name: string
    last_name: string
    mobile: string
    email: string
    total_orders: number
    wallet: number
    created_at: Date
}

// Define JSON schema for user collection
const userSchema = {
    $jsonSchema: {
        bsonType: 'object',
        required: ['first_name', 'last_name', 'mobile', 'email'],
        properties: {
            first_name: { bsonType: 'string', description: 'must be a string and is required' },
            last_name: { bsonType: 'string', description: 'must be a string and is required' },
            mobile: { bsonType: 'string' },
            email: { bsonType: 'string' },
            total_orders: { bsonType: 'number' },
            wallet: { bsonType: 'number' },
            created_at: { bsonType: 'date' },
        },
    },
}

export default userSchema
