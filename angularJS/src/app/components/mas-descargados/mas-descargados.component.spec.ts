import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasDescargadosComponent } from './mas-descargados.component';

describe('MasDescargadosComponent', () => {
  let component: MasDescargadosComponent;
  let fixture: ComponentFixture<MasDescargadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasDescargadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasDescargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
