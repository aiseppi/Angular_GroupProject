import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { Movie } from '../interfaces/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() data: any;
  // movies: Movie[] = [];
  constructor(private service: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.movies = this.service.getData()
    this.getData();
  }
  getData() {
    this.route.queryParams.subscribe(response => {
      console.log(response);
      this.service.getData(response.rating, response.genre, response.certification).subscribe((movieResponse) => {
        this.data = movieResponse;
        console.log(movieResponse);
      });
    });
  }
}