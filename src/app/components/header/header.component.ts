import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title = 'Заголовок';
  @Input() toggleButton = false;
  @Output() onToggleButton = new EventEmitter();

  clickButtonHandler(event: Event) {
    this.onToggleButton.emit(!this.toggleButton);
  }

  getTextButton() {
    return this.toggleButton ? 'Закрыть' : 'Добавить';
  }

  getColorButton() {
    return this.toggleButton ? 'red' : 'green';
  }
}
