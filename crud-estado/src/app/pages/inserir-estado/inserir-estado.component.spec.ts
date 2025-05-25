import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirEstadoComponent } from './inserir-estado.component';

describe('InserirEstadoComponent', () => {
  let component: InserirEstadoComponent;
  let fixture: ComponentFixture<InserirEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
