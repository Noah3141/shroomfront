import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgNavComponent } from './lg-nav.component';

describe('LgNavComponent', () => {
    let component: LgNavComponent;
    let fixture: ComponentFixture<LgNavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LgNavComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LgNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
