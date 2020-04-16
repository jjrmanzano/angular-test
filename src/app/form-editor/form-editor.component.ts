import { Component, OnInit } from '@angular/core';
import { FormInput } from '../interfaces/form-input';
import FIRST_FORM from '../config/first-form';


@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent implements OnInit {

  // A service here is needed to retrieve the configuration form.
  formInputs: FormInput[] = FIRST_FORM;

  formValue: any;

  ngOnInit(): void {
  }

  formUpdated(formValue): void {
    this.formValue = formValue
  }
}
