import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRendererComponent } from './form-renderer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormRendererComponent', () => {
  let component: FormRendererComponent;
  let fixture: ComponentFixture<FormRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRendererComponent ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRendererComponent);
    component = fixture.componentInstance;
    component.formInputs = [
      { "key": "firstName", "type": "text", "label": "First Name" }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit form changes', () => {
    let firstName = 'My first name';

    component.formGroup.valueChanges.subscribe(newValue => {
      expect(newValue.firstName).toBe(firstName);
    });

    component.formGroup.setValue({'firstName': firstName});

    firstName = 'My second name';
    component.formGroup.setValue({'firstName': firstName});
  });

  describe('buildForm', () => {
    it('should render an input', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('input[ng-reflect-name="firstName"]')).toBeTruthy();
    });

    it('should render an input based on JSON', () => {
      component.formInputs = [
        { "key": "lastName", "type": "text", "label": "Last Name" }
      ];
      component.buildForm();
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('input[ng-reflect-name="lastName"]')).toBeTruthy();
    });
  });

});
