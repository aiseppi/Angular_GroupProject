import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiUrl: string = "https://api.themoviedb.org/3/movie/550";
  apiKey: string = "780adf32117a98ba4db8e7489d68fc1b";
  constructor(private http: HttpClient) { }

  getData(): any {
    return this.http.get(this.apiUrl, {
      params: {
        api_key: this.apiKey
      }
    })
  }
}
