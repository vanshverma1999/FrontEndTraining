import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShowerComponent } from './data-shower.component';

describe('DataShowerComponent', () => {
  let component: DataShowerComponent;
  let fixture: ComponentFixture<DataShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataShowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
