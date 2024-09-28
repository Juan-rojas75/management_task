import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface All {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AllService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  // Method get all
  getAll(): Observable<All[]> {
    return this.http.get<All[]>(this.apiUrl);
  }

  // Method get by ID
  getById(id: number): Observable<All> {
    return this.http.get<All>(`${this.apiUrl}/${id}`);
  }
}
