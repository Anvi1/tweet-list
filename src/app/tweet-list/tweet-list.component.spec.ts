import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TweetItemComponent } from '../tweet-item/tweet-item.component';
import { TweeterFeedDataType } from '../interface/tweeter-feed-data';
import { TweetListComponent } from './tweet-list.component';

describe('TweetListComponent', () => {
  let component: TweetListComponent;
  let fixture: ComponentFixture<TweetListComponent>;

  const mockTweetData: TweeterFeedDataType[] = [
    {
      tweetId: 15453454,
      tweetCreatedDate: '2018-06-19',
      userId: 123456,
      userName: 'Test User',
      userHandler: '@test',
      userProfileImg: 'testimageurl.jpg',
      userUrl: 'https://twitter.com/test',
      tweetText: 'This is a test tweet.',
      hasRetweet: false,
      reTweetedBy: 'Test User 2'
    },

    {
      tweetId: 25453454,
      tweetCreatedDate: '2019-06-19',
      userId: 1234567,
      userName: 'Test User2',
      userHandler: '@test2',
      userProfileImg: 'testimageurl22.jpg',
      userUrl: 'https://twitter.com/test2',
      tweetText: 'This is a test tweet2.',
      hasRetweet: false,
      reTweetedBy: undefined
    },
    
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, TweetListComponent, TweetItemComponent],
    });
    fixture = TestBed.createComponent(TweetListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display tweet items', () => {
    component.tweetData = mockTweetData;
    fixture.detectChanges();

    const tweetItemElements = fixture.nativeElement.querySelectorAll('.tweet-item');

    expect(tweetItemElements.length).toBe(0);
  });
});
