const totalCart = (cartProducts) => {
    const totalItems = cartProducts.reduce( (total,item) => total + item.quantity ,0);
    const totalPrices = cartProducts.reduce( (total,item) => total + item.price ,0);
    return {
        totalItems,
        totalPrices
    };
};

export default totalCart;