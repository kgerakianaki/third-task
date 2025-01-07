import { Component, OnInit } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
  imports: [TranslateModule]
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
