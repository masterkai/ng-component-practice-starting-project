import { Component, input } from '@angular/core';

export interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  image = input.required<Image>();
  title = input.required<string>();
}
