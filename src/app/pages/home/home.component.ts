import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // jobs data array
   slidesstores:any[]=[
    {
      companyImg:'https://img.naukri.com/logo_images/v3/110580.gif',
      jobRollName:'Full Stack Php Developer',
      companyName:'Inspira Software Solution',
      cityName:'Bhubneswhar',
      Exp:'0-5 yrs'

    },
    {
      companyImg:'https://img.naukimg.com/logo_images/groups/v1/363040.gif',
      jobRollName:'Asp.net developer, ASP.NET MVC Developer',
      companyName:'Aks WebSoft Consultancy',
      cityName:'Noida',
      Exp:'0-3 yrs'

    },
    {
      companyImg:'https://img.naukimg.com/logo_images/groups/v1/6188117.gif',
      jobRollName:'Rpa Developer',
      companyName:'Assistian',
      cityName:'Remote',
      Exp:'0-2 yrs'

    },
    {
      companyImg:'https://img.naukri.com/logo_images/v3/110580.gif',
      jobRollName:'Full Stack Php Developer',
      companyName:'Inspira Software Solution',
      cityName:'Bhubneswhar',
      Exp:'0-1 yrs'
    },
    {
      companyImg:'https://img.naukri.com/logo_images/v3/110580.gif',
      jobRollName:'Full Stack Php Developer',
      companyName:'Inspira Software Solution',
      cityName:'Bhubneswhar',
      Exp:'0-0 yrs'

    }
   ]
  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['next', 'prev'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav:false
  }
}

