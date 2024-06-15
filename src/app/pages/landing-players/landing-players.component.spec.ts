import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPlayersComponent } from './landing-players.component';

describe('LandingPlayersComponent', () => {
  let component: LandingPlayersComponent;
  let fixture: ComponentFixture<LandingPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
