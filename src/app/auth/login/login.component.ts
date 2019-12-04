import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../../services/shared/rest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public resApi: RestService,
    public toastr: ToastrService
  ) {
    if (sessionStorage.getItem('currentUser')) {
      this.router.navigate(['/pages/dashboard']);
    }
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  userLogin(loginForm: FormGroup){
    if(loginForm.valid){
      this.resApi.login(loginForm.value.email, loginForm.value.password)
      .subscribe((res: any)=>{
        if(res.user && res.user.token){
          this.toastr.success("Login successfully", "Success");
          this.router.navigate(['/pages/dashboard']);
          //location.reload(true);
        }else{
          this.toastr.error(res.errors.message, "Error!");
        }
      }, (err: any)=>{
        this.toastr.error(err, "Error!");
      })
    }
  }
}
