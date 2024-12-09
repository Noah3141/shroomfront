import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPage } from './sign-up-page.component';

describe('SignUpComponent', () => {
    let component: SignUpPage;
    let fixture: ComponentFixture<SignUpPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SignUpPage],
        }).compileComponents();

        fixture = TestBed.createComponent(SignUpPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});