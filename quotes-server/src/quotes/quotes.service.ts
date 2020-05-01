import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
    getQuotes(): string {
        return 'This will return all the quotes';
    }

    createQuotes(quote: any): string {
        return `${quote.author} has written "${quote.title}"`;
    }
}
