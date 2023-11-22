import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetFilterService } from '../services/tweet-filter/tweetfilter.service';
import { FormsModule } from '@angular/forms';
import { getArrayForPagination } from '../utils/tweet-feed-utils';

@Component({
  selector: 'tweet-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tweet-filter.component.html',
  styleUrl: './tweet-filter.component.scss'
})
export class TweetFilterComponent {

  filterValue: string = '';
  selectedFilter: string = 'all';


  @Output() postsPerPageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() paginationArray: number[] = [];
  @Input() postsPerPage!: number;
  @Input() currentPage!: number;


  constructor(private tweetFilterService: TweetFilterService) { }

  ngOnInit(): void {
    // Initialize the filter criteria or get it from the service if needed.
    this.filterValue = this.tweetFilterService.getFilterValue();
    this.selectedFilter = this.tweetFilterService.getSelectedFilter();
  }

  onFilterInputChange(event: Event) {
    // Handle input change event and update filter criteria.
    this.filterValue = (event.target as HTMLInputElement).value;
    this.applyFilterWithDebounce(); // Add a debounce function to avoid excessive filtering.
  }

  onSelectFilterChange(selectedFilter: string) {
    // Handle radio button change event and update filter criteria.
    this.selectedFilter = selectedFilter;
    this.tweetFilterService.updateSelectFilter(this.selectedFilter);
  }

  onNumberOfPostsInputChange(event: Event) {
    let value = parseInt((event.target as HTMLInputElement).value)
    if(!isNaN(value) && value !== 0){
      this.postsPerPage = value;
      this.postsPerPageChange.emit(this.postsPerPage);
    }
    
  }

  applyFilterWithDebounce() {
    // Implement a debounce mechanism here to delay filtering.
    // You can use a setTimeout to apply the filter after a certain delay.
    // This prevents the filter from being applied too frequently while the user is typing.
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.tweetFilterService.updateInputFilter(this.filterValue);
    }, 800); // Added 800 ms debounce time.
  }

  private debounceTimer: any; // Timer for debounce mechanism.

  // Add a method to emit the number of posts per page change
  onPostsPerPageChange() {
    this.postsPerPageChange.emit(this.postsPerPage);
  }

  // Add a method to emit the page change
  onPageChange(page: any) {
    this.pageChange.emit(page);
  }

  pagination(currentPage: number, totalPages : number) {
    return getArrayForPagination(currentPage, totalPages)
  }
}
