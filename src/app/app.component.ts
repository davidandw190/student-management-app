import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'student-management-app';

  students!: Student[];
  
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents()
  };
  
}


