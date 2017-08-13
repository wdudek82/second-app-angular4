import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  string = '';
  title = 'app works!';

  alphabet = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----',
  };

  joinWithStars() {
    return this.string
      .split('')
      .join('*');
  }


  // toOrd(char: string) {
  //   return char.charCodeAt(0);
  // }

  toChar(num: number) {
    return String.fromCharCode(num);
  }

  incrementCharCode(char: string) {
    return char.charCodeAt(0) + 1;
  }

  convertToCaesarCode() {
    return this.string
      .split('')
      .map(this.incrementCharCode)
      .map(this.toChar)
      .join('');
  }

  toMorse() {
    return this.string
      .toLowerCase()
      .split('')
      .map(char => this.alphabet[char])
      .join(' ');
  }
}
