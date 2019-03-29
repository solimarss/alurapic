import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./Photo";

//providedIn: 'root' usar o mesmo objeto em qualquer parte so sistema
@Injectable({providedIn: 'root'})
export class PhotoService {


    constructor(private http: HttpClient){

    }

    listFromUser(userName: string){
        return this.http
        .get<Photo[]>('http://localhost:3000/flavio/photos');
    }
}