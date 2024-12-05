import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceCardListComponent } from './reference-card-list.component';

describe('ReferenceCardListComponent', () => {
  let component: ReferenceCardListComponent;
  let fixture: ComponentFixture<ReferenceCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
