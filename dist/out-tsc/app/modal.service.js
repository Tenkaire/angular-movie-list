import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let ModalService = class ModalService {
    constructor() {
        this.display = new BehaviorSubject('close');
        this.displayModal = false;
    }
    watch() {
        return this.display.asObservable();
    }
    open() {
        this.display.next('open');
    }
    close() {
        this.display.next('close');
    }
};
ModalService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ModalService);
export { ModalService };
//# sourceMappingURL=modal.service.js.map