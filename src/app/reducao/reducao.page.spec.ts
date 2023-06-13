import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReducaoPage } from './reducao.page';

describe('ReducaoPage', () => {
  let component: ReducaoPage;
  let fixture: ComponentFixture<ReducaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
