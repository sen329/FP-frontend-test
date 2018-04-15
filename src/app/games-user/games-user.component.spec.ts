import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesUserComponent } from './games-user.component';

describe('GamesUserComponent', () => {
  let component: GamesUserComponent;
  let fixture: ComponentFixture<GamesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
