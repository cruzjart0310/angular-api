import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'profileapp';

  studentsHighSchool;
  studentsDegreSchool;

  ngOnInit(): void {
    this.studentsHighSchool = [
      {
        name: 'Juan',
        lastName: 'Prado'
      },
      {
        name: 'Pedro',
        lastName: 'Ruiz'
      }
    ];


    this.studentsDegreSchool =  [
      {
        name: 'Luis',
        lastName: 'Cruz'
      },
      {
        name: 'Carlos',
        lastName: 'Vallarta'
      }
    ];
  }
}
