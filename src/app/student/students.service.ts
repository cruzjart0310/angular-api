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
}
