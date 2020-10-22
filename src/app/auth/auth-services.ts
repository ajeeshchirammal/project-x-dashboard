import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, forkJoin, Subscription, throwError } from 'rxjs';

// import { config } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public idleScreenFlag: boolean = false;
    public subscription: Subscription;
    public toastTimer: any;
    baseUrl: any

    constructor(
        public http: HttpClient,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        // private idle: Idle
    ) {
        this.baseUrl = "https://cors-anywhere.herokuapp.com/https://google-map-server.herokuapp.com/"
    }

    /* api method for creating leads https://cors-anywhere.herokuapp.com/*/
    public getPlace(param) {
        return this.http.get(this.baseUrl + "autocomplete?input=" + param)
            .pipe(map(response => response));
    }
}
