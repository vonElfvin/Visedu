import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGameDownloadComponent } from './info-game-download.component';

describe('InfoGameDownloadComponent', () => {
  let component: InfoGameDownloadComponent;
  let fixture: ComponentFixture<InfoGameDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGameDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGameDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
