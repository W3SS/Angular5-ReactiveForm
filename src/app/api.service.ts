import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ApiService {
    constructor(private http: Http) { }

    getData() {
       return this.http.get('https://api.androidhive.info/contacts')
    }
}