export interface TweeterFeedDataType {
    tweetId: number,
    tweetCreatedDate: string;
    userId: number;
    userName: string;
    userHandler: string;
    userProfileImg: string;
    userUrl: string;
    tweetText: string;
    hasRetweet: boolean;
    reTweetedBy?: string;
}


