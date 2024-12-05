import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-reference-content',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './reference-content.component.html',
  styleUrl: './reference-content.component.scss'
})
export class ReferenceContentComponent {

  @Input() name!: string;
  //todo: real content, not just preview
  @Input() previewUrl!: any;
  @Input() downloadLink!: string;
  @Input() createdFirstName!: string;
  @Input() createdLastName!: string;

  downloadContent(): void {
    if (this.previewUrl) {
      const link = document.createElement('a');
      link.href = this.downloadLink;
      link.download = this.name || 'download';
      link.click();
    }
  }
}
