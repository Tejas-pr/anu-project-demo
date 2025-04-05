import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysecondComponent } from './mysecond.component';

describe('MysecondComponent', () => {
  let component: MysecondComponent;
  let fixture: ComponentFixture<MysecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
