import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TweetFilterService {

  private filterValueSubject = new BehaviorSubject<string>('');
  private selectedFilterSubject = new BehaviorSubject<string>('all');

  constructor() { }

  // Observable to subscribe to filterValue changes
  filterValue$ = this.filterValueSubject.asObservable();

  // Observable to subscribe to selectedFilter changes
  selectedFilter$ = this.selectedFilterSubject.asObservable();

  // Update the filter criteria
  updateInputFilter(filterValue: string) {
    this.filterValueSubject.next(filterValue);
  }

  updateSelectFilter(selectedFilter: string) {
    this.selectedFilterSubject.next(selectedFilter);
  }

  // Get the current filter value
  getFilterValue(): string {
    return this.filterValueSubject.value;
  }

  // Get the current selected filter
  getSelectedFilter(): string {
    return this.selectedFilterSubject.value;
  }
}
