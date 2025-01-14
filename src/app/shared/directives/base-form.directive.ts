import { Directive } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({})
export abstract class BaseForm {
  isValid(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }
}
