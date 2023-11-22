import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetFilterComponent } from '../tweet-filter/tweet-filter.component';
import { TweetListComponent } from '../tweet-list/tweet-list.component';
import { TweeterFeedService } from '../services/tweeter-feed/tweeter-feed.service';
import { Subscription } from 'rxjs';
import { TweeterFeedDataType } from '../interface/tweeter-feed-data';
import { TweetFilterService } from '../services/tweet-filter/tweetfilter.service';
import { getPaginationArray, updateUserNameFilteredData } from '../utils/tweet-feed-utils';

@Component({
  selector: 'tweeter-feed',
  standalone: true,
  imports: [CommonModule, TweetFilterComponent, TweetListComponent],
  templateUrl: './tweeter-feed.component.html',
  styleUrl: './tweeter-feed.component.scss'
})
export class TweeterFeedComponent {

  getTweeterFeedDataSubscription: Subscription = new Subscription;
  public originalTweetData!: TweeterFeedDataType[];
  public tweetData!: TweeterFeedDataType[];
  public displayData!: TweeterFeedDataType[];
  public displayError: boolean = false;

  currentPage: number = 1; // Current page
  postsPerPage: number = 6; // Number of posts per page
  paginationArray!: number[];

  constructor(private tweeterFeedService: TweeterFeedService, private tweetFilterService: TweetFilterService) {
  }

  setDefaultPaginationValues() {
    this.postsPerPage = 6;
    this.currentPage = 1;
  }

  updateAllFilters() {
    this.updateFilteredTweets();
    this.tweetData = updateUserNameFilteredData(this.tweetFilterService.getFilterValue(), this.tweetFilterService.getSelectedFilter(), this.originalTweetData);
    this.updateSelectFilteredData(this.tweetFilterService.getFilterValue(), this.tweetFilterService.getSelectedFilter());
  }

  ngOnInit() {
      /*** Fetching tweeter feed data during component initialization*/
      this.getTweeterFeedData();

      // Subscribe to changes in filter criteria from the TweetFilterService
        this.tweetFilterService.filterValue$.subscribe((filterValue) => {
          // Update filtered data based on the new filter criteria
          this.tweetData = updateUserNameFilteredData(filterValue, this.tweetFilterService.getSelectedFilter(), this.originalTweetData);
          this.currentPage = 1;
          this.updateFilteredTweets(); // Reapply filters and pagination
          this.paginationArray = getPaginationArray(this.tweetData, this.postsPerPage);
        });
    
        this.tweetFilterService.selectedFilter$.subscribe((selectedFilter) => {
          // Update filtered data based on the new selected filter
          this.updateSelectFilteredData(this.tweetFilterService.getFilterValue(), selectedFilter);
          this.currentPage = 1;
          this.updateFilteredTweets(); // Reapply filters and pagination
          this.paginationArray = getPaginationArray(this.tweetData, this.postsPerPage);
        });
    
  }

  getTweeterFeedData() {
    this.getTweeterFeedDataSubscription = this.tweeterFeedService.getMappedData()
    .subscribe(
        mappedData => {
          this.originalTweetData = [...mappedData];
          this.tweetData = [...mappedData];
          this.displayData = [...mappedData]
          this.displayError = false;
          this.setDefaultPaginationValues();
          this.paginationArray = getPaginationArray(this.originalTweetData, this.postsPerPage);
          this.updateFilteredTweets();
        },
        (error) => {
            console.error('Component level error:', error);
            this.displayError = true;
          },
          () => {
          console.log('Subscription completed.'); // Log when the subscription is completed.
        }
      );
  }

  updateSelectFilteredData(filterValue:string, selectedFilter: string) {
    // Clone the original tweet data to avoid modifying the source data
    if(this.tweetData){
      let filteredData = [...this.tweetData];  
  
    //Apply filtering based on the selectedFilter
    if (selectedFilter === 'retweeted') {
      filteredData = filteredData.filter((tweet) => tweet.reTweetedBy);
      this.tweetData = filteredData;
    }
    else{
      this.tweetData = updateUserNameFilteredData(filterValue, selectedFilter, this.originalTweetData);
    }
    }
    
  }

  // Add a method to change the posts per page
  onPostsPerPageChange(value: any) {
  const selectedValue = value;

  // Ensure that the selectedValue is a number
  const postsPerPage = parseInt(selectedValue, 10); // Parse the value as an integer

  // Check if postsPerPage is a valid number (not NaN)
  if (!isNaN(postsPerPage)) {
    // Update the postsPerPage value and re-calculate the current page
    this.postsPerPage = postsPerPage;
    this.currentPage = 1; // Reset to the first page when the posts per page changes
  }
  else{
    this.setDefaultPaginationValues();
  }
  this.updateFilteredTweets(); // Reapply filters and pagination
  this.paginationArray = getPaginationArray(this.tweetData, this.postsPerPage);
  }

  // Add a method to update the filtered tweets based on the current page and posts per page
  updateFilteredTweets() {
    let dataToDisplay = [...this.tweetData];
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    this.displayData = dataToDisplay?.slice(startIndex, endIndex);
  }

  // Add a method to change the current page
  onPageChange(page: any) {
    this.currentPage = page;
    this.updateAllFilters();
  }

 ngOnDestroy(): void {
  // Unsubscribe from the data subscription
    if (this.getTweeterFeedDataSubscription) {
      this.getTweeterFeedDataSubscription.unsubscribe();
    }
 }

}
