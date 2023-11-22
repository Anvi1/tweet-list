import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetItemComponent } from '../tweet-item/tweet-item.component';
import { TweeterFeedDataType } from '../interface/tweeter-feed-data';

@Component({
  selector: 'tweet-list',
  standalone: true,
  imports: [CommonModule, TweetItemComponent],
  templateUrl: './tweet-list.component.html',
  styleUrl: './tweet-list.component.scss'
})
export class TweetListComponent {
  @Input() tweetData: TweeterFeedDataType[] = [];
}
