import { Component, inject, Injector, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { AddCharacter } from '../../components/dragonball/add-character/add-character';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList, AddCharacter],
})
export class DragonBallSuperComponent {
  public DragonballService = inject(DragonballService);
}
