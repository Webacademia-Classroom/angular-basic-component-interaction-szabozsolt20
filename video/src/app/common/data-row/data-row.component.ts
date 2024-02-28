import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { DataCellComponent } from '../data-cell/data-cell.component';
import { ActionButtonGroupComponent } from '../action-button-group/action-button-group.component';

@Component({
  selector: 'app-data-row',
  standalone: true,
  imports: [
    CommonModule,
    DataCellComponent,
    ActionButtonGroupComponent,
  ],
  templateUrl: './data-row.component.html',
  styles: ``
})
export class DataRowComponent {
  @Input() dataRow: User = new User();

  @Output() selectClick: EventEmitter<User> = new EventEmitter();

  @Output() updateClick: EventEmitter<User> = new EventEmitter();

  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  onSelectClicked(): void {
    this.selectClick.emit(this.dataRow);
  }
  onUpdateClicked(): void {
    this.updateClick.emit(this.dataRow);
  }
  onDeleteClicked(): void {
    this.deleteClick.emit(this.dataRow);
  }
}
