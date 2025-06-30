import {describe,it,expect} from 'vitest';
import {crearContador } from '/'

describe('Probando contador', ()=>{
    it('Contador no funciona', () =>{
        expect(crearContador(1))
    })
})