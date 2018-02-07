import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.less']
})
export class DropdownMenuComponent implements OnInit {

  movies: String[];

  movieChosen = '';

  subscriptionMovies: Subscription;

  constructor(@Inject('movieService') private movieService) { }

  ngOnInit() {
    this.getMovieList();
  }


 toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const selectDropdown = document.querySelector('.select-dropdown');
    const caret = document.querySelector('.caret');
    dropdownMenu.classList.toggle('dropdown-menu-open');
    selectDropdown.classList.toggle('input-active');
    caret.classList.toggle('caret-toggle');
 }

 chooseMovie(movie) {
    this.movieChosen = movie;
    this.toggleDropdown();
 }


//To clear movie 
 clearMovie(): void {
    this.movieChosen = '';
 }

 getMovieList(): void {
    this.subscriptionMovies = this.movieService.getMovies()
      .subscribe((movies) => { this.movies = movies; });
 }


}
