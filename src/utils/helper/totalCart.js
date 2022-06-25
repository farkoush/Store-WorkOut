const totalCart = (cartProducts) => {
    const totalItems = cartProducts.reduce( (total,item) => total + item.quantity ,0);
    const totalPrices = cartProducts.reduce( (total,item) => total + item.quantity * item.price  ,0).toFixed(2);
    return {
        totalItems,
        totalPrices
    };
};

export default totalCart;