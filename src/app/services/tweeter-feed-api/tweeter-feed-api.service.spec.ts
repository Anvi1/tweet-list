import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TweeterFeedApiService } from './tweeter-feed-api.service';

describe('TweeterFeedApiService', () => {
  let service: TweeterFeedApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TweeterFeedApiService],
    });
    service = TestBed.inject(TweeterFeedApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data from the API', () => {
    const mockResponse = [
      {
        "created_at": "Sun Oct 21 21:02:05 +0000 2018",
        "id": 1054115630109130752,
        "id_str": "1054115630109130752",
        "text": "Have trouble sleeping? 😶\n\nHere's a library of tailored programs to improve your sleep 💤 https://t.co/9kGyxtmzWa https://t.co/ulnP9FkpLS",
        "truncated": false,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [],
            "urls": [
                {
                    "url": "https://t.co/9kGyxtmzWa",
                    "expanded_url": "https://www.producthunt.com/posts/dreem-coach",
                    "display_url": "producthunt.com/posts/dreem-co…",
                    "indices": [
                        88,
                        111
                    ]
                }
            ],
            "media": [
                {
                    "id": 1054115617706532864,
                    "id_str": "1054115617706532864",
                    "indices": [
                        112,
                        135
                    ],
                    "media_url": "http://pbs.twimg.com/tweet_video_thumb/DqD4kcGW4AAR5p3.jpg",
                    "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/DqD4kcGW4AAR5p3.jpg",
                    "url": "https://t.co/ulnP9FkpLS",
                    "display_url": "pic.twitter.com/ulnP9FkpLS",
                    "expanded_url": "https://twitter.com/ProductHunt/status/1054115630109130752/photo/1",
                    "type": "photo",
                    "sizes": {
                        "medium": {
                            "w": 800,
                            "h": 450,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 800,
                            "h": 450,
                            "resize": "fit"
                        }
                    }
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1054115617706532864,
                    "id_str": "1054115617706532864",
                    "indices": [
                        112,
                        135
                    ],
                    "media_url": "http://pbs.twimg.com/tweet_video_thumb/DqD4kcGW4AAR5p3.jpg",
                    "media_url_https": "https://pbs.twimg.com/tweet_video_thumb/DqD4kcGW4AAR5p3.jpg",
                    "url": "https://t.co/ulnP9FkpLS",
                    "display_url": "pic.twitter.com/ulnP9FkpLS",
                    "expanded_url": "https://twitter.com/ProductHunt/status/1054115630109130752/photo/1",
                    "type": "animated_gif",
                    "sizes": {
                        "medium": {
                            "w": 800,
                            "h": 450,
                            "resize": "fit"
                        },
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        },
                        "large": {
                            "w": 800,
                            "h": 450,
                            "resize": "fit"
                        }
                    },
                    "video_info": {
                        "aspect_ratio": [
                            16,
                            9
                        ],
                        "variants": [
                            {
                                "bitrate": 0,
                                "content_type": "video/mp4",
                                "url": "https://video.twimg.com/tweet_video/DqD4kcGW4AAR5p3.mp4"
                            }
                        ]
                    }
                }
            ]
        },
        "source": "<a href=\"https://buffer.com\" rel=\"nofollow\">Buffer</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 2208027565,
            "id_str": "2208027565",
            "name": "Product Haunt 👻",
            "screen_name": "ProductHunt",
            "location": "producthunt.com",
            "description": "The place to discover your next favorite thing. @ProductHuntLIVE 💬 @AskProductHunt 🤔 Emoji spirit of @AngelList ✌️",
            "url": "https://t.co/n3AyRJAeYv",
            "entities": {
                "url": {
                    "urls": [
                        {
                            "url": "https://t.co/n3AyRJAeYv",
                            "expanded_url": "http://producthunt.com/newsletter",
                            "display_url": "producthunt.com/newsletter",
                            "indices": [
                                0,
                                23
                            ]
                        }
                    ]
                },
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 369378,
            "friends_count": 28,
            "listed_count": 5442,
            "created_at": "Fri Nov 22 00:06:06 +0000 2013",
            "favourites_count": 74497,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": true,
            "statuses_count": 110277,
            "lang": "en",
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "FAFAFA",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1050833661552144384/hpSvrkLC_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1050833661552144384/hpSvrkLC_normal.jpg",
            "profile_banner_url": "https://pbs.twimg.com/profile_banners/2208027565/1512835973",
            "profile_link_color": "DA552F",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": false,
            "has_extended_profile": false,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 1,
        "favorite_count": 19,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    },
    {
        "created_at": "Sun Oct 21 20:15:32 +0000 2018",
        "id": 1054103917716365312,
        "id_str": "1054103917716365312",
        "text": "RT @Ajaychairman: In @SPICinemas #Palazzo\nFor #ChekkaChivanthaVaanam #CCV Eve show https://t.co/Q0foSTNFT9",
        "truncated": false,
        "entities": {
            "hashtags": [
                {
                    "text": "Palazzo",
                    "indices": [
                        33,
                        41
                    ]
                },
                {
                    "text": "ChekkaChivanthaVaanam",
                    "indices": [
                        46,
                        68
                    ]
                },
                {
                    "text": "CCV",
                    "indices": [
                        69,
                        73
                    ]
                }
            ],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "Ajaychairman",
                    "name": "Ajay Srinivasan",
                    "id": 305215401,
                    "id_str": "305215401",
                    "indices": [
                        3,
                        16
                    ]
                },
                {
                    "screen_name": "SPICinemas",
                    "name": "SPI Cinemas",
                    "id": 919079586,
                    "id_str": "919079586",
                    "indices": [
                        21,
                        32
                    ]
                }
            ],
            "urls": [],
            "media": [
                {
                    "id": 1053996321726582784,
                    "id_str": "1053996321726582784",
                    "indices": [
                        83,
                        106
                    ],
                    "media_url": "http://pbs.twimg.com/media/DqCMEf8U0AA9OGs.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/DqCMEf8U0AA9OGs.jpg",
                    "url": "https://t.co/Q0foSTNFT9",
                    "display_url": "pic.twitter.com/Q0foSTNFT9",
                    "expanded_url": "https://twitter.com/Ajaychairman/status/1053996339732729856/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1024,
                            "h": 576,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1024,
                            "h": 576,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        }
                    },
                    "source_status_id": 1053996339732729856,
                    "source_status_id_str": "1053996339732729856",
                    "source_user_id": 305215401,
                    "source_user_id_str": "305215401"
                }
            ]
        },
        "extended_entities": {
            "media": [
                {
                    "id": 1053996321726582784,
                    "id_str": "1053996321726582784",
                    "indices": [
                        83,
                        106
                    ],
                    "media_url": "http://pbs.twimg.com/media/DqCMEf8U0AA9OGs.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/DqCMEf8U0AA9OGs.jpg",
                    "url": "https://t.co/Q0foSTNFT9",
                    "display_url": "pic.twitter.com/Q0foSTNFT9",
                    "expanded_url": "https://twitter.com/Ajaychairman/status/1053996339732729856/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                        },
                        "large": {
                            "w": 1024,
                            "h": 576,
                            "resize": "fit"
                        },
                        "medium": {
                            "w": 1024,
                            "h": 576,
                            "resize": "fit"
                        },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                        }
                    },
                    "source_status_id": 1053996339732729856,
                    "source_status_id_str": "1053996339732729856",
                    "source_user_id": 305215401,
                    "source_user_id_str": "305215401"
                }
            ]
        },
        "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
            "id": 255486286,
            "id_str": "255486286",
            "name": "Deepu",
            "screen_name": "DEEPU_S_GIRI",
            "location": "Chennai, India",
            "description": "Spread Love..! Spread Peace..! #UniteForHumanity - #STR",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 11596,
            "friends_count": 302,
            "listed_count": 37,
            "created_at": "Mon Feb 21 13:26:38 +0000 2011",
            "favourites_count": 27340,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": true,
            "verified": false,
            "statuses_count": 39152,
            "lang": "en",
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "022330",
            "profile_background_image_url": "http://abs.twimg.com/images/themes/theme10/bg.gif",
            "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme10/bg.gif",
            "profile_background_tile": true,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1047000107919585280/9hJW1D5b_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1047000107919585280/9hJW1D5b_normal.jpg",
            "profile_link_color": "0084B4",
            "profile_sidebar_border_color": "FFFFFF",
            "profile_sidebar_fill_color": "C0DFEC",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": false,
            "default_profile_image": false,
            "following": true,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweeted_status": {
            "created_at": "Sun Oct 21 13:08:04 +0000 2018",
            "id": 1053996339732729856,
            "id_str": "1053996339732729856",
            "text": "In @SPICinemas #Palazzo\nFor #ChekkaChivanthaVaanam #CCV Eve show https://t.co/Q0foSTNFT9",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Palazzo",
                        "indices": [
                            15,
                            23
                        ]
                    },
                    {
                        "text": "ChekkaChivanthaVaanam",
                        "indices": [
                            28,
                            50
                        ]
                    },
                    {
                        "text": "CCV",
                        "indices": [
                            51,
                            55
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [
                    {
                        "screen_name": "SPICinemas",
                        "name": "SPI Cinemas",
                        "id": 919079586,
                        "id_str": "919079586",
                        "indices": [
                            3,
                            14
                        ]
                    }
                ],
                "urls": [],
                "media": [
                    {
                        "id": 1053996321726582784,
                        "id_str": "1053996321726582784",
                        "indices": [
                            65,
                            88
                        ],
                        "media_url": "http://pbs.twimg.com/media/DqCMEf8U0AA9OGs.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DqCMEf8U0AA9OGs.jpg",
                        "url": "https://t.co/Q0foSTNFT9",
                        "display_url": "pic.twitter.com/Q0foSTNFT9",
                        "expanded_url": "https://twitter.com/Ajaychairman/status/1053996339732729856/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 1024,
                                "h": 576,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1024,
                                "h": 576,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 1053996321726582784,
                        "id_str": "1053996321726582784",
                        "indices": [
                            65,
                            88
                        ],
                        "media_url": "http://pbs.twimg.com/media/DqCMEf8U0AA9OGs.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DqCMEf8U0AA9OGs.jpg",
                        "url": "https://t.co/Q0foSTNFT9",
                        "display_url": "pic.twitter.com/Q0foSTNFT9",
                        "expanded_url": "https://twitter.com/Ajaychairman/status/1053996339732729856/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 1024,
                                "h": 576,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1024,
                                "h": 576,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 305215401,
                "id_str": "305215401",
                "name": "Ajay Srinivasan",
                "screen_name": "Ajaychairman",
                "location": "Chennai, India",
                "description": "Movie critic, cinema tracker and blog writer. Travel aficionado and cricket enthusiast. And yeah, a finance & accounts professional!",
                "url": "https://t.co/XRq7Y4iD7d",
                "entities": {
                    "url": {
                        "urls": [
                            {
                                "url": "https://t.co/XRq7Y4iD7d",
                                "expanded_url": "https://ajaysrinivasanblog.wordpress.com/",
                                "display_url": "ajaysrinivasanblog.wordpress.com",
                                "indices": [
                                    0,
                                    23
                                ]
                            }
                        ]
                    },
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 10740,
                "friends_count": 255,
                "listed_count": 45,
                "created_at": "Wed May 25 20:56:12 +0000 2011",
                "favourites_count": 3710,
                "utc_offset": null,
                "time_zone": null,
                "geo_enabled": true,
                "verified": false,
                "statuses_count": 21239,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "C0DEED",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://pbs.twimg.com/profile_images/861640220185206784/BtcACWBW_normal.jpg",
                "profile_image_url_https": "https://pbs.twimg.com/profile_images/861640220185206784/BtcACWBW_normal.jpg",
                "profile_banner_url": "https://pbs.twimg.com/profile_banners/305215401/1504596051",
                "profile_link_color": "1DA1F2",
                "profile_sidebar_border_color": "C0DEED",
                "profile_sidebar_fill_color": "DDEEF6",
                "profile_text_color": "333333",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": true,
                "default_profile_image": false,
                "following": false,
                "follow_request_sent": false,
                "notifications": false,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 8,
            "favorite_count": 61,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "possibly_sensitive_appealable": false,
            "lang": "en"
        },
        "is_quote_status": false,
        "retweet_count": 8,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "possibly_sensitive_appealable": false,
        "lang": "en"
    }
    ];

    service.fetchData().subscribe((data: any) => {
      // Assert that the service properly fetched and returned the data.
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne('assets/data.json');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockResponse);
  });

  it('should handle a 404 error', () => {
    const errorMessage = 'Data not found';

    // Send a request that will result in a 404 error
    service.fetchData().subscribe(
      () => {
        // This should not be called in case of an error
        fail('Expected an error, but the observable was successful');
      },
      (error: any) => {
        // Assert that the error message matches the expected error message
        expect(error).toBe(errorMessage);
      }
    );

    // Mock a 404 error response
    const req = httpTestingController.expectOne('assets/data.json');
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });
  });

});

