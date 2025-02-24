import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NxMonorepoComponent } from './nx-monorepo.component';

describe('NxMonorepoComponent', () => {
  let component: NxMonorepoComponent;
  let fixture: ComponentFixture<NxMonorepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxMonorepoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxMonorepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
