
const quantityCounter = (state, id) => {
    const index = state.itemsSelected.findIndex( item => item.id === id);
    if (index === -1) return false;
    return state.itemsSelected[index].quantity;
};

export default quantityCounter;