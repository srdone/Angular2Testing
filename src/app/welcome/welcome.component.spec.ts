import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { UserService } from '../services/user.service';

describe('Welcome Component', () => {
    let fixture: ComponentFixture<WelcomeComponent>;
    let comp: WelcomeComponent;
    let de: DebugElement;
    let el: HTMLElement; 
    let userService: any;

    beforeEach(() => {
        let userServiceMock = jasmine.createSpyObj('UserService', ['isLoggedIn']);
        userServiceMock.user = { name: 'Stephen'};

        TestBed.configureTestingModule({
            declarations: [ WelcomeComponent ],
            providers: [
                { provide: UserService, useValue: userServiceMock}
            ]
        })

        fixture = TestBed.createComponent(WelcomeComponent);
        comp = fixture.componentInstance;

        userService = <jasmine.Spy>TestBed.get(UserService);

        de = fixture.debugElement.query(By.css('.welcome')); 
        el = de.nativeElement; 
    });

    it('should call isLoggedIn', function () {
        userService.isLoggedIn.and.returnValue(true);
        comp.ngOnInit();
        
        expect(userService.isLoggedIn).toHaveBeenCalled();
    })
})