import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-reference-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './template-reference-card.component.html',
  styleUrl: './template-reference-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateReferenceCardComponent implements OnInit {
  @Input() id!: number;
  @Input() name!: string;
  @Input() color!: string;
  @Input() preview!: any;
  @Input() createdFirstName!: string;
  @Input() createdLastName!: string;
  @Input() downloadLink!: string;

  constructor(private router: Router) {}

  onCardClick(): void {
    const color = this.color;
    const name = this.name;
    const preview = this.preview;
    const previewUrl = this.preview.url;
    const createdFirstName = this.createdFirstName;
    const createdLastName = this.createdLastName;
    const downloadLink = this.downloadLink;

    this.router.navigate(['/collection-list/content-list/content'], {
      queryParams: { downloadLink, name, previewUrl, createdFirstName, createdLastName },
    });
   }

   ngOnInit(): void {

   }

}
