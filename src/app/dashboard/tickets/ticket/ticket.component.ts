import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  DATA = input.required<Ticket>({});
  expanded = signal(false);
  close = output();
  toggle() {
    this.expanded.update((v) => !v);
  }
  onMarkAsCompleted() {
    this.close.emit();
  }
}
