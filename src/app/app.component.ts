import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsAccordionComponent } from '../tabs-accordion/tabs-accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsAccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sample';
}
