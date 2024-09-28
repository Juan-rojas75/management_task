import { Injectable } from '@angular/core';
import { User } from '../../modules/users/user/models/user.model';
import { Skills } from 'src/app/modules/users/user/models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localStorageKey = 'users';
  private initialSkills:Skills[] = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'Spring' },
    { id: 5, name: 'Python' },
    { id: 6, name: 'Django' },
    { id: 7, name: 'HTML' },
    { id: 8, name: 'CSS' },
    { id: 9, name: 'C#' },
    { id: 10, name: '.NET' },
    { id: 11, name: 'Ruby' },
    { id: 12, name: 'Rails' },
    { id: 13, name: 'PHP' },
    { id: 14, name: 'Laravel' },
    { id: 15, name: 'React' },
    { id: 16, name: 'Node.js' },
    { id: 17, name: 'TypeScript' },
    { id: 18, name: 'Swift' },
    { id: 19, name: 'iOS Development' },
    { id: 20, name: 'Go' },
    { id: 21, name: 'Kotlin' },
    { id: 22, name: 'Rust' },
    { id: 23, name: 'GraphQL' },
    { id: 24, name: 'Machine Learning' }
  ];
  private initialUsers: User[] = [
    {
      id: 1,
      fullName: 'Juan Carlos Pérez',
      age: 25,
      skills: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'Angular' }
      ]
    },
    {
      id: 2,
      fullName: 'María Fernanda López',
      age: 30,
      skills: [
        { id: 3, name: 'Java' },
        { id: 4, name: 'Spring' }
      ]
    },
    {
      id: 3,
      fullName: 'Juan David Rojas',
      age: 22,
      skills: [
        { id: 5, name: 'Python' },
        { id: 6, name: 'Django' }
      ]
    },
    {
      id: 4,
      fullName: 'July Vanessa Rodríguez',
      age: 28,
      skills: [
        { id: 7, name: 'HTML' },
        { id: 8, name: 'CSS' },
        { id: 9, name: 'JavaScript' }
      ]
    },
    {
      id: 5,
      fullName: 'Pedro Antonio Gómez',
      age: 35,
      skills: [
        { id: 10, name: 'C#' },
        { id: 11, name: '.NET' }
      ]
    },
    {
      id: 6,
      fullName: 'Ana Lucía Torres',
      age: 27,
      skills: [
        { id: 12, name: 'Ruby' },
        { id: 13, name: 'Rails' }
      ]
    },
    {
      id: 7,
      fullName: 'Luis Alberto Martínez',
      age: 33,
      skills: [
        { id: 14, name: 'PHP' },
        { id: 15, name: 'Laravel' }
      ]
    },
    {
      id: 8,
      fullName: 'Sofía Elizabeth Jiménez',
      age: 29,
      skills: [
        { id: 16, name: 'React' },
        { id: 17, name: 'Node.js' }
      ]
    },
    {
      id: 9,
      fullName: 'Andrés Felipe Pérez',
      age: 24,
      skills: [
        { id: 18, name: 'TypeScript' },
        { id: 19, name: 'Angular' }
      ]
    },
    {
      id: 10,
      fullName: 'Lucía María Hernández',
      age: 26,
      skills: [
        { id: 20, name: 'Swift' },
        { id: 21, name: 'iOS Development' }
      ]
    }
  ];
  private users: User[] = this.loadUsersFromLocalStorage();
  private nextUserId = this.users.length ? Math.max(...this.users.map(user => user.id)) + 1 : 1;

  constructor() {}

  // Cargar usuarios desde localStorage o usar los iniciales si no hay datos
  private loadUsersFromLocalStorage(): User[] {
    const users = localStorage.getItem(this.localStorageKey);
    return users ? JSON.parse(users) : [...this.initialUsers];
  }

  // Guardar usuarios en localStorage
  private saveUsersToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.users));
  }

  // Obtener todos los usuarios
  getUsers(): User[] {
    return this.users;
  }

  // Obtener usuario por ID
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Obtener usuarios por IDs
  getUsersByIds(ids: number[]): User[] {
    console.log(ids)
    return this.users.filter(user => ids.includes(user.id));
  }


  // Crear un nuevo usuario
  createUser(user: Partial<User>): User {
    const newUser: User = {
      id: this.nextUserId++,
      fullName: user.fullName || 'full name',
      age: user.age || 18,
      skills: user.skills || []
    };
    this.users.push(newUser);
    this.saveUsersToLocalStorage(); // Guardar cambios en localStorage
    return newUser;
  }

  // Actualizar un usuario
  updateUser(id: number, updatedData: Partial<User>): User | undefined {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
      this.saveUsersToLocalStorage(); // Guardar cambios en localStorage
      return this.users[userIndex];
    }
    return undefined;
  }

  // Eliminar un usuario
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.saveUsersToLocalStorage(); // Guardar cambios en localStorage
  }


  getSkills():Skills[]{
    return this.initialSkills;
  }
}
