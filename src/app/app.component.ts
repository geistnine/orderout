import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  data = {} as any;
  constructor(private http: HttpClient) {
    http.get('resource').subscribe(data => this.data = data);
  }
  getRestaurants(f: NgForm) {

    console.log(f.value.location)
    /*
    this.http
      .get('[url]')
      .subscribe((respones) => {
        alert(JSON.stringify(response));
      })
    */
  }
}
