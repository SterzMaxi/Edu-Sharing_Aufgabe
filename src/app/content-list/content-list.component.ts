
import { ActivatedRoute } from '@angular/router';
import { EduSharingService } from '../_services/edusharing-service';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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

  materialCount: number = 0;

  data: any;
  cards: any[] = [];
  referenceId: string | null = null;
  apiResponse: any = null;
  preview: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: EduSharingService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const previewString = params['preview'];
      this.preview = previewString ? JSON.parse(previewString) : null;


      this.referenceId = params['referenceId'] || null;
      if (this.referenceId) {
        this.fetchData(this.referenceId);
      }
    });
  }

  fetchData(referenceId: string): void {
    const params = {
      scope: 'EDU_ALL',
      maxItems: 500,
      skipCount: 0,
    };

    this.apiService.getReferences(referenceId, params).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.apiResponse = response;
        if (response && Array.isArray(response.references)) {
          this.materialCount = response.references.length;
        } else {
          this.materialCount = 0;
        }
        if (response && response.references) {
          this.cards = response.references;
        }
      },
      error: (err) => {
        console.error('API call failed:', err);
      },
    });
  }
}
