// utils that can be used accross the application

import { TweeterFeedDataType } from "../interface/tweeter-feed-data";

export function getArrayForPagination(currentPage: number, totalPages: number): (number | string)[] {
  var current = currentPage,
      last = totalPages,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

  for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || i >= left && i < right) {
          range.push(i);
      }
  }

  for (let i of range) {
      if (l) {
          if (i - l === 2) {
              rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
              rangeWithDots.push('...');
          }
      }
      rangeWithDots.push(i);
      l = i;
  }

  return rangeWithDots;
}

export function getPaginationArray( originalTweetData: TweeterFeedDataType[], postsPerPage: number): number[] {
  // Calculate the total number of pages based on the total data and postsPerPage
  const totalData = originalTweetData.length; // Total number of data items
  const totalPages = Math.ceil(totalData / postsPerPage);

  // Create an array of page numbers from 1 to totalPages
  const paginationArray: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationArray.push(i);
  }
  
  return paginationArray;
}

export function updateUserNameFilteredData(filterValue: string, selectedFilter: string, displayData: TweeterFeedDataType[]) : TweeterFeedDataType[] {
  // Clone the original tweet data to avoid modifying the source data
  if(displayData && displayData.length > 0){
    let filteredData = [...displayData];

    // Filter by user name or user handler based on the filterValue
    if (filterValue.trim() !== '') {
      const searchTerm = filterValue.toLowerCase();
  
      filteredData = filteredData.filter((tweet) => {
        const userName = tweet.userName.toLowerCase();
        const userHandler = tweet.userHandler.toLowerCase();
  
        return userName.includes(searchTerm) || userHandler.includes(searchTerm);
      });
    }
  
    //Apply additional filtering based on the selectedFilter
    if (selectedFilter === 'retweeted') {
      filteredData = filteredData.filter((tweet) => tweet.reTweetedBy);
    }
  
    // Update this.tweetData with the filtered results
    return filteredData;
  }
  return [];
}