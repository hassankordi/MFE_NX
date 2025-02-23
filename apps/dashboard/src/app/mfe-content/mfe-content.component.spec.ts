import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MfeContentComponent } from './mfe-content.component';

describe('MfeContentComponent', () => {
  let component: MfeContentComponent;
  let fixture: ComponentFixture<MfeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MfeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
