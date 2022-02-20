import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";

const ProductPage = {
    render() {
        return /* html */` 
        <div class="max-w-full mx-auto">
        ${Header.render()}
        <main>
        <div class="banner">
        ${Banner.render()}
    </div>
            <h1>Product Page</h1>
        </main>
        ${Footer.render()}
      </div>`;
    },
};
export default ProductPage;
