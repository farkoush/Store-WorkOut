import { render, screen, fireEvent } from '@testing-library/react';
import {ProductCard} from '../index';
import { CartContext, ProductsContext } from 'context';

const mockedSetCartContext = jest.fn();

describe("Add to cart", () => {
    it('renders add to cart for first', () => {
        render(
            
            <CartContext.Provider value ={{state: [], dispatch: mockedSetCartContext}}>
                <ProductCard  />
            </CartContext.Provider>
        );
        const cartButtonElement = getByRole('button', { name: /add-cart/i });
        fireEvent.click(cartButtonElement);
        expect(mockedSetCartContext).toBeCalled();
    })
});
