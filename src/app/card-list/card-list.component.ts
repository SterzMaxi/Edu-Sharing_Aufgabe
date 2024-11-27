import { Component, OnInit } from '@angular/core';
import { EduSharingService } from '../_services/edusharing-service';
import { Node } from 'ngx-edu-sharing-api';
import { TemplateCardComponent } from "../_template/template-card/template-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [TemplateCardComponent, CommonModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  data: any;
  //cards: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
  cards: any[] = [];

  constructor(private apiService: EduSharingService) {}

  ngOnInit(): void {
    const params = {
      scope: 'EDU_ALL',
      maxItems: 500,
      skipCount: 0,
    };
    this.apiService.getSubcollections('-root-', params).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.data = response;

        if (this.data && this.data.collections) {
          this.cards = this.data.collections;
        }
      },
      error: (err) => {
        console.error('API Error:', err);
      },
      complete: () => {
        console.log('Subscription completed.');
      }
    });
  }
}
