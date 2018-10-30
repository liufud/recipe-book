import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice-project';
  componentName = 'Recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB34axmGfNGOb2I046JM4mwR-xa-i2od3A",
      authDomain: "ng-recipe-book-80791.firebaseapp.com",
    });
  }

  displayComponent(componentName: string) {
    // console.log(componentName);
    this.componentName = componentName;
  }
}
