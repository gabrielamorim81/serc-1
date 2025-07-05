import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventogramaComponent } from './eventograma';

describe('Eventograma', () => {
  let component: EventogramaComponent;
  let fixture: ComponentFixture<EventogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventogramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
