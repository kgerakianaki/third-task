import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { register } from "swiper/element/bundle";
import Swiper from 'swiper';

register();
@Component({
  selector: "app-swiper",
  templateUrl: "./swiper.component.html",
  styleUrls: ["./swiper.component.scss"],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [TranslateModule,CommonModule]
})
export class SwiperComponent implements OnInit {

  activeSlideIndex = 0;  
  slides: Array<any> = [];
  

  constructor() {}

  ngOnInit() {

    this.slides = [
      {
        id:0,
        title: 'slider.cinemaTitle',
        description: 'slider.cinemaDescription',
        imageUrl: 'assets/images/swiper-icons/cinema/cinema.png'
      },
      {
        id:1,
        title: 'slider.travelTitle',
        description: 'slider.travelDescription',
        imageUrl: 'assets/images/swiper-icons/travelling/travel.png'
      },
      {
        id:2,
        title: 'slider.footballTitle',
        description: 'slider.footballDescription',
        imageUrl: 'assets/images/swiper-icons/football/soccer-game.png'
      }
    ];
  }

  ngAfterViewInit() {
   
  }

  //This method gives the active index in slider
  onSlideChange(e: any) {
    this.activeSlideIndex= e?.detail?.[0]?.activeIndex;
  }
}
