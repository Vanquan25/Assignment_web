import { get } from "../../api/product";
import { addToCart } from "../../utils/cart";

const DetailProduct = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
            <div>
                <h1>${data.name}</h1>
                <img src="${data.img}" alt="" />
                <p>${data.price}</p>
                <button id="btnAddToCart">Add to cart</button>
            </div>
        `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: 1 }, () => {
                console.log("được gọi sau khi add to cart nè");
            });
        });
    },
};
export default DetailProduct;
