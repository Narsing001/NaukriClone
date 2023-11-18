import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/appServices/jobs.service';
import { addnewjob } from './create-new-jobobj';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.scss']
})
export class CreateNewJobComponent implements OnInit {
  addnewjobobj:addnewjob=new addnewjob();
  jobCategory:any[]=[];
  userInfo:any;

  constructor(private job:JobsService,private router:Router) { }

  ngOnInit(): void {
   
    this.job.getCategories().subscribe((res:any)=>{
          this.jobCategory=res.data;
         
    })

    //code for getting EmployerId which is loged in 
    const userData=localStorage.getItem('jobLoginUser');
    if(userData!=null){
      this.userInfo=JSON.parse(userData);
      if(this.userInfo?.userRole=='Employer'){
        this.addnewjobobj.EmployerId=this.userInfo.userId;
       
      }
        }
  }

  createnewjob(){
      this.job.createJobs(this.addnewjobobj).subscribe((res:any)=>{
         if(res.result){
          alert(res.message);
          this.router.navigateByUrl('/home')
         }
         else{
          alert(res.message)
         }
      })
  }

}
