import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MatDividerModule } from '@angular/material/divider';
import { NavigationStateService } from '../_services/navigation-state.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule, CommonModule, BreadcrumbModule, MatDividerModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navigationStateService: NavigationStateService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = this.createBreadcrumbs();
      }
    });
  }

  createBreadcrumbs(): { label: string; url: string }[] {
    const breadcrumbs: { label: string; url: string }[] = [];
    let currentRoute: ActivatedRoute | null = this.activatedRoute.root;
    let url = '';

    while (currentRoute) {
      const routeData = currentRoute.snapshot.data['breadcrumb'];
      if (routeData) {
        url += '/' + currentRoute.snapshot.url.map(segment => segment.path).join('/');
        breadcrumbs.push({ label: routeData, url });
      }
      currentRoute = currentRoute.firstChild;
    }

    return breadcrumbs;
  }

  navigateTo(breadcrumb: { label: string; url: string }): void {
    const stateData = this.navigationStateService.getStateData();
    if (stateData) {
      this.router.navigateByUrl(breadcrumb.url, {
        state: { ...stateData },
      });
    } else {
      this.router.navigateByUrl(breadcrumb.url);
    }
  }
}
