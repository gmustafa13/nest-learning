import { Injectable } from "@nestjs/common";
import { User } from './user.model';

@Injectable()
export class UserService {
    private users: User[] = [];
    insertUser(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        gender: string
    ) {
        const userCreated = new User(firstName, lastName, email, age, gender);
        this.users.push(userCreated)
        return userCreated;

    }
    getAllUsers(){
        return [...this.users];
    }
}