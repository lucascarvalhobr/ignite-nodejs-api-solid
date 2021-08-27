import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid'

@Entity("cars")
class Car{
    @PrimaryColumn()
    id: string;
    
    @Column()
    name:string;

    @Column()
    description: string;
    
    @Column()
    daily_rate: number;
    
    @Column()
    available = true;
    
    @Column()
    license_plate: string;
    
    @Column()
    brand_id: string;

    @Column()
    line_amount: number;

    @Column()
    brand: string;

    category_id: string;

    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}


export {Car}