import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    user = {
        name: 'Stephen'
    };

    isLoggedIn() {
        return Math.random() > .5;
    }
}