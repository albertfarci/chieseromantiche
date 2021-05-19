import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgettoPage } from './progetto.page';

describe('ProgettoPage', () => {
  let component: ProgettoPage;
  let fixture: ComponentFixture<ProgettoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgettoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgettoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
