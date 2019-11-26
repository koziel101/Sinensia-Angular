import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPizzaComponent } from './component-pizza.component';

describe('ComponentPizzaComponent', () => {
  let component: ComponentPizzaComponent;
  let fixture: ComponentFixture<ComponentPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
