import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { GlobalVariable } from '../../global';

@Injectable()
export class UserProvider {
    profile: any;
    constructor(public http: HttpClient) { }


    getProfile(email: string): Observable<{}> {
        if (this.profile) {
            return this.profile;
        }

        return this.http.get(GlobalVariable.BASE_API_URL + '/profile?email=' + email).pipe(
            map(data => { this.profile = data }),
            catchError(this.handleError)
        );
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
