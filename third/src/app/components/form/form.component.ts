import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { PopoverController } from "@ionic/angular";
import { SKTelInputModule, SKTelInputOutput } from "sk-tel-input";
import { Ticket } from "src/app/models/ticket";
import { AlertComponent } from "../alert/alert.component";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  imports: [TranslateModule, IonicModule, SKTelInputModule, ReactiveFormsModule, AlertComponent]
})
export class FormComponent implements OnInit {
  emailPattern: string = "^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$";
  eventType:string='';
  randomNumber: string = "";
  // Define ticketArray with type Tickets[]
  ticketArray: Ticket[] = [];

  //Show alert
  added:boolean=false;
  //show loader
  isLoading:boolean=false;

  phoneValue:any = ''; 

  // Define the FormGroup with the email field and validation
  lotterySection = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required, // Ensure the email field is required
      Validators.pattern(this.emailPattern), // Add the email pattern validation
    ]),
    eventType:new FormControl<string>('', [
    Validators.required // Ensure the event type field is required
    ]),
    mobile: new FormControl<string>('', [
      Validators.required // Ensure the mobile field is required
    ]),
    mobilePrefix: new FormControl<string>('', [
      Validators.required // Ensure the mobile prefix field is required
    ]),
    ticketNumber: new FormControl<string>('', [
    Validators.required // Ensure the ticket number field is required
    ])
  });

  constructor(private translateService: TranslateService,
    private popoverController: PopoverController  
  ) {}

  ngOnInit() {

    this.lotterySection.get('email')?.valueChanges.subscribe(value => {
      console.log('Email Input Value:', value);
      const updatedValue = value ? value.trim() : ''; 
      this.lotterySection.get('email')?.setValue(updatedValue, { emitEvent: false });
    });
  }

  // This method returns the value of a selected control of the form
  getFormControlValue(givenControlTag: string): any {
    //return this.lotterySection.get(givenControlTag).value;
  }

  // This method is handling the output of the sk tel input
  handleSkTelInputContents(skTelOutput: SKTelInputOutput) {
    console.log("SK Tel Input Output: ", skTelOutput);
    this.lotterySection.get("mobilePrefix")?.setValue(`+${skTelOutput.selectedCountryCode.dialCode}`);
    this.lotterySection.get("mobile")?.setValue(`${skTelOutput.telInputContents}`);
    
  }

  //This method handles events
  selectEvent(str:string){
    this.translateService.get(str).subscribe((res: string) => {
      this.eventType = res;
    });

    // Sets the value of the 'eventType' form control in 'lotterySection' form group
    this.lotterySection.get('eventType')?.setValue(this.eventType);
    // Close the popover
    this.popoverController.dismiss();  
  }

  // This function creates a random number
  generateRandomInteger() {
    const randomNumberNumber = Math.floor(Math.random() * 1000) + 1; // Random number (1, 1000)
  
    this.randomNumber =
      randomNumberNumber < 1000
        ? randomNumberNumber.toString().padStart(4, "0")
        : randomNumberNumber.toString();
    //Give value to form
    this.lotterySection.get('ticketNumber')?.setValue(this.randomNumber);

  }

  // Check if the email already exists in the ticket array
   isEmailDuplicate(email: string): boolean {
    return this.ticketArray.some(ticket => ticket.email === email);
  }

  // Check if the phone number already exists in the ticket array
  isPhoneDuplicate(phone: string): boolean {
    return this.ticketArray.some(ticket => ticket.mobile === phone);
  }

  // Check if the random number already exists in the ticket array
  isRandomNumberDuplicate(randomNumber: string): boolean {
    return this.ticketArray.some(ticket => ticket.ticketNumber === randomNumber);
  }

  // Check if the form is valid
  isFormValid(): boolean {
    const email = this.lotterySection.get('email')?.value || '';
    const phone = this.lotterySection.get('mobile')?.value || '';
    const randomNumber = this.lotterySection.get('ticketNumber')?.value || '';
    const eventType = this.lotterySection.get('eventType')?.value;

    // Conditions for enabling the submit button
    return (
      this.lotterySection.valid &&
      !this.isEmailDuplicate(email) &&
      !this.isPhoneDuplicate(phone) &&
      !this.isRandomNumberDuplicate(randomNumber) &&
      !!eventType &&
      !!randomNumber
    );
  }

  // Method to submit the form
  submitForm() {
    if (this.isFormValid()) {
      this.addTicket();
      console.log(this.ticketArray)
      this.isLoading=true;
      setTimeout(() => {
        this.added=true;
      }, 2000); 
    } else {
      console.log('Form is invalid');
    }
  }

  //This method adds an ticket to the existing array
  addTicket(){
    const newTicket: Ticket = {
      id: this.ticketArray.length + 1,
      email: this.lotterySection.get('email')?.value || '',
      ticketEventType: this.lotterySection.get('eventType')?.value || '',
      mobile: this.lotterySection.get('mobile')?.value || '',
      mobilePrefix: this.lotterySection.get('mobilePrefix')?.value || '',
      ticketNumber: this.lotterySection.get('ticketNumber')?.value || '',
    };

    this.ticketArray.push(newTicket);
  }

  // Method to disable the submit button based on validation
  get isSubmitButtonDisabled(): boolean {
    return !this.isFormValid();
  }

  //This method close success alert
  getCloseAlert($event:any){
    //Reset loader
    this.isLoading=false;
    //Close alert
    this.added=false;
    //Clean form
    this.lotterySection.reset();
    // Reset other dynamic properties
    this.randomNumber = '';  
    this.eventType = '';     

    //Reset the sk-tel-input component 
    this.phoneValue = null;

    setTimeout(() => {
     this.phoneValue='';
    }, 1000);

  }
}
