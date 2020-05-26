import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {
  movies: any = []
  constructor(private service: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies = this.service.getWatchlist();
    console.log(this.movies)
  }
  removeFromWatchlist(i: any): void {
    this.movies.splice(i, 1);
    this.service.getWatchlist();
  }
}
