import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/appServices/jobs.service';
import { jobdetI, sendjob } from './jobdetailsobj';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
   
  activeid:number=0;
  jobdetail:jobdetI=new jobdetI();
  sendjobobj:sendjob=new sendjob();
  userInfo:any;
  isLogedin:boolean=false;

  constructor(private activatedroute:ActivatedRoute,private job:JobsService) {
   
   }

  ngOnInit(): void {
     this.activatedroute.params.subscribe((res:any)=>{
            console.log(res.jobid)
            this.activeid=res.jobid;
            this.sendjobobj.JobId=this.activeid;
            this.getJobDetails()
       
    })

    const userData=localStorage.getItem('jobLoginUser');
    if(userData!=null){
      this.userInfo=JSON.parse(userData);
      if(this.userInfo?.userRole=='JobSeeker'){
        this.isLogedin=true
         this.sendjobobj.JobSeekerId=this.userInfo.jobSeekerId;
       }
        }
  }

  getJobDetails(){
    this.job.getActiveJobById(this.activeid).subscribe((res:any)=>{
       console.log(res)  
       this.jobdetail=res.data
      })
  }

  sendJob(){
     this.job.sendJobApplication(this.sendjobobj).subscribe((res:any)=>{
            if(res.result){
              alert(res.message);
            }
            else{
              alert(res.message);
            }
     })
  }

}
