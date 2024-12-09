import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmNavComponent } from './sm-nav.component';

describe('SmNavComponent', () => {
    let component: SmNavComponent;
    let fixture: ComponentFixture<SmNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SmNavComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SmNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
