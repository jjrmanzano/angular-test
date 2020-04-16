import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.formGroup = this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }

  formValue() {
    return JSON.stringify(this.formGroup.value)
  }
}
