import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() data: any;
  // movies: Movie[] = [];
  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    // this.movies = this.service.getData()
  }
  // getData(form: NgForm) {
  //   console.log(form.value)
  //   this.service.getData(form.value.rating, form.value.genre, form.value.certification).subscribe((response) => {
  //     this.data = response;
  //     console.log(response);
  //   })
  // }
}