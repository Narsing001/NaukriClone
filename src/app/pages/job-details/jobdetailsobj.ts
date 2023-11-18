export class jobdetI{
    jobName: string=''
  package: string=''
  experience: string=''
  location: string=''
  categoryName: string=''
  logoURL: string=''
  companyName: string=''
  jobId: number=0
  jobDescription: string=''
  employerId: number=0
  categoryId: number=0
  companyAddress: string=''
  emailId: string=''
}

export class sendjob{
  ApplicationId:number=0;
  JobId:number=0
  JobSeekerId: number=0
  AppliedDate:Date=new Date() 
  ApplcationStatus: string='New'
}