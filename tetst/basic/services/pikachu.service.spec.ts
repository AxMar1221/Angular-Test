import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PikachuService } from '../../../src/app/basic/services/pikachu.service';

describe('PikachuService', () => {
  let service: PikachuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PikachuService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('debe de traer información de Pikachu', ( done )=>{
    service.getPokemon(25)
    .subscribe( pokemon => {
      // console.log( pokemon );
      expect( pokemon.name ).toBe('pikachu');

      done();
    })
  })
});
