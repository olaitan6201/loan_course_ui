import { environment } from './../../environments/environment.dev';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  fetchDashboard(){
    let url = environment.BASE_URL+'dashboard';
    
    return this.http.get(url);
  }
}
