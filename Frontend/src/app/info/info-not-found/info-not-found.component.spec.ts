import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNotFoundComponent } from './info-not-found.component';

describe('InfoNotFoundComponent', () => {
  let component: InfoNotFoundComponent;
  let fixture: ComponentFixture<InfoNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
