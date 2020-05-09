import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Observable } from 'rxjs';
import { Quote } from '../quotes/quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: Observable<Quote>;
  constructor(private quoteService: QuotesService) { }

  ngOnInit(): void {
    this.quote = this.quoteService.getQuote('5eb17fb4845cc72d0039d6f9');
  }

}
