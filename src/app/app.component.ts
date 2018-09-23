import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-project';
  componentName = 'Recipes';

  displayComponent(componentName: string) {
    // console.log(componentName);
    this.componentName = componentName;
  }
}
