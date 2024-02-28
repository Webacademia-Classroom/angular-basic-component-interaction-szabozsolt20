import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: `
    <i class="fa" [class]="icon"></i>
  `,
  styles: ``
})
export class IconComponent {
  @Input() icon: string = '';
}
