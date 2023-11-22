import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TweeterFeedComponent } from './tweeter-feed/tweeter-feed.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, TweeterFeedComponent], 
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });


  it('should render the TweeterFeedComponent in the template', () => {
    const compiled = fixture.nativeElement;
    const tweeterFeedComponent = compiled.querySelector('tweeter-feed');
    expect(tweeterFeedComponent).toBeTruthy();
  });
});
