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
  movies: any = [];
  showIndex: number = null;
  watchListMovies: any = [];
  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.watchListMovies = this.service.getWatchlist()
    this.route.queryParams.subscribe(response => {
      if (response.rating || response.genre || response.certification) {
        this.service.getData(response.rating, response.genre, response.certification).subscribe((movieResponse) => {
          this.movies = movieResponse.results;
          this.addIsClicked();
        });
      } else {
        this.service.getPopMovies().subscribe(response => {
          this.movies = response.results;
          this.addIsClicked();
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
    if (this.checkDuplicate(movie)) {
      let index = this.watchListMovies.findIndex((listItem) => {
        return listItem.id === movie.id
      })
      this.watchListMovies.splice(index, 1);
      movie.isClicked = false;
    } else {
      movie.isClicked = true;
      console.log(movie);
      this.service.addToWatchlist(movie)
    }
  }
  checkDuplicate(movie: any): boolean {
    return this.watchListMovies.some((watchListMovie) => {
      return watchListMovie.id === movie.id;
    })
  }
  addIsClicked() {
    this.movies.forEach(listItem => {
      if (this.checkDuplicate(listItem)) {
        listItem.isClicked = true;
      }
    });

  }

  showMovieDesc(index: number): any {
    this.showIndex = index

  }
  hideMovieDesc(): any {
    this.showIndex = null;

  }
}