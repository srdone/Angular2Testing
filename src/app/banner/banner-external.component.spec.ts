import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerComponent } from './banner-external.component';

describe('Banner component (external template)', () => {
    let fixture: ComponentFixture<BannerComponent>;
    let comp: BannerComponent;
    let de: DebugElement;
    let el: HTMLElement;

    //This is not really necessary since WebPack already inlines the templates
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BannerComponent);

        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });

})