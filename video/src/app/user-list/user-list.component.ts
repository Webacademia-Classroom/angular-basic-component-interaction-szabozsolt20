import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() phraseString: string = '';

  @Input() users: User[] = [];
  @Output() delUser: EventEmitter<User> = new EventEmitter();
  currentUser: User = new User();

  columnKey: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSelectUser(user: User): void {
    this.currentUser = user;
  }

  onDeleteUser(user: User): void {
    this.delUser.emit(user);
    this.currentUser = new User();
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
  }

}
