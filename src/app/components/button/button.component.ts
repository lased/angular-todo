import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() color: string = 'green';
  @Input() class: string = '';
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter();

  onClickButton(event: Event) {
    this.onClick.emit(event);
  }
}
