import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addnewjob } from '../pages/create-new-job/create-new-jobobj';
import { sendjob } from '../pages/job-details/jobdetailsobj';
import { loginobj } from '../pages/login/loginobj';
import { jobSekerRegister, register } from '../pages/registraion/registartion';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
 intialurl="https://freeapi.miniprojectideas.com/api/JobPortal/"
  constructor(private http:HttpClient) { }
 //Register for the company
  employeradd(obj:register):Observable<any>{
     return this.http.post(`${this.intialurl}AddNewEmployer`, obj);   
  }
 //Register For the jobseker
  jobsekeradd(obj:jobSekerRegister):Observable<any>{
       return this.http.post(`${this.intialurl}AddNewJobSeeker`,obj)
  }
   //Login
  login(obj:loginobj):Observable<any>{
          return this.http.post(`${this.intialurl}Login`,obj)
  }
  //geting Categories
  getCategories():Observable<any>{
    return this.http.get(`${this.intialurl}GetAllJobCategory`)
  }
  //Creating new jobs
  createJobs(obj:addnewjob):Observable<any>{
      return this.http.post(`${this.intialurl}CreateNewJobListing`,obj)
  }
    //Getting Active Jobs
  Activejobs():Observable<any>{
     return this.http.get(`${this.intialurl}GetActiveJobListing`);
  } 
    //Getting Active job by id to show job details

   getActiveJobById(id:number):Observable<any>{
         return this.http.get(`${this.intialurl}GetJobListingById?jobId=${id}`)
   } 

   sendJobApplication(obj:sendjob):Observable<any>{
     return this.http.post(`${this.intialurl}SendJobApplication`,obj)    
   }
   
    getjobsByEmpId(id:number):Observable<any>{
       return this.http.get(`${this.intialurl}GetJobsByEmployerId?employerId=${id}`)
    }
}

