import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NavigationStateService } from '../../_services/navigation-state.service';

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

  constructor(private router: Router, private navigationStateService: NavigationStateService) {}

  ngOnInit(): void {

  }

  onCardClick(): void {
    const data = {
      referenceId: this.referenceId,
      color: this.color,
      title: this.title,
      preview: JSON.stringify(this.preview),
      createdFirstName: this.createdFirstName,
      createdLastName: this.createdLastName,
      id: this.id,
    };

    this.navigationStateService.setStateData(data);

    this.router.navigate(['/collection-list/content-list', this.referenceId], {
      state: data,
    });
   }
}
