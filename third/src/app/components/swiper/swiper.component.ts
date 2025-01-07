import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { register } from "swiper/element/bundle";

register();
@Component({
  selector: "app-swiper",
  templateUrl: "./swiper.component.html",
  styleUrls: ["./swiper.component.scss"],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [TranslateModule]
})
export class SwiperComponent implements OnInit {
  constructor() {}

  ngOnInit() {
   
  }
}
