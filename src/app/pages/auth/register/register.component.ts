import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormErrorComponent } from '../../../shared/form-error/form-error.component';
import { AuthRequest } from '../../../interfaces/auth/auth';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, FormErrorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  private _authService = inject(AuthService)
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    
        if(this.registerForm.valid)
        {
          const Auth: AuthRequest = {
            name: this.registerForm.get('name')?.value,
            email: this.registerForm.get('email')?.value,
            password: this.registerForm.get('password')?.value,
            image: this.registerForm.get('image')?.value
          }
    
          this._authService.register(Auth).subscribe(
            (res)=>{
               localStorage.setItem('token', res.token);
               localStorage.setItem('email', Auth.email);
               localStorage.setItem('image', Auth.image!);                
            }
          );
        }
        console.log('Form Data:', this.registerForm.value);
  }
}
