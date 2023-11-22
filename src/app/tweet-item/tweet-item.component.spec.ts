import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TweeterFeedDataType } from '../interface/tweeter-feed-data';
import { TweetItemComponent } from './tweet-item.component';

describe('TweetItemComponent', () => {
  let component: TweetItemComponent;
  let fixture: ComponentFixture<TweetItemComponent>;

  const tweetData: TweeterFeedDataType = {
    tweetId: 15453454,
    tweetCreatedDate: '2018-06-19',
    userId: 123456,
    userName: 'Test User',
    userHandler: '@test',
    userProfileImg: 'testimageurl.jpg',
    userUrl: 'https://twitter.com/test',
    tweetText: 'This is a test tweet.',
    hasRetweet: false,
    reTweetedBy: 'Test User 2' || undefined,
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TweetItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetItemComponent);
    component = fixture.componentInstance;
    component.tweet = tweetData; // Set the tweet data
    fixture.detectChanges(); // Trigger change detection
  });

  it('should display tweet data', () => {
    const tweetElement: HTMLElement = fixture.nativeElement;
    
    // Make assertions on the rendered content
    expect(tweetElement.textContent).toContain(tweetData.userName);
    expect(tweetElement.textContent).toContain(tweetData.userHandler);
    // Add more assertions as needed for other properties
  });
});
