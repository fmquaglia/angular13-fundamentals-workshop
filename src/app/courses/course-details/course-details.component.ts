import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  @Input() selectedCourse: Course;
  @Input() originalTitle: string;
  @Output() resetCourseForm:EventEmitter<void> = new EventEmitter<void>();
  @Output() savedCourseForm:EventEmitter<Course> = new EventEmitter<Course>();
}
