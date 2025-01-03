import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "../swiper/swiper.component";
import { FormComponent } from "../form/form.component";
import { WelcomeComponent } from "../welcome/welcome.component";

@Component({
  selector: 'app-lotteries',
  templateUrl: './lotteries.component.html',
  styleUrls: ['./lotteries.component.scss'],
  imports: [SwiperComponent, FormComponent, WelcomeComponent],
})
export class LotteriesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
