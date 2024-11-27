import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrl: './template-header.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule]
})
export class TemplateHeaderComponent {

}
