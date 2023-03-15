//o fireEvent irá captar as interações. como o click
import {render , fireEvent} from '@testing-library/react';
import SimpleDialogDemo from './Dialog';

describe('Componente Dialog' , ()=>{
    it('conteúdo do botão está corrento', ()=>{
        const {getByText } = render(<SimpleDialogDemo />);
        expect(getByText('Open simple dialog')).toBeInTheDocument();
    })
    it("abre e fecha", ()=>{
        const{getByText, getByRole} = render(<SimpleDialogDemo/>);
        const button = getByText('Open simple dialog');
        fireEvent.click(button);
        const dialog = getByRole('dialog');
        expect(dialog).toBeInTheDocument();

    })
    it("o valor escolhido aparece", ()=>{
        const{getByText } = render(<SimpleDialogDemo/>);
        const button = getByText('Open simple dialog');
        fireEvent.click(button);

        const firstEmail = getByText('chuva@gmail.com');
        fireEvent.click(firstEmail);
        const testCase = document.querySelector('.MuiTypography-subtitle1');
        expect(testCase).toHaveTextContent('chuva@gmail.com');

        const secondEmail = getByText('teste@gmail.com');
        fireEvent.click(secondEmail);
        expect(testCase).toHaveTextContent('teste@gmail.com');
    
    })
})