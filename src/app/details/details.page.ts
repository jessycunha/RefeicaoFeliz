import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0,
    initialSlide: 0,
    speed: 400
  }
  
  constructor() { }

  ngOnInit() {
  }

}
