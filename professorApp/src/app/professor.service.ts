import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private baseUrl = 'http://localhost:3000/professor';  // URL da API no Node.js

  constructor(private http: HttpClient) { }

  // Buscar professor por ID
  getProfessorById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Atualizar professor
  updateProfessor(id: string, professor: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, professor);
  }
}