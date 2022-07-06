import { TestBed } from '@angular/core/testing';
import { InMemoryDataService } from './in-memory-data.service';
describe('InMemoryDataService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(InMemoryDataService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=in-memory-data.service.spec.js.map