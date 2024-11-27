import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrl: './template-card.component.scss',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() color!: string;
  @Input() childCollections!: number;
  @Input() childReferences!: number;
  @Input() iconUrl!: string;
  @Input() preview!: any;
}
