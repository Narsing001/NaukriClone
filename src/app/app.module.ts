import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { RegistraionComponent } from './pages/registraion/registraion.component';
import { HeaderComponent } from './includes/header/header.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FotterComponent } from './includes/fotter/fotter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateNewJobComponent,
    JobDetailsComponent,
    JobListingComponent,
    JobsComponent,
    LoginComponent,
    MyJobsComponent,
    RegistraionComponent,
    HeaderComponent,
    FotterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
