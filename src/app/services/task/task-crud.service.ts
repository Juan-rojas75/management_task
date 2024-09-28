// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { Task } from '../../modules/tasks/models/task.model';
import { UserService } from '../user/user.service';
import { All, AllService } from '../todo/all.service';

@Injectable({
  providedIn: 'root',
})
export class TaskCrudService {
  private localStorageKey = 'tasks';
  private tasks: Task[] = [];
  nextId = 1; // Comenzamos desde 1 para evitar 0

  constructor(private userService: UserService, private allApi: AllService) {
    this.loadTasks();
  }

  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.localStorageKey);
    try {
      this.tasks = tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error('Error al analizar tareas de localStorage:', error);
      this.tasks = []; // Resetea a un array vacío si hay un error
    }
    return this.tasks;
  }

  // Método para almacenar tareas en localStorage
  saveTasks(): void {
    try {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
    } catch (error) {
      console.error('Error al guardar tareas en localStorage:', error);
    }
  }

  // Cargar tareas desde la API si no hay en localStorage
  loadTasks() {
    if (!this.getTasks().length) {
      this.allApi.getAll().subscribe((newTasks: All[]) => {
        newTasks.forEach((task) => {
          const newTask: Task = {
            id: this.nextId++,
            title: task.title || 'Nueva Tarea',
            description: '',
            dateEnd: new Date(),
            completed: task.completed || false,
            userId: [task.userId],
          };
          this.tasks.push(newTask);
        });
        this.saveTasks();
      });
    }
    return this.tasks
  }

  // Obtener todas las tareas de un usuario específico
  getTasksByUser(userIds: number): Task[] {
    return this.tasks.filter((task) => task.userId.includes(userIds));
  }

  // Obtener tarea por ID
  getTasksById(Id: number): Task | undefined {
    return this.tasks.find((task) => task.id === Id);
  }

  // Obtener una tarea por ID y usuario
  getTaskByIdAndUser(taskId: number, userId: number): Task | undefined {
    return this.tasks.find(
      (task) => task.id === taskId || task.userId.includes(userId)
    );
  }

  // Obtener una tarea por estado
  getTaskByStatus(status: boolean): Task[] {
    return this.tasks.filter((task) => task.completed === status);
  }

  // Crear una nueva tarea para un usuario
  createTask(task: Partial<Task>, userId: number[]): Task {
    const newTask: Task = {
      id: this.nextId++,
      title: task.title || 'Nueva Tarea',
      description: task.description || '',
      dateEnd: task.dateEnd || new Date(),
      completed: task.completed || false,
      userId: userId,
    };
    this.tasks.push(newTask);
    this.saveTasks();
    return newTask;
  }

  // Actualizar una tarea de un usuario
  updateTask(
    taskId: number,
    updatedTask: Partial<Task>,
  ): Task | undefined {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
      this.saveTasks();
      return this.tasks[taskIndex];
    }
    return undefined;
  }

  // Eliminar una tarea por ID y usuario
  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(
      (task) => task.id !== taskId
    );
    this.saveTasks(); // Guarda los cambios en localStorage
  }
}
