import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailPage from "./pages/detail";
import AdminProductPage from "./pages/admin/adminproduct";
import AdminProductEdit from "./pages/admin/productEdit";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import AdminDashboard from "./pages/admin/admindashboard";
import index from "./pages/admin";
import Add from "./pages/admin/add";
import adminEdit from "./pages/admin/edit";
import ProductsPage from "./pages/products";
import DetailProduct from "./pages/products/detail";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
    if (component.afterRender) await component.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/product": () => print(ProductPage),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/product/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/products": () => print(AdminProductPage),
    "/admin/product/:id/edit": ({ data }) => print(AdminProductEdit, data.id),
    "/admin/dashboard": () => print(AdminDashboard),
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => print(DetailProduct, data.id),
    "/admin/add": () => {
        print(Add);
    },
    "/admin/list": () => {
        print(index);
    },
    "/admin/list/:id/edit": ({ data }) => print(adminEdit, data.id),
});

router.resolve();
