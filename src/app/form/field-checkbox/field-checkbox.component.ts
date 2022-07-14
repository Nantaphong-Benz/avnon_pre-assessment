import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html'
})
export class FieldCheckboxComponent implements OnInit {
  @Input() field: any = {};
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
