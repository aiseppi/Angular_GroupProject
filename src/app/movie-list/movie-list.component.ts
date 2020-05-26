import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any;
  showIndex: number = null;
  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      if (response.rating || response.genre || response.certification) {
        this.service.getData(response.rating, response.genre, response.certification).subscribe((movieResponse) => {
          this.movies = movieResponse.results;
        });
      } else {
        this.service.getPopMovies().subscribe(response => {
          this.movies = response.results;
        })
      }
    });
  }
  onSubmit(form: NgForm) {
    this.router.navigate(["movielist"], {
      queryParams: {
        rating: form.value.rating,
        genre: form.value.genre,
        certification: form.value.certification
      }
    })

  }
  addToWatchlist(movie: any) {
    this.service.addToWatchlist(movie)
  }

  showMovieDesc(index: number): any {
    this.showIndex = index

  }
  hideMovieDesc(): any {
    this.showIndex = null;

  }
}