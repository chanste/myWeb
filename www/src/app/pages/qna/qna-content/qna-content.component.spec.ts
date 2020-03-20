import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnaContentComponent } from './qna-content.component';

describe('QnaContentComponent', () => {
  let component: QnaContentComponent;
  let fixture: ComponentFixture<QnaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
