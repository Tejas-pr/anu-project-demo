import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfirstComponent } from './myfirst.component';

describe('MyfirstComponent', () => {
  let component: MyfirstComponent;
  let fixture: ComponentFixture<MyfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyfirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
