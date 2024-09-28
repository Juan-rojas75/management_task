import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css'],
})
export class TaskFilterComponent {

  @Output()
  retornarStatus = new EventEmitter<string>();
  statusArray: {title: string , value: boolean}[] = [{ title: "All" , value: true} , { title: "Completed" , value: false}, { title: "Pending" , value: false}]

  // Variable para rastrear el estado seleccionado
  selectedStatus: string | null = null;

  // Método para establecer el estado seleccionado
  selectStatus(status: string) {
    this.selectedStatus = status;
  }

  statusSelect(mensaje:string) {
    this.statusArray = this.statusArray.map((item) => ({
      ...item,
      value: item.title === mensaje ? true : false
    }));
    this.retornarStatus.emit(mensaje)
  }
}
