import {
  Component,
  contentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'control',
  // },
})
export class ControlComponent {
  @HostListener('click') onClick() {
    console.log('clicked');
    // console.log(this._el.nativeElement);
    console.log(this.control().nativeElement);
  }
  @HostBinding('class') className = 'control';
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input',
    );
  label = input.required<string>();
  private _el = inject(ElementRef);
}
