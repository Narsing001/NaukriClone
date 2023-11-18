import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/appServices/jobs.service';
import { jobsinterface } from './jobsobj';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
   
  jobsArray:jobsinterface[]=[]
  constructor(private job:JobsService,private router:Router) { }

  ngOnInit(): void {
    this.getJobs()
  }

getJobs(){
  this.job.Activejobs().subscribe((res:any)=>{
    this.jobsArray=res.data;
  })
}

openjob(id:number){
   this.router.navigate(['/jobdetails',id])
}

}
