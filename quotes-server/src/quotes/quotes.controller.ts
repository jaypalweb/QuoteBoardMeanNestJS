import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/quote.interface';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { identity } from 'rxjs';

@ApiTags('quotes')

@Controller('quotes')
export class QuotesController {
    constructor(private quotesService: QuotesService) { }

    @Get()
    getQuotes(): Quote[] {
        return this.quotesService.getQuotes();
    }

    //ref- https://github.com/swagger-api/swagger-core/wiki/Annotations

    @ApiParam({ name: 'id' }) //for swagger
    @Get(':id')
    getQuote(@Param('id') id): Quote {
        return this.quotesService.getQuote(id);
    }

    @Post()
    createQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> {
        return this.quotesService.createQuotes(createQuoteDto);
    }

    @ApiParam({ name: 'id' })
    @Put(':id')
    updateQutes(@Param('id') id, @Body() updateQutesDto: CreateQuoteDto): Quote {
        return this.quotesService.updateQuote(id, updateQutesDto);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    deleteQuote(@Param('id') id): Quote {
        return this.quotesService.deleteQuote(id);
    }
}
