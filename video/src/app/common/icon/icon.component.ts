import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- i element with fa and the specified icon class -->
    <i class="fa" [class]="icon"></i>
  `,
  styles: ``
})
export class IconComponent {
  /**
   * Input property for the name of the icon.
   * @var {string} icon
   * @default ''
   */
  @Input() icon: string = '';
}
