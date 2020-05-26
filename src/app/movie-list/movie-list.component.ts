import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { Movie } from '../interfaces/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  data: any;
  showIndex: number = null;
  movieDesc: any = 'Show';
  descriptions: any = [];
  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.descriptions = this.service.getDescs();
    this.route.queryParams.subscribe(response => {
      if (response.rating || response.genre || response.certification) {
        this.service.getData(response.rating, response.genre, response.certification).subscribe((movieResponse) => {
          this.data = movieResponse.results;
        });
      } else {
        this.service.getPopMovies().subscribe(response => {
          this.data = response.results;
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
  addToDescs(desc: any) {
    this.service.addToDescs(desc);
    console.log(this.descriptions)
  }
  showMovieDesc(index: number): any {
    this.showIndex = index
    // if (this.show)
    //   this.movieDesc = "Hide";
    // else
    //   this.movieDesc = "Show";
  }
  hideMovieDesc(): any {
    this.showIndex = null;
    // if (this.show)
    //   this.movieDesc = "Hide";
    // else
    //   this.movieDesc = "Show";
  }
}