import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiUrl: string = "https://www.themoviedb.org/3/movie?";
  apiKey: string = "780adf32117a98ba4db8e7489d68fc1b";
  constructor(private http: HttpClient) { }

  getData(rating, genre, runtime): any {
    return this.http.get(this.apiUrl, {
      params: {
        api_key: this.apiKey,
        rating: rating,
        genre: genre,
        runtime: runtime

      }
    })
  }
}
