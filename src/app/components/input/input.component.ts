import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

type InputType = 'text' | 'datetime-local';
interface InputError {
  [key: string]: ((...args: any) => string) | string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() class = '';
  @Input() label = '';
  @Input() type: InputType = 'text';
  @Input() placeholder = '';
  @Input() control: FormControl = new FormControl();

  errorsMessages: InputError = {
    required: 'Данное поле обязательно для заполенения',
    minlength: ({ requiredLength }) =>
      `Минимальная длина поля ${requiredLength} символов`,
  };

  getErrorMessage({ key, value }: { key: string; value: any }) {
    const message = this.errorsMessages[key];

    if (typeof message === 'function') {
      return message(value);
    }

    return message;
  }
}
