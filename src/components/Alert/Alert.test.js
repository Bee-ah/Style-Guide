import {getByRole, getByText, render} from '@testing-library/react';
import BasicAlerts from './Alert';

describe('Componente de Alerta' , ()=>{
    it('para verificar se aparece corretamente o alerta escolhido', ()=>{
        const type = 'success';
        const letter = type.charAt(0).toUpperCase();
        const letter2 = type.slice(1)

        //getByRole é uma função do React, ele seleciona a div que contém role=type
        //também serve para button, link, textbox,checkbox, radio... 
        const{getByRole} = render(<BasicAlerts type={type}/>);
        const alert = getByRole('alert')
        expect(alert).toHaveClass(`MuiAlert-standard${letter+letter2}`);
    })
    it('messagem correta', ()=>{
        const type='error';
        const message = 'This is an error alert'
        const {getByText}= render(<BasicAlerts type={type}>{message}</BasicAlerts>);
        expect(getByText(message)).toBeInTheDocument();//espera que o texto correto esteja no documento
    })
})