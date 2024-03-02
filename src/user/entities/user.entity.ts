import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  username: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  // @Column({ type: 'varchar', length: 40 })
  email: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
  /**
   * m - male
   * f - female
   * u - unspecified
   */
  gender: string;
}

/*
Example of json user :

{
    "name": "John Doe",
    "username": "john_doe",
    "email": "john@example.com",
    "age": 25,
    "password": "John@123",
    "gender": "m"
}
*/

// query to view all data : SELECT * FROM user;
// query to view specific data : SELECT * FROM user WHERE id = 1;
// query to delete all data : DELETE FROM user;
