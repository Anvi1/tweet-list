import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TweetFilterComponent } from './tweet-filter.component';
import { TweetFilterService } from '../services/tweet-filter/tweetfilter.service';
import { getArrayForPagination } from '../utils/tweet-feed-utils';

describe('TweetFilterComponent', () => {
  let component: TweetFilterComponent;
  let fixture: ComponentFixture<TweetFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetFilterService],
      imports: [FormsModule, TweetFilterComponent],
    });
    fixture = TestBed.createComponent(TweetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.filterValue).toBe('');
    expect(component.selectedFilter).toBe('all');
  });

  it('should update filter value on input change', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.filterValue).toBe('test');
  });

  it('should emit posts per page change', () => {
    const postsPerPage = 10;
    spyOn(component.postsPerPageChange, 'emit');
    component.onNumberOfPostsInputChange({ target: { value: String(postsPerPage) } } as unknown as Event);
    expect(component.postsPerPageChange.emit).toHaveBeenCalledWith(postsPerPage);
  });

  it('should not emit posts per page change if input is not a number', () => {
    spyOn(component.postsPerPageChange, 'emit');
    component.onNumberOfPostsInputChange({ target: { value: 'notANumber' } } as unknown as Event);
    expect(component.postsPerPageChange.emit).not.toHaveBeenCalled();
  });

  it('should update selected filter on radio button change', () => {
    const radioButton = fixture.nativeElement.querySelector('input[type="radio"]');
    radioButton.checked = true;
    radioButton.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.selectedFilter).toBe('all');
  });

  it('should emit page change', () => {
    const pageNumber = 2;
    spyOn(component.pageChange, 'emit');
    component.onPageChange(pageNumber);
    expect(component.pageChange.emit).toHaveBeenCalledWith(pageNumber);
  });

  it('should apply filter with debounce', () => {
    spyOn(component, 'applyFilterWithDebounce').and.callThrough();
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.applyFilterWithDebounce).toHaveBeenCalled();
  });

  it('should emit posts per page change on method call', () => {
    const postsPerPage = 10;
    spyOn(component.postsPerPageChange, 'emit');
    component.onPostsPerPageChange();
    expect(component.postsPerPageChange.emit).toHaveBeenCalledWith(component.postsPerPage);
  });

  it('should emit page change on method call', () => {
    const pageNumber = 2;
    spyOn(component.pageChange, 'emit');
    component.onPageChange(pageNumber);
    expect(component.pageChange.emit).toHaveBeenCalledWith(pageNumber);
  });

  it('should generate pagination array', () => {
    const currentPage = 1;
    const totalPages = 5;
    const expectedArray = getArrayForPagination(currentPage, totalPages);
    const result = component.pagination(currentPage, totalPages);
    expect(result).toEqual(expectedArray);
  });
});

