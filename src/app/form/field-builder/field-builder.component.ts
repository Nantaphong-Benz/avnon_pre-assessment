import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-builder',
  templateUrl: './field-builder.component.html'
})
export class FieldBuilderComponent implements OnInit {
  @Input() field: any;
  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  constructor() { }

  ngOnInit(): void {
  }

}
