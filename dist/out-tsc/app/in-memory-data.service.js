import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let InMemoryDataService = class InMemoryDataService {
    createDb() {
        const movies = [
            { id: 12, name: 'Dr. Nice' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr. IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { movies };
    }
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(movies) {
        return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
    }
};
InMemoryDataService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], InMemoryDataService);
export { InMemoryDataService };
//# sourceMappingURL=in-memory-data.service.js.map