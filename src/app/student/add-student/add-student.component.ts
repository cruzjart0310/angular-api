import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  //@Input() 
  userObj = {name: '', dateBirth:''}

  constructor(public service: StudentsService, public router: Router) { }

  ngOnInit(): void {
  }

  addUser(data: any){
    this.service.create(data)
      .subscribe((data: {}) =>{
        debugger
        this.router.navigate(['/list'])
      });
  }

}
