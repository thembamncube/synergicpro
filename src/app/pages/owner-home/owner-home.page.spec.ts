import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwnerHomePage } from './owner-home.page';

describe('OwnerHomePage', () => {
  let component: OwnerHomePage;
  let fixture: ComponentFixture<OwnerHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
