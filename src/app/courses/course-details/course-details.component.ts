import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  currentCourse: Course;
  originalTitle = '';

  @Input() set course(value) {
    if (!value) {
      return;
    }
    this.currentCourse = {...value}
    this.originalTitle = this.currentCourse.title;
  }
  @Output() resetCourseForm:EventEmitter<void> = new EventEmitter<void>();
  @Output() savedCourseForm:EventEmitter<Course> = new EventEmitter<Course>();
}
