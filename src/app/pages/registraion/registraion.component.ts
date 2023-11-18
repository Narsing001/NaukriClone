import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/appServices/jobs.service';
import { jobSekerRegister, register } from './registartion';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.scss']
})
export class RegistraionComponent implements OnInit {
  empRegister:register=new register();
  jobSekerRegister:jobSekerRegister=new jobSekerRegister();
  isjobseker:boolean=true;
  constructor(private job:JobsService,private route:Router) { }

  ngOnInit(): void {
  }
  addnewEmployer(){
    this.job.employeradd(this.empRegister).subscribe((res)=>{
      if(res.result){
        alert(res.message);
        this.route.navigateByUrl('/login')
      }
      else{
        alert(res.message)
      }
    })
  }
  addnewJobSeker(){
    this.job.jobsekeradd(this.jobSekerRegister).subscribe((res)=>{
      if(res.result){
        alert(res.message);
        this.route.navigateByUrl('/login')
      }
      else{
        alert(res.message);
      }
    })
  }

}
