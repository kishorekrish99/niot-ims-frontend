import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanmodeComponent } from './scanmode.component';

describe('ScanmodeComponent', () => {
  let component: ScanmodeComponent;
  let fixture: ComponentFixture<ScanmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanmodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
