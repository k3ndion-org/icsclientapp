import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {
    private loginApiUrl = 'https://icsapi.herokuapp.com/api/login';
    private accessToken: any;
    constructor(public http: HttpClient, private storage: Storage) { }

    login(email: string, password: string): Observable<{}> {
        return this.http.post(this.loginApiUrl,{ email: email, password: password }).pipe(
            map((data: any) => { this.storage.set('access-token', data.accessToken); }),
            catchError(this.handleError)
          );
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const err = error || '';
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
