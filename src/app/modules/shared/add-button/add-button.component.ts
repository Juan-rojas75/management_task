import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {

  @Output()
  response = new EventEmitter();

  Emitter(){
    this.response.emit();
  }
}
