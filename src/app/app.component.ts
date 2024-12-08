import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateHeaderComponent } from "./_template/template-header/template-header.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateHeaderComponent, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Edu-Sharing_Aufgabe';
}
