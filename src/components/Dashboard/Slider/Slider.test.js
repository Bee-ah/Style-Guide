import {render, fireEvent} from '@testing-library/react';
import DiscreteSlider from './Slider';

describe('Componente Slider', ()=>{
    it('atualiza os valores', ()=>{
        const {getByRole, getByText} = render(<DiscreteSlider/>);
        const slider = getByRole('slider');
        fireEvent.change(slider, {target:{value:100}});
        expect(getByText('100')).toBeInTheDocument();
    })
    it('aparece 2 days', ()=>{
        const{ getByRole, getByText}= render(<DiscreteSlider/>);
        const slider = getByRole('slider');
        expect(slider).toBeInTheDocument();
        expect(getByText('2 days')).toBeInTheDocument();
    })
})