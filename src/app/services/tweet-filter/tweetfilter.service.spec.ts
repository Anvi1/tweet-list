import { TestBed, async } from '@angular/core/testing';
import { TweetFilterService } from './tweetfilter.service';

describe('TweetFilterService', () => {
  let service: TweetFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update input filter', () => {
    const newFilterValue = 'newFilterValue';
    service.updateInputFilter(newFilterValue);
    expect(service.getFilterValue()).toEqual(newFilterValue);
  });

  it('should update select filter', () => {
    const newSelectedFilter = 'newSelectedFilter';
    service.updateSelectFilter(newSelectedFilter);
    expect(service.getSelectedFilter()).toEqual(newSelectedFilter);
  });

  it('should have default filter values', () => {
    expect(service.getFilterValue()).toEqual('');
    expect(service.getSelectedFilter()).toEqual('all');
  });

  it('should observe filterValue changes', async () => {
    const newFilterValue = '';
    await new Promise<void>((resolve) => {
      service.filterValue$.subscribe((value) => {
        expect(value).toEqual(newFilterValue);
        resolve();
      });
      service.updateInputFilter(newFilterValue);
    });
  });

  it('should observe selectedFilter changes', async () => {
    const newSelectedFilter = 'all';
    await new Promise<void>((resolve) => {
      service.selectedFilter$.subscribe((value) => {
        expect(value).toEqual(newSelectedFilter);
        resolve();
      });
      service.updateSelectFilter(newSelectedFilter);
    });
  });
});
