import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiurl = environment.apiUrl + 'Students';
  private key = '20210718-14b40f80aa32b5e4';
  private api = `https://apis.forcsec.com/api/codigos-postales/${this.key}`;
  
  constructor(private http:HttpClient) { }

  public index():Observable<any> {
    return this.http.get<student[]>(this.apiurl);
  }

  public create(student: student) {
    return this.http.post(this.apiurl, student);
  }

  public getById(id:number) {
    return this.http.get(`${this.apiurl}/${id}`);
  }

  public edit(id:number, student:student) {
    return this.http.put(`${this.apiurl}/${id}`, student);
  }

  public delete(id:number) {
    return this.http.delete(`${this.apiurl}/${id}`);
  }

  public consultarCp(id) {
    return this.http.get(`${this.api}/${id}`);
  }
  
  
  import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Employee } from '../shared/employee';
// import { Observable, throwError } from 'rxjs';
// import { retry, catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })

// export class RestApiService {

//   // Define API
//   apiURL = 'https://localhost:44349/api';

//   constructor(private http: HttpClient) { }

//   /*========================================
//     CRUD Methods for consuming RESTful API
//   =========================================*/

//   // Http Options
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   }

//   // HttpClient API get() method => Fetch employees list
//   getEmployees(): Observable<Employee> {
//     return this.http.get<Employee>(this.apiURL + '/Usuarios')
//     .pipe(
//       retry(1),
//       catchError(this.handleError)
//     )
//   }

//   // HttpClient API get() method => Fetch employee
//   getEmployee(id): Observable<Employee> {
//     return this.http.get<Employee>(this.apiURL + '/employees/' + id)
//     .pipe(
//       retry(1),
//       catchError(this.handleError)
//     )
//   }

//   // HttpClient API post() method => Create employee
//   createEmployee(employee): Observable<Employee> {
//     return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.handleError)
//     )
//   }

//   // HttpClient API put() method => Update employee
//   updateEmployee(id, employee): Observable<Employee> {
//     return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.handleError)
//     )
//   }

//   // HttpClient API delete() method => Delete employee
//   deleteEmployee(id){
//     return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
//     .pipe(
//       retry(1),
//       catchError(this.handleError)
//     )
//   }

//   // Error handling
//   handleError(error) {
//      let errorMessage = '';
//      if(error.error instanceof ErrorEvent) {
//        // Get client-side error
//        errorMessage = error.error.message;
//      } else {
//        // Get server-side error
//        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//      }
//      window.alert(errorMessage);
//      return throwError(errorMessage);
//   }

// }


import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// export interface Todo {
//   id?: any;
//   createdAt?: number;
//   value:string;
// }




// @Injectable({
//   providedIn: 'root'
// })
// export class ClientsService {

//   private todos = new BehaviorSubject<Todo[]>([]);
//   private baseUrl = 'https://56e05c3213da80110013eba3.mockapi.io/api';
//   private dataStore : { todos: Todo[]} = {todos:[]};
//   readonly _todos = this.todos.asObservable();


//   constructor(private http:HttpClient) { }

//   fnGetAll() {
//     this.http.get<Todo[]>(`${this.baseUrl}/todos`)
//       .subscribe(data => {
//         this.dataStore.todos = data;
//         this.todos.next(Object.assign({}, this.dataStore).todos);
//       }, error => console.log("Could not load todos"));
//   }

//   fnGetById(id:number|string) {
//     this.http.get<Todo>(`${this.baseUrl}/todos/${id}`)
//       .subscribe(data => {
//         let notFound = true;
//         this.dataStore.todos.forEach((item, index) => {
//           if (item.id === data.id) {
//             this.dataStore.todos[index] = data;
//             notFound = false;
//           }

//           if(notFound) {
//             this.dataStore.todos.push(data);
//           }

//           this.todos.next(Object.assign({}, this.dataStore).todos);
//         }, error => console.log("Could not load register"));
//       });
//   }

//   fnCreate(todo: Todo) {
//     this.http.post<Todo>(`${this.baseUrl}/todos`, JSON.stringify(todo)).subscribe(data => {
//       this.dataStore.todos.push(data);
//       this.todos.next(Object.assign({}, this.dataStore).todos);
//     }, error => console.log('Could not create todo.'));
//   }

//   fnUpdate(todo: Todo) {
//     this.http.put<Todo>(`${this.baseUrl}/todos/${todo.id}`, JSON.stringify(todo)).subscribe(data => {
//       this.dataStore.todos.forEach((t, i) => {
//         if (t.id === data.id) { this.dataStore.todos[i] = data; }
//       });

//       this.todos.next(Object.assign({}, this.dataStore).todos);
//     }, error => console.log('Could not update todo.'));
//   }

//   fnRemove(todoId: number) {
//     this.http.delete(`${this.baseUrl}/todos/${todoId}`).subscribe(response => {
//       this.dataStore.todos.forEach((t, i) => {
//         if (t.id === todoId) { this.dataStore.todos.splice(i, 1); }
//       });

//       this.todos.next(Object.assign({}, this.dataStore).todos);
//     }, error => console.log('Could not delete todo.'));
//   }
// }

  
}
