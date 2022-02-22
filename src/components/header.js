import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../utils";

const Header = {
    render() {
        return `
        <nav class="bg-white-300 flex justify-between items-center">
        <ul class="flex"><li>
        <a href="#">
        <img src="https://res.cloudinary.com/dixysmopg/image/upload/v1644929861/logo_gweiqc.png" alt="" class="mx-auto" />
      </a>
      </li></ul>
          <ul class="flex" id="menu">
          
            <li>
              <a
                href="/"
                class="transition duration-200 ease-in-out block p-5 hover:bg-indigo-500 hover:text-white"
                >Trang chủ</a
              >
            </li>
            <li>
              <a
                href="/about"
                class="transition duration-200 ease-in-out block p-5 hover:bg-indigo-500 hover:text-white"
                >Áo sơ mi</a
              >
            </li>
            <li>
              <a
                href="/products"
                class="transition duration-200 ease-in-out block p-5 hover:bg-indigo-500 hover:text-white"
                >Áo thun</a
              >
            </li>
          </ul>
          <ul class="flex">
                <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
            </ul>
          <div class="flex mx-10">
            <input type="text" class="bg-white border border-gray-300 rounded-md my-2">
            <button class="bg-[#0000FF] m-2 w-full rounded-md px-3 hover:bg-[#9900FF]">Tìm kiếm</button>
          </div>
          <div class="m-3">
          <a class="text-black" href="/signin"><i class="fa fa-user"></i></a>
        </div>
        <ul class="flex">
          <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
          </ul>
          ${localStorage.getItem("user") ? `<ul class="flex">
            <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
            <li><a  id="logout" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white cursor-pointer">Đăng xuất</a></li>
          </ul>` : ""}
        </nav> 
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");
        document.querySelector("#account-email").innerHTML = user.email;
        // logout
        if (logout) {
            logout.addEventListener("click", () => {
                toastr.success("Bạn Đã Đăng Đăng Xuất Thành Công");
                localStorage.removeItem("user");
                reRender(Header, "#header");
            });
        }
    },
};
export default Header;
