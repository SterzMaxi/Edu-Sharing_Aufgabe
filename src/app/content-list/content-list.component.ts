import { ActivatedRoute } from '@angular/router';
import { EduSharingService } from '../_services/edusharing-service';
import { NavigationStateService } from '../_services/navigation-state.service';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReferenceCardListComponent } from "../reference-card-list/reference-card-list.component";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
  imports: [MatIconModule, CommonModule, ReferenceCardListComponent],
})
export class ContentListComponent implements OnInit {
  
  @Input() title!: string;
  @Input() color!: string;
  @Input() createdFirstName!: string;
  @Input() createdLastName!: string;
  @Input() parentPreview!: any;

  materialCount: number = 0;
  cards: any[] = [];
  referenceId: string | null = null;
  preview: any = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: EduSharingService,
    private navigationStateService: NavigationStateService
  ) {}

  ngOnInit(): void {
    
    this.initializeState();
    if (this.referenceId) {
      this.fetchData(this.referenceId);
    } else {
      console.error('No referenceId found. Cannot fetch data.');
    }
  }

  private initializeState(): void {
    const navigationState = history.state;
    const stateData = this.navigationStateService.getStateData();

    if (navigationState && navigationState.referenceId) {
      this.setStateFromData(navigationState);
    } else 
    if (stateData) {
      console.warn('Using fallback state from NavigationStateService');
      this.setStateFromData(stateData);
    } else {
      console.warn('No state available. Fetching referenceId from route params.');
      this.referenceId = this.route.snapshot.paramMap.get('referenceId');
    }
  }

  private setStateFromData(data: any): void {
    this.referenceId = data.referenceId;
    this.title = data.title;
    this.color = data.color;
    this.createdFirstName = data.createdFirstName;
    this.createdLastName = data.createdLastName;
    this.preview = data.preview ? JSON.parse(data.preview) : null;
  }

  private fetchData(referenceId: string): void {
    const params = {
      scope: 'EDU_ALL',
      maxItems: 500,
      skipCount: 0,
    };

    this.apiService.getReferences(referenceId, params).subscribe({
      next: (response) => this.handleApiResponse(response),
      error: (err) => console.error('API call failed:', err),
    });
  }

  private handleApiResponse(response: any): void {
    this.materialCount = response?.references?.length || 0;
    this.cards = response?.references || [];
  }
}
