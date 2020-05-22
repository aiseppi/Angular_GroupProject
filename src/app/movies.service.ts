import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = "https://api.themoviedb.org/3";
  apiKey: string = "780adf32117a98ba4db8e7489d68fc1b";
  country: string = "US";
  discoverEndpoint: string = `${this.baseUrl}/discover/movie`;
  genreEndpoint: string = `${this.baseUrl}/genre/movie/list`;;
  certificationEndpoint: string = `${this.baseUrl}/certification/movie/list`;
  movie: Movie[] =
    [
      {
        posterPath: "/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
        title: "Fight Club",
        voteAverage: 10,
      }
    ]
  // runtime1: string = "with_runtime.lte";
  constructor(private http: HttpClient) { }

  getGenres() {
    return this.http.get(this.genreEndpoint, {
      params: { api_key: this.apiKey }
    })
  }

  getCerts() {
    return this.http.get(this.certificationEndpoint, {
      params: { api_key: this.apiKey }
    })
  }

  getData(rating, genre, certification): any {
    let parameters: any = {
      api_key: this.apiKey,
      certification_country: this.country,
    };
    parameters["vote_average.gte"] = rating;
    parameters.with_genres = genre;
    parameters.certification = certification;


    return this.http.get(this.discoverEndpoint, {
      params: parameters
    })
  }
  // setData(movies: Movie[]): void {
  //   
  // }

  //   getMovies(poster, title, genre, certification, rating): any {
  //     let parameters: any = {
  //       api_key: this.apiKey,
  //     };
  // parameters.poster_path = poster
  //   }
}

