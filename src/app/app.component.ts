import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule, CarouselComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('carousel') carousel!: CarouselComponent;
  @ViewChild('playButton') button!: ButtonComponent;
  public btnClick() {
    if(this.carousel.autoPlay) {
      this.carousel.autoPlay = false;
      this.button.content = "PLAY";
    } else {
      this.carousel.autoPlay = true;
      this.button.content = "PAUSE";
    }
  }
  public getThumbNail(index: number): string {
    const images = ['cardinal', 'hunei', 'costa-rica', 'kaohsiung'];
    return `https://ej2.syncfusion.com/products/images/carousel/${images[index]}.png`;
  }
  title = 'myapp';
}
