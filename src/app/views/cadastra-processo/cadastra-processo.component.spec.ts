import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraProcessoComponent } from './cadastra-processo.component';

describe('CadastraProcessoComponent', () => {
  let component: CadastraProcessoComponent;
  let fixture: ComponentFixture<CadastraProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraProcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
