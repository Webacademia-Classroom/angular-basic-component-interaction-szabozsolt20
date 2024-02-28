import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { DataRowComponent } from '../data-row/data-row.component';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [
    CommonModule,
    DataRowComponent,
  ],
  templateUrl: './data-list.component.html',
  styles: ``
})
export class DataListComponent {
  @Input() dataList: User[] = [];

  @Output() selectClick: EventEmitter<User> = new EventEmitter();

  @Output() updateClick: EventEmitter<User> = new EventEmitter();

  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  onSelectClick(dataRow: User): void {
    this.selectClick.emit(dataRow);
  }

  onUpdateClick(dataRow: User): void {
    this.updateClick.emit(dataRow);
  }

  onDeleteClick(dataRow: User): void {
    this.deleteClick.emit(dataRow);
  }

}
