import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/appServices/jobs.service';
import { jobList } from './joblistobj';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent implements OnInit {
 userInfo:any;
 joblist:jobList[]=[]
  constructor(private job:JobsService) {
    const userData=localStorage.getItem('jobLoginUser');
    if(userData!=null){
      this.userInfo=JSON.parse(userData);
      this.getAllJobById();
        }
   }

  ngOnInit(): void {
  
  }

  getAllJobById(){
    this.job.getjobsByEmpId(this.userInfo.employerId).subscribe((res:any)=>{
      this.joblist=res.data;
    })
  }

}
