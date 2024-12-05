import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateHeaderComponent } from "./_template/template-header/template-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Edu-Sharing_Aufgabe';
}
