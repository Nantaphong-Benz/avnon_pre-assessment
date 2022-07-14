import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-textbox',
  templateUrl: './field-textbox.component.html'
})
export class FieldTextboxComponent implements OnInit {
  @Input() field: any = {};
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
