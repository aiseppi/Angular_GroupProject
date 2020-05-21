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

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
  }
  getData(form: NgForm) {
    console.log(form.value)
    this.service.getData(form.value.genre, form.value.runtime).subscribe((response) => {
      this.data = response;
      console.log(response);
    })
  }
}
