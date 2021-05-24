import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './components/first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { lessonFeatureKey, lessonsReducer } from './lessons.reducer';
//import { LessonEffects } from './lessons.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    AddLessonComponent
    //NgrxLessonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({}),
    //EffectsModule.forRoot([ LessonEffects ]),
    StoreModule.forFeature(lessonFeatureKey, lessonsReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
