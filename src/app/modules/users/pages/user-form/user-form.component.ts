import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../user/models/user.model';
import { Skills } from '../../user/models/skills.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  implements OnInit {
  userForm!: FormGroup;
  skillsArray:Skills[] = []
  constructor(private fb: FormBuilder, private userService: UserService, private router:Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: [[], Validators.required],
    });
    this.skillsArray = this.userService.getSkills()
  }

  get skills() {
    return this.userForm.get('skills');
  }

  // addSkill() {
  //   const skillFormGroup = this.fb.group({
  //     id: [null, [Validators.required]],
  //     name: ['', [Validators.required]],
  //   });
  //   this.skills.push(skillFormGroup);
  // }

  onSubmit() {
    if (this.userForm.valid) {
      const newUser: Partial<User> = this.userForm.value;
    const selectedSkills = this.userForm.get('skills')?.value;

    // Asigna las habilidades seleccionadas correctamente a newUser
    newUser.skills = selectedSkills.map(skill => ({ id: skill.id, name: skill.name }));

    // Llama al servicio para crear el nuevo usuario
    this.userService.createUser(newUser);

    // Restablece el formulario
    this.userForm.reset();

    // Navega a la lista de usuarios
    this.router.navigate(['/home/users']);
    }
  }
}
