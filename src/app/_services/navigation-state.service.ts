// navigation-state.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationStateService {
  private stateData: any;

  constructor() {
    const storedState = localStorage.getItem('stateData');
    if (storedState) {
      this.stateData = JSON.parse(storedState);
    }
  }

  setStateData(data: any): void {
    localStorage.setItem('stateData', JSON.stringify(data));
    this.stateData = data;
  }

  getStateData(): any {
    if (!this.stateData) {
      const storedState = localStorage.getItem('stateData');
      if (storedState) {
        this.stateData = JSON.parse(storedState);
      }
    }
    return this.stateData;
  }

  clearStateData(): void {
    localStorage.removeItem('stateData');
    this.stateData = null;
  }
}

