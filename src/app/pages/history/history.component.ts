import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

interface StempelEintrag {
  datum: Date;
  ersteEinstempeln: string;
  ersteAustempeln: string;
  mittagspauseDauer: string;
  zweiteEinstempeln: string;
  zweiteAustempeln: string;
  arbeitszeit: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    DatePipe
  ],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = [
    'datum', 
    'ersteEinstempeln', 
    'ersteAustempeln', 
    'mittagspauseDauer', 
    'zweiteEinstempeln', 
    'zweiteAustempeln',
    'arbeitszeit'
  ];
  
  dataSource: StempelEintrag[] = [];
  filteredData: StempelEintrag[] = [];
  
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 50];
  pageIndex = 0;
  
  filterMonth: number | null = null;
  filterYear: number = new Date().getFullYear();
  
  constructor() {
    this.generateExampleData();
  }
  
  ngOnInit(): void {
    this.applyFilter();
  }
  
  generateExampleData() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    
    for (let i = 0; i < 1; i++) {
      const date = new Date(currentYear, currentMonth, currentDate.getDate() - i);
      
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      const startHour = 8 + Math.floor(Math.random() * 2);
      const startMin = Math.floor(Math.random() * 30);
      const pauseStart = `12:${Math.floor(Math.random() * 15)}`;
      const pauseDuration = `${30 + Math.floor(Math.random() * 30)} min`;
      
      const pauseHour = 12;
      const pauseMin = Math.floor(Math.random() * 15);
      const resumeHour = pauseHour;
      const resumeMin = pauseMin + 30 + Math.floor(Math.random() * 30);
      const endHour = 16 + Math.floor(Math.random() * 2);
      const endMin = Math.floor(Math.random() * 59);
      
      const totalMinutes = (endHour * 60 + endMin) - (startHour * 60 + startMin) - 
                          (parseInt(pauseDuration.split(' ')[0]));
      const workHours = Math.floor(totalMinutes / 60);
      const workMinutes = totalMinutes % 60;
      
      this.dataSource.push({
        datum: date,
        ersteEinstempeln: `${startHour.toString().padStart(2, '0')}:${startMin.toString().padStart(2, '0')}`,
        ersteAustempeln: pauseStart,
        mittagspauseDauer: pauseDuration,
        zweiteEinstempeln: `${resumeHour.toString().padStart(2, '0')}:${resumeMin.toString().padStart(2, '0')}`,
        zweiteAustempeln: `${endHour.toString().padStart(2, '0')}:${endMin.toString().padStart(2, '0')}`,
        arbeitszeit: `${workHours} Std ${workMinutes} Min`
      });
    }
  }
  
  applyFilter() {
    if (this.filterMonth !== null) {
      this.filteredData = this.dataSource.filter(item => {
        return item.datum.getMonth() === this.filterMonth && 
               item.datum.getFullYear() === this.filterYear;
      });
    } else {
      this.filteredData = [...this.dataSource];
    }
    
    this.pageIndex = 0;
  }
  
  resetFilter() {
    this.filterMonth = null;
    this.filterYear = new Date().getFullYear();
    this.applyFilter();
  }
  
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
  
  sortData(sort: Sort) {
    const data = [...this.filteredData];
    if (!sort.active || sort.direction === '') {
      this.filteredData = data;
      return;
    }

    this.filteredData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'datum': return this.compare(a.datum.getTime(), b.datum.getTime(), isAsc);
        case 'ersteEinstempeln': return this.compare(a.ersteEinstempeln, b.ersteEinstempeln, isAsc);
        case 'ersteAustempeln': return this.compare(a.ersteAustempeln, b.ersteAustempeln, isAsc);
        case 'mittagspauseDauer': 
          return this.compare(
            parseInt(a.mittagspauseDauer.split(' ')[0]), 
            parseInt(b.mittagspauseDauer.split(' ')[0]), 
            isAsc
          );
        case 'zweiteEinstempeln': return this.compare(a.zweiteEinstempeln, b.zweiteEinstempeln, isAsc);
        case 'zweiteAustempeln': return this.compare(a.zweiteAustempeln, b.zweiteAustempeln, isAsc);
        case 'arbeitszeit': 
          const aTime = this.workTimeToMinutes(a.arbeitszeit);
          const bTime = this.workTimeToMinutes(b.arbeitszeit);
          return this.compare(aTime, bTime, isAsc);
        default: return 0;
      }
    });
  }
  
  private workTimeToMinutes(time: string): number {
    const parts = time.split(' ');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[2]);
    return hours * 60 + minutes;
  }
  
  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
  getMonthName(month: number): string {
    const months = [
      'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
      'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ];
    return months[month];
  }
  
  getDisplayedData() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredData.slice(start, end);
  }
  
  setMonth(month: number) {
    this.filterMonth = month;
    this.applyFilter();
  }
}