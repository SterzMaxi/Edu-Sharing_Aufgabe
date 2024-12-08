import { Component, Input } from '@angular/core';
import { TemplateReferenceCardComponent } from "../_template/template-reference-card/template-reference-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference-card-list',
  imports: [TemplateReferenceCardComponent, CommonModule],
  templateUrl: './reference-card-list.component.html',
  styleUrl: './reference-card-list.component.scss'
})
export class ReferenceCardListComponent {

  @Input() cards: any[] = [];
  @Input() color!: string;
  @Input() parentPreview!: any;

}
