import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingEditPageComponent } from './voting-edit-page.component';

describe('VotingEditPageComponent', () => {
  let component: VotingEditPageComponent;
  let fixture: ComponentFixture<VotingEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
