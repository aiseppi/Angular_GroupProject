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
  genres: any;
  certifications: any;
  constructor(private router: Router, private service: MoviesService) { }


  ngOnInit(): void {
    this.service.getGenres().subscribe((response) => {
      this.genres = response.genres;
    });
    this.service.getCerts().subscribe((response) => {
      this.certifications = response.certifications.US;
    })
  }
  submitForm(form: NgForm) {
    this.submitted.emit(form);

  }
}