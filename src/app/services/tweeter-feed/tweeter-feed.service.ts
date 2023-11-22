import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { TweeterFeedApiService } from '../tweeter-feed-api/tweeter-feed-api.service';
import { TweeterFeedDataType } from '../../interface/tweeter-feed-data';

@Injectable({
  providedIn: 'root',
})
export class TweeterFeedService {

  constructor( private apiService: TweeterFeedApiService) { }

  getMappedData(): Observable<TweeterFeedDataType[]> {
    return this.apiService.fetchData().pipe(
      map((response: any) => this.processTweeterFeedResponseData(response)),
      catchError((error) => {
        console.error('Service level error:', error);
        return throwError(() => 'Simulated error');
      })
    );
  }

  processTweeterFeedResponseData(responseData: any): TweeterFeedDataType[] {
    const processedData: TweeterFeedDataType[] = [];

    responseData?.forEach((item: any) => {
      let isReTweet = item.hasOwnProperty('retweeted_status');
      let reTweetItem = item?.retweeted_status;
      if(isReTweet && reTweetItem) {
        let isRetweetedBy = item.user.name;
        processedData.push(this.mapData(reTweetItem, isRetweetedBy)); 
      }
      else {
        processedData.push(this.mapData(item));
      }
    });
    return processedData;
  }

  mapData(item: any, isRetweetedBy: string = '') : TweeterFeedDataType {
    const tweetItem: TweeterFeedDataType = {
      tweetId: item.id,
      tweetCreatedDate: item.created_at,
      userId: item.user.id,
      userName: item.user.name,
      userHandler: `@${item.user.screen_name}`,
      userProfileImg: item.user.profile_image_url,
      userUrl: `https://twitter.com/${item.user.screen_name}`,
      tweetText: item.text,
      hasRetweet: item.hasOwnProperty('retweeted_status'),
      reTweetedBy: isRetweetedBy ? isRetweetedBy : undefined,
    };
    return tweetItem;
  }

    
}
