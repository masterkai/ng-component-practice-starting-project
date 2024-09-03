import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { v4 as uuidv4 } from 'uuid';
import { TicketComponent } from './ticket/ticket.component';
@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  addTicket(ticket_data: { title: string; text: string }) {
    const id = uuidv4();
    const new_ticket: Ticket = {
      id,
      title: ticket_data.title,
      request: ticket_data.text,
      status: 'open',
    };
    this.tickets.push(new_ticket);
  }

  onClose(id: string) {
    const index = this.tickets.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.tickets[index].status = 'closed';
    }
  }
}
