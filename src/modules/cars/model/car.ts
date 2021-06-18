import { v4 as uuidV4 } from 'uuid'

class Car{
    id: string;
    name:string;
    description: string;
    daily_rate: number;
    available: boolean;
    license_plate: string;
    brand_id: string;
    line_amount: number;
    brand: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}


export {Car}