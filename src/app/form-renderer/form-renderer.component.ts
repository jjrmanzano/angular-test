import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface FormInput {
  key: string;
  type: string;
  label?: string;
}

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnInit {

  formGroup: FormGroup;

  formInputs: FormInput[] = [
    { "key": "firstName", "type": "text", "label": "First Name" },
    { "key": "lastName", "type": "text", "label": "Last Name" }
  ];

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    let formBuilderGroup: { [key: string]: any; } = {};

    this.formInputs.forEach((element: FormInput) => {
      formBuilderGroup[element.key] = [''];
    })

    this.formGroup = this.fb.group(formBuilderGroup);
  }

  formValue() {
    return JSON.stringify(this.formGroup.value)
  }
}
