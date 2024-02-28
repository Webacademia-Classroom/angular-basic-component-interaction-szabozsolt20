import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [
    IconComponent,
  ],
  templateUrl: './action-button.component.html',
  styles: ``
})
export class ActionButtonComponent {
  /**
   * Input property for the class of the icon.
   * @var {string} icon
   * @default 'fa-pen'
   */


  // btnClass


  // text


  /**
   * Output property for clicked event.
   * @var {EventEmitter<boolean>} clicked
   */

  onUserClicked(): void {
    // this.clicked.emit(true);
  }
}
