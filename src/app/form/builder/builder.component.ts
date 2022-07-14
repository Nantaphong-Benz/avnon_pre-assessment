import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
})
export class BuilderComponent implements OnInit {
  @ViewChild('closeButton') closeButton: { nativeElement: { click: () => void; }; } | undefined;
  builderForm!: FormGroup;
  checkboxOption: any[] = [];
  fields: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.builderForm = new FormGroup({
      paragraphQuestion: new FormControl(),
      checkboxQuestion: new FormControl(),
      checkboxList: new FormArray([
        new FormGroup({
          checkboxValue: new FormControl(),
        })
      ])
    });
  }

  getFields() {
    return this.fields
  }

  getCheckboxList(form: any) {
    return form.controls.checkboxList.controls;
  }

  addAnotherAnswer() {
    const checkboxListFormArray = this.builderForm.get('checkboxList') as FormArray;
    checkboxListFormArray.push(
      this.formBuilder.group({
        checkboxValue: ''
      })
    )
  }

  submitQuestion() {
    const checkboxListArray = this.builderForm.controls['checkboxList'].value;
    const newCheckboxList = checkboxListArray.map((value: any, index: any) => {
      return {
        key: index,
        label: value.checkboxValue
      }
    });
    const question =
      [
        {
          type: 'text',
          name: 'paragraphQuestion',
          label: this.builderForm.controls['paragraphQuestion'].value,
          value: '',
          required: true,
          multiline: true
        },
        {
          type: 'checkbox',
          name: 'checkboxList',
          label: this.builderForm.controls['checkboxQuestion'].value,
          required: true,
          options: newCheckboxList
        }
      ]
    this.fields = question
    this.closeButton?.nativeElement.click();
  }

  reviewAnswer(event: any) {
    const checkboxOptions = this.fields.find((value: any) => value.name === 'checkboxList').options;
    const checkboxList = checkboxOptions.filter((value: any, index: any) => event.checkboxList[index] === true);
    const answer = [
      {
        key: this.fields.find((field: any) => field.name === 'paragraphQuestion').label,
        value: event.paragraphQuestion
      },
      {
        key: this.fields.find((field: any) => field.name === 'checkboxList').label,
        value: checkboxList
      }
    ]
    const navigationExtras: NavigationExtras = { state: { data: answer } };
    this.router.navigate(['form/answer'], navigationExtras);
  }
}
