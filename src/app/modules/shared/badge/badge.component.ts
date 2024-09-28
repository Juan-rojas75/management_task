import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() objeto:{title:string,value:boolean} = {title:"",value:false}
  @Output()
  retornarStatus = new EventEmitter<string>();
  isSelected:boolean = false
  ngOnInit() {
    this.isSelected = this.objeto.value;
  }



  // Método para alternar la selección
  toggleSelection() {
    this.isSelected = !this.isSelected;
    this.retornarStatus.emit(this.objeto.title);
  }
}
