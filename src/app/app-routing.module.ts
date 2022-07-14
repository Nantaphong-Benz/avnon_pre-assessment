import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './form/answer/answer.component';
import { BuilderComponent } from './form/builder/builder.component';

const routes: Routes = [
  {
    path: 'form', children: [
      {
        path: 'builder',
        component: BuilderComponent
      }, {
        path: 'answer',
        component: AnswerComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
