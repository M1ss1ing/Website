import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['']
    })
  }
  
  get contactFormControl(){
    return this.contactForm.controls;
  }

  OnSubmit(){
    alert("Form submitted successfully!")
    console.table(this.contactForm.value);
  }

}
