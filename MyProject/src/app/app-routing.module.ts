import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { AuthGuard } from './auth.guard';
import { FirstCompComponent } from './components/first-comp/first-comp.component';
//import { NgrxLessonsComponent } from './ngrx-lessons/ngrx-lessons.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

const routes: Routes = [
  {
    path : '',
    component : FirstCompComponent
  },
  {
    path : 'content',
    component : SecondCompComponent,
  },
  {
    path : 'add_lesson',
    component : AddLessonComponent,
  },
  {
    path : 'ngrx',
    //component : NgrxLessonsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
