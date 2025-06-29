import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsumo } from './create-insumo';

describe('CreateInsumo', () => {
  let component: CreateInsumo;
  let fixture: ComponentFixture<CreateInsumo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInsumo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInsumo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
