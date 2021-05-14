import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  drinkName = 'vodka'
  drinks = []
  timer
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.fetchDrinksFromServer(this.drinkName)
  }

  updateDrinks() {
    clearTimeout(this.timer)
    let value = this.drinkName
    this.timer = setTimeout(() => {
      this.fetchDrinksFromServer(value)
    }, 500)
  }

  fetchDrinksFromServer(value) {
    this.drinks = []
    if (!value) return
    this.homeService.getDrinks(value).then(res => {
      if (res['drinks']) {
        this.drinks = <[]>res['drinks']
      }
    })
  }

}
