import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Injectable()
export class KanyeService {
    constructor(
        private http: HttpClient
    ) { }

    getNewQuote() {
        return this.http
            .get<any>(`${environment.kanyeEndpoint}`);
    }

}
