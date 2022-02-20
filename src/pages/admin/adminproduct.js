import AdminProductsList from "../../components/admin/productlist";
import NavAdmin from "../../components/NavAdmin";

const AdminProductPage = {
    render() {
        return /* html */ `
        ${NavAdmin.render()}
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div class="container mx-auto px-6 py-8">
                        <h3 class="text-gray-700 text-3xl font-medium">Quản lý Product</h3>
                        </div>
        ${AdminProductsList.render()}
        `;
    },
};
export default AdminProductPage;
