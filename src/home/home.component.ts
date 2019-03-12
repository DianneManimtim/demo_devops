import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  // submitted = false;
  success = false;
  failed = false;


  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      uname: ['', Validators.required],
      pass: ['', Validators.required]
    })
   }

   onSubmit() {
    //  this.submitted = true;

     if (this.loginForm.invalid) {
      this.success = false; 
       this.failed = true;
       return;
     }
         
     this.success = true; 
     this.failed = false;

   }

  ngOnInit() {
  }

}
