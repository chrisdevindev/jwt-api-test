import { createConnection } from 'typeorm'

createConnection().then(() => console.log('🗃  Sucessfully connect with database'))