import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiUrl: string = "https://api.themoviedb.org/3/discover/movie?";
  apiKey: string = "780adf32117a98ba4db8e7489d68fc1b";
  // runtime1: string = "with_runtime.lte";
  constructor(private http: HttpClient) { }

  getData(genre, runtime): any {
    let parameters: any = {
      api_key: this.apiKey
    };
    parameters.with_genres = genre;
    parameters["with_runtime.gte"] = Number(runtime);

    return this.http.get(this.apiUrl, {
      params: parameters
    })
  }
}
