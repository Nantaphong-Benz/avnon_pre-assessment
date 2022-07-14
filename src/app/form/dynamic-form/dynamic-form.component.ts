import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form!: FormGroup;
  constructor(
  ) { }

  ngOnInit() {
    let fieldControl = [];
    for (let f of this.fields) {
      if (f.type !== 'checkbox') {
        fieldControl[f.name] = new FormControl(f.value || '', Validators.required)
      } else {
        let options = [];
        for (let option of f.options) {
          options[option.key] = new FormControl(option.value);
        }
        fieldControl[f.name] = new FormGroup(options)
      }
    }
    this.form = new FormGroup(fieldControl);
  }
}
