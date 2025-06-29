import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchcompo } from './searchcompo';

describe('Searchcompo', () => {
  let component: Searchcompo;
  let fixture: ComponentFixture<Searchcompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searchcompo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searchcompo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
