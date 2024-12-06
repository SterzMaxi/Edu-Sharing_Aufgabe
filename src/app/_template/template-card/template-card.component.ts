import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCardComponent implements OnInit {
  @Input() id!: number;
  @Input() title!: string;
  @Input() color!: string;
  @Input() childCollections!: number;
  @Input() childReferences!: number;
  @Input() iconUrl!: string;
  @Input() preview!: any;
  @Input() referenceId!: any;
  @Input() createdFirstName!: string;
  @Input() createdLastName!: string;

  apiResponse: any;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  onCardClick(): void {
    const referenceId = this.referenceId;
    const color = this.color;
    const title = this.title;
    const preview = JSON.stringify(this.preview);;
    const createdFirstName = this.createdFirstName;
    const createdLastName = this.createdLastName;

    this.router.navigate(['/collection-list/content-list'], {
      queryParams: { referenceId, color, title, preview, createdFirstName, createdLastName },
    });
   }
}
