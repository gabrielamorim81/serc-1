import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchinsumos } from './searchinsumos';

describe('Searchinsumos', () => {
  let component: Searchinsumos;
  let fixture: ComponentFixture<Searchinsumos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searchinsumos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searchinsumos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
