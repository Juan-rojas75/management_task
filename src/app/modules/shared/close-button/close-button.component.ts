import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-close-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.css']
})
export class CloseButtonComponent {
  @Output()
  response = new EventEmitter();

  Emitter(){
    this.response.emit();
  }
}
