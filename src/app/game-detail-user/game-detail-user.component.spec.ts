import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailUserComponent } from './game-detail-user.component';

describe('GameDetailUserComponent', () => {
  let component: GameDetailUserComponent;
  let fixture: ComponentFixture<GameDetailUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetailUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
