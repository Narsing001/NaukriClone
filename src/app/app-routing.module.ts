import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LoginComponent } from './pages/login/login.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { RegistraionComponent } from './pages/registraion/registraion.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegistraionComponent
  },
  {
    path:'jobdetails/:jobid',
    component:JobDetailsComponent
  },
  {
    path:'joblisting',
    component:JobListingComponent
  },
  {
    path:'jobs',
    component:JobsComponent
  },
  {
    path:'myjobs',
    component:MyJobsComponent
  },
  {
    path:'createnewjob',
    component:CreateNewJobComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
