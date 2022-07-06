import { TestBed } from '@angular/core/testing';
import { ImageUploadComponent } from './image-upload.component';
describe('ImageUploadComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ImageUploadComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ImageUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=image-upload.component.spec.js.map