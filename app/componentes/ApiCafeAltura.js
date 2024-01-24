export async function getProducts() {
    const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
    const data = await response.json();
    return data;
}
const cardReducer = (cart, dispatch) => {
    switch (dispatch.action) {
        case "ADD_ITEM":
            return [...cart,
            {
                id: dispatch.payload._id,
                name: dispatch.payload.brand,
                price: dispatch.payload.price,
                img: dispatch.payload.img_url

            }];
           
        case "REMOVE_ITEM":
            return cart.filter((item) => item.id !== dispatch.payload);
        default:
            return cart;
    }
}
export default cardReducer;