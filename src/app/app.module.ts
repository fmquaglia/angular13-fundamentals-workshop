import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material.module';
import {NgModule} from '@angular/core';

import {CoursesComponent} from './courses/courses.component';
import {
  CourseDetailsComponent
} from './courses/course-details/course-details.component';
import {
  CoursesListComponent
} from './courses/courses-list/courses-list.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CoursesListComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
