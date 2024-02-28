import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User = new User();

  @Output() delUser: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(user: User): void {
    this.delUser.emit(user);
  }

}
