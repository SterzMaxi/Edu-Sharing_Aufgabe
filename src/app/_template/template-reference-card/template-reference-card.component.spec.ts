import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceCardComponent } from './template-reference-card.component';

describe('TemplateReferenceCardComponent', () => {
  let component: TemplateReferenceCardComponent;
  let fixture: ComponentFixture<TemplateReferenceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateReferenceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReferenceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
