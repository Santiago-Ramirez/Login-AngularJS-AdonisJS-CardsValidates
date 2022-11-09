import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNoValidaComponent } from './ruta-no-valida.component';

describe('RutaNoValidaComponent', () => {
  let component: RutaNoValidaComponent;
  let fixture: ComponentFixture<RutaNoValidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNoValidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaNoValidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
