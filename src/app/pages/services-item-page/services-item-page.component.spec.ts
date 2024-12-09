import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesItemPageComponent } from './services-item-page.component';

describe('ServicesItemPageComponent', () => {
  let component: ServicesItemPageComponent;
  let fixture: ComponentFixture<ServicesItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesItemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
