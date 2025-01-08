import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { register } from "swiper/element/bundle";

register();
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  standalone: false
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang("el");
    this.translate.use("el");
  }
}
