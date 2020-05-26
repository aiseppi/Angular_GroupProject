import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {
  @Input() data: any;
  movies: any = []
  constructor(private service: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies = this.service.getWatchlist();
    console.log(this.movies)
  }
  // getData() {
  //   this.route.queryParams.subscribe(response => {
  //     console.log(response);
  //     this.service.getData(response.rating, response.genre, response.certification).subscribe((movieResponse) => {
  //       this.data = movieResponse;
  //       console.log(movieResponse);
  //     });
  //   });
  // };
}
