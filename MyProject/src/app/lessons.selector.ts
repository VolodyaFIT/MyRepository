import { getLessonState, LessonState } from "./lessons.reducer";
import { createSelector } from "@ngrx/store";

export const selectLessons = createSelector(
    getLessonState,
    (state: LessonState) => state.lessons
);

export const areLessonsLoaded = createSelector(
    getLessonState,
    (state: LessonState) => state.loaded
)
