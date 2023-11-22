import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweeterFeedDataType } from '../interface/tweeter-feed-data';

@Component({
  selector: 'tweet-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tweet-item.component.html',
  styleUrl: './tweet-item.component.scss'
})
export class TweetItemComponent {
  @Input() tweet!: TweeterFeedDataType;
}
