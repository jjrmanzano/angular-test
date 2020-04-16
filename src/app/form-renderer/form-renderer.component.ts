import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { FormInput } from '../interfaces/form-input';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnInit {

  formGroup: FormGroup;

  @Input()
  formInputs: FormInput[];

  @Output()
  formValue: EventEmitter<string> = new EventEmitter<string>();

  constructor(public fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildForm();

    this.formGroup.valueChanges.subscribe(newValue => {
      this.formValue.emit(newValue);
    })
  }

  buildForm() {
    this.formGroup = this.fb.group(
      this.adaptInputsToBuilder()
    );
  }

  adaptInputsToBuilder() {
    let adaptedInputs: Object = {};

    this.formInputs.forEach((element: FormInput) => {
      adaptedInputs[element.key] = [''];
    })

    return adaptedInputs;
  }
}
