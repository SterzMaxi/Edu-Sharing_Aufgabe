import { Component, OnInit, Input } from '@angular/core';
import { TemplateReferenceCardComponent } from "../_template/template-reference-card/template-reference-card.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reference-card-list',
  imports: [TemplateReferenceCardComponent, CommonModule, RouterOutlet],
  templateUrl: './reference-card-list.component.html',
  styleUrl: './reference-card-list.component.scss'
})
export class ReferenceCardListComponent {

  @Input() cards: any[] = [];
  @Input() color!: string;
  @Input() preview!: any;
  @Input() createdFirstName!: any;
  @Input() createdLastName!: any;

  //cards: number[] = Array.from({ length: 10 }, (_, index) => index + 1);

}
