import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesComponent } from './features.component';

describe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of features', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.feature-card').length).toBe(component.features.length);
  });

  it('should display feature titles correctly', () => {
    const compiled = fixture.nativeElement;
    const featureTitles = compiled.querySelectorAll('.feature-title');
    featureTitles.forEach((title, index) => {
      expect(title.textContent).toContain(component.features[index].title);
    });
  });

  it('should display feature descriptions correctly', () => {
    const compiled = fixture.nativeElement;
    const featureDescriptions = compiled.querySelectorAll('.feature-description');
    featureDescriptions.forEach((description, index) => {
      expect(description.textContent).toContain(component.features[index].description);
    });
  });

  it('should display feature icons correctly', () => {
    const compiled = fixture.nativeElement;
    const featureIcons = compiled.querySelectorAll('.feature-icon');
    featureIcons.forEach((icon, index) => {
      expect(icon.src).toContain(component.features[index].icon);
    });
  });
});
