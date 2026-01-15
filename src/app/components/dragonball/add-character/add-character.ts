import { Component, signal, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'add-character',
  templateUrl: './add-character.html',
})
export class AddCharacter {
  name = signal(' ');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: 10000,
      name: this.name(),
      power: this.power(),
    };

    //this.characters.update((list) => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.resetValues();
  }

  resetValues() {
    this.name.set(' ');
    this.power.set(0);
  }
}
