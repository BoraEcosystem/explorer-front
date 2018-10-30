import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpblockComponent } from './bpblock.component';

describe('BpblockComponent', () => {
  let component: BpblockComponent;
  let fixture: ComponentFixture<BpblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
