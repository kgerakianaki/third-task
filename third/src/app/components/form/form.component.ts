import { Component, OnInit } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import { SKTelInputModule, SKTelInputOutput } from "sk-tel-input";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  imports: [TranslateModule, IonicModule, SKTelInputModule]
})
export class FormComponent implements OnInit {
  emailPattern: string = "^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$";
  constructor() {}

  ngOnInit() {}

  // This method returns the value of a selected control of the form
  getFormControlValue(givenControlTag: string): any {
    //return this.testForm.get(givenControlTag).value;
  }

  // This method is handling the output of the sk tel input
  handleSkTelInputContents(skTelOutput: SKTelInputOutput) {
    //this.helper.consoleHandler("SK Tel Input Output: ", skTelOutput);
    // Proper setup the content and the form fields
    //this.testForm
    //   .get("prefix")
    //   .setValue(`+${skTelOutput.selectedCountryCode.dialCode}`);
    //this.testForm.get("phone").setValue(`${skTelOutput.telInputContents}`);
  }
}
