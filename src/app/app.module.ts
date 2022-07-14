import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './form/builder/builder.component';
import { AnswerComponent } from './form/answer/answer.component';
import { DynamicFormComponent } from './form/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldBuilderComponent } from './form/field-builder/field-builder.component';
import { FieldCheckboxComponent } from './form/field-checkbox/field-checkbox.component';
import { FieldTextboxComponent } from './form/field-textbox/field-textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    AnswerComponent,
    DynamicFormComponent,
    FieldBuilderComponent,
    FieldCheckboxComponent,
    FieldTextboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
