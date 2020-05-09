import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.scss']
})
export class EditQuoteComponent implements OnInit {
  quote = {
    title: '',
    author: ''
  }
  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
  }

  onSave(form) {
    const data = form.value;
    this.quotesService.createQuote(data).subscribe(data => {
      console.log(data);
    });
    //console.log(form);
  }

}
