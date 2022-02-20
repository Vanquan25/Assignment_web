import { getAll, remove } from "../../api/posts";
import NavAdmin from "../../components/NavAdmin";

const index = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        ${NavAdmin.render()}
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div class="container mx-auto px-6 py-8">
                    <a href="/admin/add" class="text-gray-700 text-3xl font-medium">Thêm mới</a>
                        </div>
        <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-[#99FF00]">
            <tr>
            <th scope="col" class="text-center border shadow rounded px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                STT
              </th>
              <th scope="col" class="text-center border shadow rounded px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="text-center border shadow rounded px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="text-center border shadow rounded px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="text-center border shadow rounded px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          ${data.map((post, index) => `
            <tr>
                <td class="text-center border shadow rounded">${index + 1}</td>
              <td class="border shadow rounded px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                    ${post.title}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${post.createdAt}</div>
              </td>
              <td class="border shadow rounded px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="border shadow rounded px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td>
              <a href="/admin/list/${post.id}/edit" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              <button >Edit </button>
              </a>
              </td>
              <td>
              <button data-id="${post.id}" class="btn btn-remove py-2 px-4 bg-[#FF0000] text-white font-semibold rounded-lg shadow-md hover:bg-[#CC0000] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Delete</button>
              </td>
            </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        
        `;
    },
    afterRender() {
        // lấy danh sách button sau khi render
        const buttons = document.querySelectorAll(".btn");
        // tạo vòng lặp cho nodelist button
        buttons.forEach((btn) => {
            // lấy ID từ thuộc tính data-id của button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa không ?");
                if (confirm) {
                    // gọi hàm delete trong folder API và bắn id vào hàm
                    remove(id).then(() => {
                        alert("Đã xóa thành công !");
                    });
                }
            });
        });
    },
};

export default index;
