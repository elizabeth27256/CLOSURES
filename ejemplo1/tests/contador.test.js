import {describe,it,expect} from 'vitest';
import {crearContador } from './ejemplo1/contador.js'

describe('Probando contador', ()=>{
    it('Contador no funciona', () =>{
        expect(crearContador(1))
    })
})