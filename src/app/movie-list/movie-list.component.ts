import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  data: any;
  genreResponse: any;
  certResponse: any;
  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getGenres().subscribe((response) => {
      this.genreResponse = response;
      console.log(response);
    });
    this.service.getCerts().subscribe((response) => {
      this.certResponse = response;
      console.log(response);
    })
  }
  getData(form: NgForm) {
    console.log(form.value)
    this.service.getData(form.value.rating, form.value.genre, form.value.certification).subscribe((response) => {
      this.data = response;
      console.log(response);
    })
  }
}