import { Component } from '@angular/core';
import { lineString } from '../graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pathString = lineString;
}
