import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineShop-angular';
  featureFromHeader = 'recipe';

  getFeature(feature){
    this.featureFromHeader =feature;
  }
}
