import { Component, signal } from "@angular/core";

@Component ({
    templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {
    name = signal('Ironman'); 
}
