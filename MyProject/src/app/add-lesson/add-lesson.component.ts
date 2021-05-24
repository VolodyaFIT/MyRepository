import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LessonsService } from '../lessons.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {

  public lessons: any[]
  addLessonForm: FormGroup
  lessonsId: any
  
  pushLesson() {
    var valueToPush = { };
    valueToPush["id"] = this.lessons.length;
    valueToPush["title"] = this.addLessonForm.value.lessonTitle;
    valueToPush["description"] = this.addLessonForm.value.lessonDescription;
    valueToPush["time"] = this.addLessonForm.value.lessonTime;
    this.lessonsService.pushLessons(valueToPush);
  }

  onSubmit() {
    this.pushLesson()
    console.warn(this.lessons[this.lessonsId].title);
  }

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.lessons = this.lessonsService.getLessons();
    this.addLessonForm = new FormGroup({
      lessonTitle: new FormControl(''),
      lessonDescription: new FormControl(''),
      lessonTime: new FormControl(''),
    })
    this.lessonsId = this.lessons.length
  }

}
