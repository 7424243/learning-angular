// Imports
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Decorators 
@Component({
  selector: 'app-root', //tag names
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // could also be inline
  styleUrl: './app.component.css'
})

// Class
export class AppComponent implements OnInit{
  title: string | undefined;

  constructor () {

  }

  ngOnInit(): void {
    this.title = 'leaning-angular!'
  }
}
