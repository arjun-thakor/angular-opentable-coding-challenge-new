import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import * as $ from 'node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurants_by_city: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    $(document).ready(() => {
      $('#searchByCity').focus();    
    });
   }

  gotData(){
    let city = $('#searchByCity').val();
    let message = document.getElementById('user_message');
    if(city == ''){
      message.innerHTML += 
      `
        <div class="alert alert-danger mt-5 text-center" role="alert">
           <h4>Please enter the city name.</h4>
        </div>
      `
    }
    else{
      message.style.display = 'none';
      this.data.getRestaurants(city).subscribe(data => {
        this.restaurants_by_city = data
        console.log(this.restaurants_by_city);
      });
    }
  }
}
