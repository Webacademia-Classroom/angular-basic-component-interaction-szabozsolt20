import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataListComponent } from './common/data-list/data-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DataListComponent,
    UserDetailComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'The good Angular programmer';

  userService: UserService = inject(UserService);

  users: User[] = this.userService.list;

  currentUser: User = new User();

  onDeleteUser(user: User): void {
    this.userService.removeUser(user);
  }

  onUpdateClick(user: User): void {
    this.userService.updateUser(user);
  }

  onSelectClick(user: User): void {
    this.currentUser = user;
  }

}
