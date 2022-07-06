import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddMovieDialogComponent } from './add-movie-dialog/add-movie-dialog.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            MoviesComponent,
            MovieDetailComponent,
            MessagesComponent,
            DashboardComponent,
            MovieSearchComponent,
            MovieFormComponent,
            HeaderComponent,
            FooterComponent,
            AddMovieDialogComponent,
            ImageUploadComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule,
            HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map