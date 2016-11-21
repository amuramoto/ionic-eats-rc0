import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Geolocation} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  restaurants: Array<Object>;
  searchTerm: string = 'Restaurants';

  constructor(public navCtrl: NavController, public http: Http, 
              public platform: Platform) {
    this.getRestaurants();
  }


  getRestaurants(): void {
    this.platform.ready().then(
      () => Geolocation.getCurrentPosition().then(
        location => this.request(location)

      )

    )
  }


  request(location?: Object): void {
    let url = 'http://ionic-workshop-api.herokuapp.com/search';
    // let query = '?lat=43.074244&long=-89.381023';
    let query = `?lat=${location['coords']['latitude']}&long=${location['coords']['longitude']}`;
    
    if (this.searchTerm) {
      query += `&q=${this.searchTerm}`;
    }

    this.http.get(url + query)
      .map(res => res.json())
      .subscribe(res => this.restaurants = res['results']);
  }


  getArray(size): Array<any> {
    return new Array(size);
  }

}
