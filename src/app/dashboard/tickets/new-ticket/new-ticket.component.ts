import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { EmptyComponent } from '../../../shared/empty/empty.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, EmptyComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  add = output<{ title: string; text: string }>();
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit(v: { title: string; ticketText: string }) {
    console.log('submitted', v);
    this.add.emit({ title: v.title, text: v.ticketText });
    this.form().nativeElement.reset();
  }

  ngAfterViewInit(): void {
    console.log(this.form());
  }
}
