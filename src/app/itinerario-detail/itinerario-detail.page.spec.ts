import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItinerarioDetailPage } from './itinerario-detail.page';

describe('ItinerarioDetailPage', () => {
  let component: ItinerarioDetailPage;
  let fixture: ComponentFixture<ItinerarioDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerarioDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItinerarioDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
