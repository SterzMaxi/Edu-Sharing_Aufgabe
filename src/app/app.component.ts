import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from "./card-list/card-list.component";
import { TemplateHeaderComponent } from "./_template/template-header/template-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardListComponent, TemplateHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Edu-Sharing_Aufgabe';
}
