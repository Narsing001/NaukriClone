import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogedIn:boolean=false;
  userInfo:any
  constructor() { }

  ngOnInit(): void {
    const userData=localStorage.getItem('jobLoginUser');
    if(userData==null){
      this.isLogedIn=false
    }
    else{
      this.isLogedIn=true;
      this.userInfo=JSON.parse(userData);
    }
  }

  Logout(){
    localStorage.removeItem('jobLoginUser');
    this.isLogedIn=false;
  
 }

 

}
