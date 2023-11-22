import { getArrayForPagination, getPaginationArray, updateUserNameFilteredData } from './tweet-feed-utils';
import { TweeterFeedDataType } from '../interface/tweeter-feed-data';

describe('Utility Functions', () => {
  let originalTweetData: TweeterFeedDataType[];
  let postsPerPage: number;
  let displayData: TweeterFeedDataType[];

  beforeEach(() => {
    // Initialize test data
    originalTweetData = [
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
    postsPerPage = 5; // Example: Posts per page is set to 5
    displayData = [...originalTweetData];
  });

  it('should return an array for pagination with correct values', () => {
    const currentPage = 3;
    const totalPages = 5;
    const paginationArray = getArrayForPagination(currentPage, totalPages);

    expect(paginationArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an array of page numbers for pagination', () => {
    const paginationArray = getPaginationArray(originalTweetData, postsPerPage);

    expect(paginationArray).toEqual([1]); // Example: If there's only one page
  });

  it('should update user name filtered data based on filter criteria', () => {
    const filterValue = '@test2'; // Example: Filter by username
    const selectedFilter = 'retweeted'; // Example: All tweets
    const filteredData = updateUserNameFilteredData(filterValue, selectedFilter, displayData);
    
    // Expect filteredData to contain items that match the filter criteria
    expect(filteredData.length).toBe(0);
    filteredData.forEach((item) => {
      expect(item.userName.toLowerCase()).toContain(filterValue.toLowerCase());
    });
  });
});
