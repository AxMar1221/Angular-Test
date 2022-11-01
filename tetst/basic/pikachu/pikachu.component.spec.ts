import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PikachuComponent } from '../../../src/app/basic/pikachu/pikachu.component';
import { PikachuService } from '../../../src/app/basic/services/pikachu.service';

describe('PikachuComponent', () => {
  let component: PikachuComponent;
  let fixture: ComponentFixture<PikachuComponent>;
  let compile: HTMLElement;
  let service: PikachuService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PikachuComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ PikachuService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PikachuComponent);
    component = fixture.componentInstance;
    service = TestBed.inject( PikachuService );
    httpMock = TestBed.inject( HttpTestingController );

    fixture.detectChanges();
    compile = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de hacer macht con el snapshot', () => {
    expect(compile.innerHTML).toMatchSnapshot();
  });

  test('debeb de mostrar un loading al inicio', () => {
    const h2 = compile.querySelector('h2');
    expect( h2?.textContent ).toContain('Loading...')
  });

  test('debe de cargar Pikachu inmediatamente', ()=> {

    const dummyPokemon = {
      name: 'Pika Pika!',
      sprites: {
        front_default: 'https://pikachu.com/spritre.com'
      }
    };

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/25');
    expect( request.request.method ).toBe('GET');
    request.flush( dummyPokemon );

    fixture.detectChanges();
    // console.log(compile.innerHTML);
    const h3 = compile.querySelector('h3');
    const img = compile.querySelector('img');

    expect( h3?.textContent?.toLowerCase() ).toContain( dummyPokemon.name.toLowerCase() );
    expect( img?.src ).toBe( dummyPokemon.sprites.front_default );
    expect( img?.alt ).toBe( dummyPokemon.name );

  })
});
