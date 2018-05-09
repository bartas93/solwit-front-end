import { Injectable } from "@angular/core";
import { AppConstants } from "../app-constants";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserTo } from "../models/UserTo";


@Injectable()
export class UserRepository {

    private baseUrl: string = AppConstants.API_ENDPOINT + "users";

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<UserTo[]> {
        return this.http.get<UserTo[]>(this.baseUrl);
    }

    getUser(id: number): Observable<UserTo> {
        return this.http.get<UserTo>(this.baseUrl + "/" + id);
    }
    updateUser(userTo: UserTo): Observable<UserTo> {
        return this.http.put<UserTo>(this.baseUrl, userTo);
    }
    addUser(userTo: UserTo): Observable<UserTo> {
        return this.http.post<UserTo>(this.baseUrl, userTo);
    }
    removeUser(id: number): Observable<any> {
        return this.http.delete(this.baseUrl + "/" + id);
    }
}