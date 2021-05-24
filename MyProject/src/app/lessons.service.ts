import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  private currentLessonId;
  private lessonsArray = [
    {id: 0,
      title: 'Гугл',
      description: 'Американская корпорация, в составе холдинга Alphabet, инвестирующая в интернет, облачные вычисления и рекламеные технологии!',
      time: '1 месяц'},
      {id: 1,
      title: 'Кока-Кола',
      description: 'Американская пищевая компания, разрабатывающщая, производящая и реализующая сиропы и концентраты для создания своих всемирно известных напитков.',
      time: '2 месяца'},
      {id: 2,
      title: 'Роскосмос',
      description: 'Российская корпорация, правляющая отраслью страны. Осуществляет функции по обеспечению реализации государственной оплитики и правовому регулированию.',
      time: '6 месяцев'}
  ]

  getLessonId() {
    return this.currentLessonId
  }

  setLessonId(lessonIdValue) {
    this.currentLessonId = lessonIdValue
  }

  constructor() { }

  getLessons() {
    return this.lessonsArray
  }

  getLessonsAsObs() {
    return of(this.getLessons())
  }

  pushLessons(pushValue) {
    this.lessonsArray.push(pushValue)
  }
}
