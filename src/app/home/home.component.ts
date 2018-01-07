import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactList = [];
  myForm: FormGroup;
  constructor(private apiService: ApiService, private fb: FormBuilder) {
    // Calling Api Service
    this.myForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['',Validators.required],
      'street': ['',Validators.required],
      'country': ['',Validators.required],
      'city': ['',Validators.required],
      'state': ['',Validators.required],
      'phone': ['',Validators.required],
      'job': ['',Validators.required],
      'organization': ['',Validators.required],
      'startDate': ['',Validators.required],
      'endDate': ['',Validators.required],
    })
    this.apiService.getData()
      .subscribe((data) => {
        // console.log(data.json());
        this.contactList = data.json();
        this.contactList = this.contactList['contacts']
        console.log(this.contactList)
      })
  }
  onSubmit(value){
    console.log('value',value)
  }
  ngOnInit() {
  }

}