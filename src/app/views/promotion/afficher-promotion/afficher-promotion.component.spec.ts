import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPromotionComponent } from './afficher-promotion.component';

describe('AfficherPromotionComponent', () => {
  let component: AfficherPromotionComponent;
  let fixture: ComponentFixture<AfficherPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
