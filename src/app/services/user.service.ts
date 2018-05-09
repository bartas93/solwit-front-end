import { Injectable } from "@angular/core";
import { UserRepository } from "../repositories/user.repository";
import { UserTo } from "../models/UserTo";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) { }

    getAllUsers(): Observable<UserTo[]> {
        return this.userRepository.getAllUsers();
    }

    getUser(id: number): Observable<UserTo> {
        return this.userRepository.getUser(id);
    }
    updateUser(userTo: UserTo): Observable<UserTo> {
        return this.userRepository.updateUser(userTo);
    }
    addUser(userTo: UserTo): Observable<UserTo> {
        return this.userRepository.addUser(userTo);
    }
    removeUser(id: number): Observable<any> {
        return this.userRepository.removeUser(id);
    }
}