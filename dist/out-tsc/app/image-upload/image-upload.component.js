import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ImageUploadComponent = class ImageUploadComponent {
    //file: File = undefined; // Variable to store file
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
        // Variable to store shortLink from api response
        this.shortLink = "";
        this.loading = false; // Flag variable
    }
    ngOnInit() {
    }
};
ImageUploadComponent = __decorate([
    Component({
        selector: 'app-image-upload',
        templateUrl: './image-upload.component.html',
        styleUrls: ['./image-upload.component.css']
    })
], ImageUploadComponent);
export { ImageUploadComponent };
//# sourceMappingURL=image-upload.component.js.map