import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
})
export class FormErrorsComponent {
  @Input() control!: FormControl;
}
