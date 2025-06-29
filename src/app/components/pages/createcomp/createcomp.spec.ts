import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createcomp } from './createcomp';

describe('Createcomp', () => {
  let component: Createcomp;
  let fixture: ComponentFixture<Createcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
