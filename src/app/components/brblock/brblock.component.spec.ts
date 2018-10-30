import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrblockComponent } from './brblock.component';

describe('BrblockComponent', () => {
  let component: BrblockComponent;
  let fixture: ComponentFixture<BrblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
