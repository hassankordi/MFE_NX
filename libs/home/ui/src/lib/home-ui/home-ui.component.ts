import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-home-ui',
  imports: [CommonModule,RouterModule],
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.scss'],
})
export class HomeUiComponent implements AfterViewInit {
  @ViewChild('grid') grid: ElementRef | undefined;

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.grid?.nativeElement);
    const cards = this.grid?.nativeElement.children;
    if (cards) {
      for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      card.addEventListener('click', () => {
        // Remove 'open' class from all other cards
        for (let j = 0; j < cards.length; j++) {
        if (j !== i) {
          cards[j].classList.remove('open');
        }
        }
        // Toggle 'open' class on the clicked card
        if (card.classList.contains('open')) {
        card.classList.remove('open');
        } else {
        card.classList.add('open');
        }
      });
      }
    }
  }
}
