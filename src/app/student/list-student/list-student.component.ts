import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { student } from '../Student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  responseCp;
  dataCp = {cp:''}
  
  @Input()
  students: any;

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.fnLoadRegister();
  }

  fnLoadRegister() {
    this.studentService.index()
    .subscribe(response=> {
      this.students = response;
    }, error => console.log(error));
  }

  fnDelete(id:number) {
    this.studentService.delete(id)
      .subscribe((response) =>{
        console.log(response);
        debugger
        this.fnLoadRegister();
      }, error => console.log(error));
  }

  fnConsultaCp() {
    this.studentService.consultarCp(this.dataCp.cp)
      .subscribe((response) =>{
        this.responseCp = response;
      }, error => console.log(error));
  }

  //Proyeccion de contenido
  //Es tener las funcionalidad en otro elemento y en el elemento original agregamos -- #refencia
}
