import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemPageComponent } from './portfolio-item-page.component';

describe('PortfolioItemPageComponent', () => {
  let component: PortfolioItemPageComponent;
  let fixture: ComponentFixture<PortfolioItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioItemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
