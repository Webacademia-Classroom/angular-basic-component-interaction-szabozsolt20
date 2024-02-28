import { Component, EventEmitter, Output } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-action-button-group',
  standalone: true,
  imports: [
    ActionButtonComponent,
  ],
  template: `
    <div class="btn-group">
    <app-action-button
        [btnClass]="'btn-info'"
        [icon]="'fa-eye'"
        (clicked)="onSelectButtonClick()"
      ></app-action-button>
    <app-action-button
        [btnClass]="'btn-success'"
        [icon]="'fa-edit'"
        (clicked)="onUpdateClick()"
      ></app-action-button>
    <app-action-button
        [btnClass]="'btn-danger'"
        [icon]="'fa-trash'"
        (clicked)="onDeleteClick()"
      ></app-action-button>
    </div>
  `,
  styles: ``
})
export class ActionButtonGroupComponent {
  @Output() selectClick: EventEmitter<boolean> = new EventEmitter();

  @Output() updateClick: EventEmitter<boolean> = new EventEmitter();

  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter();

  onSelectButtonClick(): void {
    this.selectClick.emit(true);
  }

  onUpdateClick(): void {
    this.updateClick.emit(true);
  }
  onDeleteClick(): void {
    this.deleteClick.emit(true);
  }

}
