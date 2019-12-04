import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../../services/shared/rest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit {

  // user data
  currentUser: any = JSON.parse(sessionStorage.getItem("currentUser"));

  //vars
  smsForm: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public resApi: RestService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    
    this.smsForm = new FormGroup({
      sender_id: new FormControl(this.currentUser.user.sender_id, [Validators.required]),
      sms_head: new FormControl(''),
      mobile_no: new FormControl('', [Validators.required, Validators.maxLength(5000)]),
      content: new FormControl('', [Validators.required]),
      sms_sign: new FormControl('')
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.smsForm.controls[controlName].hasError(errorName);
  }

}
