import { describe, it, expect } from 'vitest'
import { crearCajaFuerte } from './ejemplo2/pass.js'

describe ('Probando Contraseña', ()=>{
    it('Contraseña Incorrecta', () =>{
        expect(crearCajaFuerte('1234'))
    })
})