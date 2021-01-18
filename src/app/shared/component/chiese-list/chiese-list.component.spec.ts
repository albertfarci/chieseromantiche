import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChieseListComponent } from './chiese-list.component';

describe('ChieseListComponent', () => {
  let component: ChieseListComponent;
  let fixture: ComponentFixture<ChieseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChieseListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChieseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
