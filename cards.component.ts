import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cardData = [
    { title: '李祖阳', channel: '乐琪 CHANNEL', voiss: 'Voiss1' },
    { title: ' 可欣', channel: 'S可欣 CHANNEL', voiss: 'Voiss2' },
    { title: '小丹 ', channel: '小丹3 CHANNEL', voiss: 'Voiss3' },
    { title: '艺桐 ', channel: '晴怡 CHANNEL', voiss: 'Voiss4' },
    { title: '艺桐 ', channel: '晴怡 CHANNEL', voiss: 'Voiss5' },
    { title: '艺桐 ', channel: '晴怡 CHANNEL', voiss: 'Voiss6' },


    // Add more card data as needed
  ];
  isMediumScreen = false;
  isSmallScreen = false;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMediumScreen = window.innerWidth <= 992;
    this.isSmallScreen = window.innerWidth <= 768;
    
  }

  
  

}
