import { Component, OnInit, ViewChild } from '@angular/core';
import { Quotes } from 'app/models';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { KanyeService } from '@shared/services/kanye.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public displayedColumns: string[] = ['id', 'description', 'actions'];
  public quotes = [];
  public isLoading: Boolean = false;

  dataSource = new MatTableDataSource<Quotes>(this.quotes);
  
  constructor(
    private kanyeService: KanyeService
  ) { }

  ngOnInit() {
    this.addNewQuote();
  }

  addNewQuote() {
    this.isLoading = true;
    this.kanyeService.getNewQuote().subscribe((quote)=> {
      this.quotes.push({id: this.quotes.length + 1, description: quote.quote});
      this.reInitializeTable(this.quotes);
      this.isLoading = false;
    });
  }

  removeAllQuote() {
    this.quotes = [];
    this.reInitializeTable([]);
  }

  reInitializeTable(quotes: Array<Quotes>) {
    this.dataSource = new MatTableDataSource<Quotes>(quotes);
  }
  
  removeQuote(id) {
    this.quotes = this.quotes.filter((quote) => {
      return quote.id != id;
    });

    this.reSorting();
    this.reInitializeTable(this.quotes);
  }

  reSorting(){
    let counts = 1;

    this.quotes.forEach((quote) => {
      quote.id = counts++;
    })
  }

  ngAfterViewInit() { 
    this.dataSource.sort = this.sort; 
  }
}
