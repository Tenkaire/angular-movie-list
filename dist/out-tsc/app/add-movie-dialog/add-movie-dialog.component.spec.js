import { TestBed } from '@angular/core/testing';
import { AddMovieDialogComponent } from './add-movie-dialog.component';
describe('AddMovieDialogComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddMovieDialogComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AddMovieDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-movie-dialog.component.spec.js.map