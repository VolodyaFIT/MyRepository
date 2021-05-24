import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { loadLessons, loadLessonsSuccess } from './lessons.actions';

export const lessonFeatureKey = 'lessons';
export interface LessonState {
    lessons: {id: number}[],
    loaded: boolean
}

export const initialState: LessonState = {
    lessons: [{id: 1}],
    loaded: false
};
 
const _lessonsReducer = createReducer(
    initialState,
    on(loadLessons, (state) => {
        return {...state, loaded: false}
        }),
    on(loadLessonsSuccess, (state, action) => {
        return {...state, lessons: action.lessons, loaded: true}
        }),
);
 
export function lessonsReducer(state, action) {
  return _lessonsReducer(state, action);
}

export const getLessonState = createFeatureSelector(lessonFeatureKey);
