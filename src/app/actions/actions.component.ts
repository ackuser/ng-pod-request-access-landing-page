import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {

  emailFormControl = new FormControl('', {
    validators: [Validators.required, Validators.email],
    // updateOn: 'submit'
  });
  signUpFormGroup = new FormGroup({
    email: this.emailFormControl
  });

  submit(emailFormControl: FormControl) {
    console.log(emailFormControl);
  }

}
