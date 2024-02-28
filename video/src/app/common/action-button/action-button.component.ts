import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [
    IconComponent,
  ],
  template: `
    <button (click)="onUserClicked()" class="btn" [class]="btnClass">
      <app-icon [icon]="icon"></app-icon>
      {{ text }}
    </button>
  `,
  styles: ``
})
export class ActionButtonComponent {
  @Input() icon: string = 'fa-pen';

  @Input() btnClass: string = 'btn-info';

  @Input() text: string = '';

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  onUserClicked(): void {
    this.clicked.emit(true);
  }
}
