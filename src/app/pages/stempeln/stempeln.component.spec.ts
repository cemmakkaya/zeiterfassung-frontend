import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StempelnComponent } from './stempeln.component';
import { By } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

describe('StempelnComponent', () => {
  let component: StempelnComponent;
  let fixture: ComponentFixture<StempelnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StempelnComponent, MatButtonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StempelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call stempeln() and update zeiten', () => {
    const previousIndex = component.stempelIndex;
    component.stempeln();
    expect(component.zeiten[previousIndex]).not.toBeNull();
    expect(component.stempelIndex).toBe(previousIndex + 1);
  });

  it('should update zeiten array on button click', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();

    expect(component.zeiten[0]).not.toBeNull();
  });
});
