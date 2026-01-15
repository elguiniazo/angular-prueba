import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonBallComponent {
  name = signal(' ');
  power = signal(0);

  characters = signal<Character[]>([{ id: 1, name: 'Goku', power: 9001 }]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    console.log('condiciones dadas. Agregando personaje...');

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);

    console.log('personaje agrgado exitosamente!');
    this.resetValues();
  }

  resetValues() {
    this.name.set(' ');
    this.power.set(0);
  }
}
