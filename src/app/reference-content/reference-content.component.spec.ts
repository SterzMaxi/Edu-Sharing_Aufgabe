import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceContentComponent } from './reference-content.component';

describe('ReferenceContentComponent', () => {
  let component: ReferenceContentComponent;
  let fixture: ComponentFixture<ReferenceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
