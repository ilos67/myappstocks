import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  
    constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      // this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
      this.createLoginForm();
    }
  
    createLoginForm() {
      this.loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
    }
  
    onSubmit() {
      this.accountService.login(this.loginForm.value).subscribe(() => {
        console.log('user logged in')
      }, error => {
        console.log(error);
      });
    }
}
