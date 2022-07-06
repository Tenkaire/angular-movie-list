import { TestBed } from '@angular/core/testing';
import { MovieFormComponent } from './movie-form.component';
describe('MovieFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MovieFormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(MovieFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=movie-form.component.spec.js.map