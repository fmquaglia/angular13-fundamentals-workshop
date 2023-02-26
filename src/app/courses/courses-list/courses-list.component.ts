import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../../common/models/course";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Output() selected: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() deleted: EventEmitter<String> = new EventEmitter<String>();
}
