import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();
  data: any;
  genreResponse: any;
  certResponse: any;
  constructor(private router: Router, private service: MoviesService) { }


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
    this.submitted.emit(form);
    this.router.navigate(["movielist"], {
      queryParams: { rating: form.value.rating, genre: form.value.genre, certification: form.value.certification }
    });
    console.log(form.value)

  }
}