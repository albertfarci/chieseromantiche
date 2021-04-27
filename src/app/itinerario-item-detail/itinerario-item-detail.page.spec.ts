import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItinerarioItemDetailPage } from './itinerario-item-detail.page';

describe('ItinerarioItemDetailPage', () => {
  let component: ItinerarioItemDetailPage;
  let fixture: ComponentFixture<ItinerarioItemDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerarioItemDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItinerarioItemDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
