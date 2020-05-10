import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes: Observable<Quote[]>;

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.quotes = this.quotesService.getData();
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return { background: color };
  }

  onDelete(id: string) {
    console.log(id);
    this.quotesService.deleteQuote(id).subscribe(data => {
      this.getData();
      console.log('Quote Deleted');
    });
  }
}
