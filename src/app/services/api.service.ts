import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../_models/company';
import { Project } from '../_models/project';
import { TaskLog } from '../_models/taskLog';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrlCompany = 'http://localhost:8080/company/add';
  baseUrlProject = 'http://localhost:8080/project/add';
  baseUrlTask = 'http://localhost:8080/task/add';
  baseUrlTaskLog = 'http://localhost:8080/taskLog/taskbyuser';

  constructor(private http: HttpClient) {}
  getUser() {
    return this.http.get<any>('http://localhost:8080/us/finduser');
  }
  getProjectSize() {
    return this.http.get<any>('http://localhost:8080/project/projectsSize');
  }
  getcompanySize() {
    return this.http.get<any>('http://localhost:8080/company/companiesSize');
  }
  gettaskSize() {
    return this.http.get<any>('http://localhost:8080/task/tasksSize');
  }
  companiesList() {
    return this.http.get<any>('http://localhost:8080/company/companiesList');
  }
  taskLogList() {
    return this.http.get<any>('http://localhost:8080/taskLog/taskLogList');
  }
  companiesListsecond() {
    return this.http.get<Object>('http://localhost:8080/company/companiesList');
  }
  projectList() {
    return this.http.get<any>('http://localhost:8080/project/projectsList');
  }
  taskList() {
    return this.http.get<any>('http://localhost:8080/task/tasksList');
  }
  addCompany(company?: Company): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrlCompany}`, company);
  }
  addProject(project?: Project): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrlProject}`, project);
  }
  addTask(task?: Task): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrlCompany}`, task);
  }
  getTaskLog(username?: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrlTaskLog}`, username);
  }
}
