import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'usuarios'})
export class usuarios {
    @PrimaryGeneratedColumn()
    id : number
    @Column({unique:true})
    username :string
    @Column()
    nombre :string
    @Column()
    password :string
    @Column({type:'datetime',default: ()=> 'CURRENT_TIMESTAMP'  })
    createdAt : Date
    @Column()
    authStrategy :string
}