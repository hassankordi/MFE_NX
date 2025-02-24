import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuleFederationContentComponent } from './mf-content.component';

describe('ModuleFederationContentComponent', () => {
  let component: ModuleFederationContentComponent;
  let fixture: ComponentFixture<ModuleFederationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleFederationContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleFederationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
