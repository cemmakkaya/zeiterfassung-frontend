import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HistoryService, StempelEintrag } from '../../services/history.service';

describe('HistoryService', () => {
  let service: HistoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HistoryService]
    });

    service = TestBed.inject(HistoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // stellt sicher, dass keine offenen Anfragen bleiben
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch history data from API', () => {
    const mockData: StempelEintrag[] = [
      {
        datum: '2024-05-01',
        ersteEinstempeln: '08:00',
        ersteAustempeln: '12:00',
        mittagspauseDauer: '30 min',
        zweiteEinstempeln: '12:30',
        zweiteAustempeln: '16:00',
        arbeitszeit: '7 Std 30 Min'
      }
    ];

    service.getHistory().subscribe(data => {
      expect(data.length).toBe(1);
      expect(data[0].datum).toBe('2024-05-01');
    });

    const req = httpMock.expectOne('http://localhost:7070/api/history');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
