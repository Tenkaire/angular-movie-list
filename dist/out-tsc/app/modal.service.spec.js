import { TestBed } from '@angular/core/testing';
import { ModalService } from './modal.service';
describe('ModalService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ModalService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=modal.service.spec.js.map