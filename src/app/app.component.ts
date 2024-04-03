// Imports
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Decorators 
@Component({
  selector: 'app-root', //tag name
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Class
export class AppComponent {
  title = 'leaning-angular';
}
