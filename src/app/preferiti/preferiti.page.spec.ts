import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreferitiPage } from './preferiti.page';

describe('PreferitiPage', () => {
  let component: PreferitiPage;
  let fixture: ComponentFixture<PreferitiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferitiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreferitiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
