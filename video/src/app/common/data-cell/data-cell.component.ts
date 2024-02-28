import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-data-cell',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="mt-1">
      <input [formControl]="cellControl" class="form-control">
    </div>
  `,
  styles: ``
})
export class DataCellComponent implements OnInit {
  @Input() set data(user: User) {
    this.data$.next(user);
  }

  @Input() set key(key: string) {
    this.key$.next(key);
  }

  data$: BehaviorSubject<User> = new BehaviorSubject<User>( new User() );

  key$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  cellControl: FormControl = new FormControl('');

  ngOnInit(): void {
    combineLatest([
      this.data$,
      this.key$,
    ]).subscribe(
      ([data, key]) => this.cellControl.setValue( data[key] ),
    );
  }

}
