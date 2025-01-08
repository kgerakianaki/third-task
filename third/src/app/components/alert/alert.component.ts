import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
  imports: [TranslateModule, IonicModule]
})
export class AlertComponent implements OnInit {
  @Output() alertClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  closeAlert() {
    this.alertClosed.emit(false);
  }
}
