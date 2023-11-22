import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TweeterFeedService } from '../services/tweeter-feed/tweeter-feed.service';
import { TweetFilterService } from '../services/tweet-filter/tweetfilter.service';
import { TweeterFeedComponent } from './tweeter-feed.component';
import { TweetFilterComponent } from '../tweet-filter/tweet-filter.component';
import { TweetListComponent } from '../tweet-list/tweet-list.component';
import { getPaginationArray, updateUserNameFilteredData } from '../utils/tweet-feed-utils';
import { BehaviorSubject } from 'rxjs';
import { TweeterFeedDataType } from '../interface/tweeter-feed-data';

describe('TweeterFeedComponent', () => {
  let component: TweeterFeedComponent;
  let fixture: ComponentFixture<TweeterFeedComponent>;
  let tweeterFeedService: TweeterFeedService;
  let tweetFilterService: TweetFilterService;

  const mockTweeterFeedData: TweeterFeedDataType[] = [
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

  const mockTweetFilterValueSubject = new BehaviorSubject<string>('');
  const mockTweetSelectedFilterSubject = new BehaviorSubject<string>('all');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, TweeterFeedComponent, TweetFilterComponent, TweetListComponent],
      providers: [
        {
          provide: TweeterFeedService,
          useValue: {
            getMappedData: jasmine.createSpy('getMappedData').and.returnValue(mockTweeterFeedData),
          },
        },
        {
          provide: TweetFilterService,
          useValue: {
            filterValue$: mockTweetFilterValueSubject.asObservable(),
            selectedFilter$: mockTweetSelectedFilterSubject.asObservable(),
            getFilterValue: () => '',
            getSelectedFilter: () => 'all',
            updateInputFilter: () => {},
            updateSelectFilter: () => {},
          },
        },
      ],
    });

    fixture = TestBed.createComponent(TweeterFeedComponent);
    component = fixture.componentInstance;
    tweeterFeedService = TestBed.inject(TweeterFeedService);
    tweetFilterService = TestBed.inject(TweetFilterService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.displayError).toBeFalse();
    expect(component.currentPage).toBe(1);
    expect(component.postsPerPage).toBe(6);
  });

  it('should handle page change and update filters', () => {
    spyOn(component, 'updateAllFilters').and.callThrough();
    component.onPageChange(2); // Example: Change to page 2
    expect(component.updateAllFilters).toHaveBeenCalled();
    expect(component.currentPage).toBe(2);
  });

  it('should unsubscribe from data subscription on ngOnDestroy', () => {
    spyOn(component.getTweeterFeedDataSubscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.getTweeterFeedDataSubscription.unsubscribe).toHaveBeenCalled();
  });
});
