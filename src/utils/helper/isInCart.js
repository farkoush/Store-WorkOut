const isInCart = (state,id) => {
    const result = !!state.itemsSelected.find( item => item.id === id)
    return result;
};

export default isInCart;