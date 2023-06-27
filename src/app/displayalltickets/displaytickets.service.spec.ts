import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DisplayticketsService } from './displaytickets.service';
import { displayticket } from './displyticket';

describe('DisplayticketsService', () => {
  let service: DisplayticketsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DisplayticketsService],
    });
    service = TestBed.inject(DisplayticketsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get all movie tickets', () => {
    const expectedTickets: displayticket[] = [
      {
        transactionId: 1,
        movie_id_fk: 1,
        no_of_tickets: 10,
        issueAt: '29/10/2023',
      },
      {
        transactionId: 2,
        movie_id_fk: 2,
        no_of_tickets: 5,
        issueAt: '29/10/2023',
      },
    ];

    service.getallmovietickets().subscribe((tickets) => {
      expect(tickets).toEqual(expectedTickets);
    });

    const requestUrl = 'http://localhost:8081/api/v1/ticket/alltickets';
    const req = httpMock.expectOne(requestUrl);
    expect(req.request.method).toBe('GET');

    req.flush(expectedTickets);
  });
});
