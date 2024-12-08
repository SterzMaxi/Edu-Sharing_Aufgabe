import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NavigationStateService } from '../../_services/navigation-state.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-reference-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './template-reference-card.component.html',
  styleUrls: ['./template-reference-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateReferenceCardComponent implements OnInit {
  @Input() color!: string;
  @Input() card!: any;
  @Input() parentPreview!: any;

  constructor(private route: ActivatedRoute, private router: Router, private navigationStateService: NavigationStateService) {}

  onCardClick(): void {
    const color = this.color;
    const name = this.card.name;
    const parentPreview = this.parentPreview;
    const previewUrl = this.card.preview.url;
    const createdFirstName = this.card.createdBy.firstName;
    const createdLastName = this.card.createdBy.lastName;
    const downloadLink = this.card.downloadLink;
    const createdAt = this.card.createdAt;
    const mimeType = this.card.mimetype;
    const size = this.card.size;

    const data = {
      color,
      name,
      previewUrl,
      createdFirstName,
      createdLastName,
      createdAt,
      mimeType,
      size,
      preview: JSON.stringify(parentPreview),
      referenceId: this.card.parent.id,
    };

    this.navigationStateService.setStateData(data);

    this.router.navigate(['/collection-list/content-list', this.card.parent.id, 'content', this.card.name], {
    });
  }

  ngOnInit(): void {
    this.card.referenceId = +this.route.snapshot.paramMap.get('id')!;
  }
}
