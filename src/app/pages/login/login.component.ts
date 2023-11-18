import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from 'src/app/appServices/jobs.service';
import { loginobj } from './loginobj';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginobj:loginobj=new loginobj();
  constructor(private job:JobsService,private router:Router) { }

  ngOnInit(): void {
  }

  getLogin(){
    debugger;
    this.job.login(this.loginobj).subscribe((res)=>{
     
      if(res.result==true){
          localStorage.setItem('jobLoginUser',JSON.stringify(res.data))
          alert(res.message);
          this.router.navigateByUrl('home')
         }
        else{
          alert(res.message);
        }
    })
  }

}
