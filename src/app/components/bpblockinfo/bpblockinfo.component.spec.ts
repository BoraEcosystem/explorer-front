import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpblockinfoComponent } from './bpblockinfo.component';

describe('BpblockinfoComponent', () => {
  let component: BpblockinfoComponent;
  let fixture: ComponentFixture<BpblockinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpblockinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpblockinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
