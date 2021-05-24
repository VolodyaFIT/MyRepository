import { createAction, props } from '@ngrx/store';

export const loadLessons = createAction('[NgrxLessons Component] Load Lessons');
export const loadLessonsSuccess = createAction('[NgrxLessons Component] Lessons loaded successfully', props<{lessons:{id:number}[]}>());
