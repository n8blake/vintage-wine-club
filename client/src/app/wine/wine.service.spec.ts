import { TestBed } from '@angular/core/testing';

import { WineService } from './wine.service';

describe('WineService', () => {
  let service: WineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getWines', () => {

    it('should return a list of wines', () => {
      let wines = service.getWines();
      expect(wines.length).toBeGreaterThan(0);
    })

  })

  describe('getWine', () => {

    it('should get a wine by its id', () => {
      let wine = service.getWine(1);
      expect(wine.name).toBe('Cabernet Franc');
    })

  })

});
