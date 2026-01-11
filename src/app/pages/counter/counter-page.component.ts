import { Component, signal } from '@angular/core';

@Component({
    templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {

    counterSignal = signal(1);

    increaseby(value: number) {
        this.counterSignal.update((current) => current + value);
    }

    reset() {
        this.counterSignal.set(1);
    }

}