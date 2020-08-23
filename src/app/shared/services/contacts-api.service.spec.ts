import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactsApiService } from './contacts-api.service';

describe('ContactsApiService', () => {
  let service: ContactsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ContactsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
