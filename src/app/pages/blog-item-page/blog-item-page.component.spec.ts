import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemPageComponent } from './blog-item-page.component';

describe('BlogItemPageComponent', () => {
  let component: BlogItemPageComponent;
  let fixture: ComponentFixture<BlogItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogItemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
