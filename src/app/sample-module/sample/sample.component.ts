import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleServiceService } from '../services/sample-service.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private sampleservice: SampleServiceService, private router: Router) { }

  checkboxes: any[] = [
    { name: 'partner1', value: 'option 1', checked: false },
    { name: 'partner2', value: 'cb2', checked: false },
    { name: 'partner3', value: 'cb3', checked: false },
    { name: 'partner4', value: 'cb4', checked: false },
    { name: 'partner5', value: 'cb5', checked: false },
  ]

  checkallpartners()
  {
    if(this.checkboxes.every(val => val.checked==true))
    {
    this.checkboxes.forEach(val => { val.checked = false });
    }
    else{
      this.checkboxes.forEach(val=>{val.checked= true})
    }
  }

  ngOnInit(): void {
  
  }

  

}
