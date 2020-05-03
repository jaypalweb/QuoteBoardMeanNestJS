import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';

@Injectable()
export class QuotesService {
    quotes: Quote[] = [
        {
            id: '1',
            title: 'my first quote',
            author: 'Jay First'
        },
        {
            id: '2',
            title: 'my second quote',
            author: 'Jay Second'
        },
        {
            id: '3',
            title: 'my third quote',
            author: 'Jay Third'
        }
    ]
    getQuotes(): Quote[] {
        return this.quotes;
    }

    getQuote(id: string): Quote {
        return this.quotes.find(quote => quote.id === id);
    }

    createQuotes(quote: Quote) {
        return quote;
    }

    updateQuote(id: string, updateQuoteDto): Quote {
        const data = this.quotes.find(quote => quote.id === id);
        data.title = updateQuoteDto.title ? updateQuoteDto.title : data.title;
        data.author = updateQuoteDto.author ? updateQuoteDto.author : data.author;
        return data;
    }

    deleteQuote(id: string): Quote {
        return this.quotes.find(quote => quote.id === id);
    }
}
