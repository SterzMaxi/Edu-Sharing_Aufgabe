import { Component, Input, OnInit } from '@angular/core';
import { NavigationStateService } from '../_services/navigation-state.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reference-content',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './reference-content.component.html',
  styleUrls: ['./reference-content.component.scss'],
})
export class ReferenceContentComponent implements OnInit {
  cardId!: number;
  childId!: number;

  name!: string;
  previewUrl!: any;
  downloadLink!: string;
  createdFirstName!: string;
  createdLastName!: string;
  createdAt!: string;
  mimeType!: string;
  size!: number;
  referenceId!: string;
  preview!: any;

  constructor(private route: ActivatedRoute, private navigationStateService: NavigationStateService) {}

  get formattedCreatedAt(): string {
    const date = new Date(this.createdAt);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`; // DD-MM-YYYY
  }

  get formattedSize(): string {
    if (this.size === 0) return '0 Bytes';

    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(this.size) / Math.log(1024));
    const sizeInUnit = this.size / Math.pow(1024, i);

    return `${sizeInUnit.toFixed(2)} ${units[i]}`;
  }

  downloadContent(): void {
    if (this.previewUrl) {
      const link = document.createElement('a');
      link.href = this.downloadLink;
      link.download = this.name || 'download';
      link.click();
    }
  }

  ngOnInit(): void {
    const stateData = this.navigationStateService.getStateData();
    if (stateData) {
      this.referenceId = stateData.referenceId;
      this.name = stateData.name;
      this.previewUrl = stateData.previewUrl;
      this.preview = stateData.preview;
      this.downloadLink = stateData.downloadLink;
      this.createdFirstName = stateData.createdFirstName;
      this.createdLastName = stateData.createdLastName;
      this.createdAt = stateData.createdAt;
      this.mimeType = stateData.mimeType;
      this.size = stateData.size;
    } else {
      console.warn('No state data available');
    }

    this.cardId = +this.route.snapshot.paramMap.get('id')!;
    this.childId = +this.route.snapshot.paramMap.get('childId')!;
  }
}
