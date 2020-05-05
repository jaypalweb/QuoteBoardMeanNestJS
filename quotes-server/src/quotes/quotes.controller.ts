import { Controller, Get, Post, Body, Param, Put, Delete, Logger } from '@nestjs/common';
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
    getQuotes(): Promise<Quote[]> {
        Logger.log('Get All APIs');
        return this.quotesService.getQuotes();
    }

    @ApiParam({ name: 'id' }) //for swagger
    @Get(':id')
    getQuote(@Param('id') id): Promise<Quote> {
        Logger.log('Get an API');
        return this.quotesService.getQuote(id);
    }

    @Post()
    createQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> {
        return this.quotesService.createQuotes(createQuoteDto);
    }

    @ApiParam({ name: 'id' })
    @Put(':id')
    updateQutes(@Param('id') id, @Body() updateQutesDto: CreateQuoteDto): Promise<Quote> {
        return this.quotesService.updateQuote(id, updateQutesDto);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    deleteQuote(@Param('id') id): Promise<any> {
        return this.quotesService.deleteQuote(id);
    }
}
