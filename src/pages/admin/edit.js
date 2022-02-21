import axios from "axios";
import NavAdmin from "../../components/NavAdmin";
import { get, update } from "../../api/posts";

const adminEdit = {

    async render(id) {
        const { data } = await get(id);
        return /* html */ `
          <div class="min-h-full">
              ${NavAdmin.render()}
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div class="container mx-auto px-6 py-8">
                    <a href="/admin/list" class="text-gray-700 text-3xl font-medium">Quay lại</a>
                        </div>
              <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <!-- Replace with your content -->
                  <div class="px-4 py-6 sm:px-0">
                      <form id="form-add-post">
                      <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                          <label for="company-website" class="block text-sm font-medium text-gray-700">
                            Name
                          </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                          <input type="text" class="shadow-xl focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-2xl border border-gray-700 rounded-md" id="title-post" placeholder="Title"/><br />
                          </div>
                        </div>
                      </div>
                      <div>
                      <label for="company-website" class="block text-sm font-medium text-gray-700">
                            Price
                          </label>
                      <input type="text" id="price-post" class="border border-black" placeholder="Price"/>
                      </div>
                      <div>
                        <label for="about" class="block text-sm font-medium text-gray-700">
                        Product Image
                        </label>
                        <div class="mt-1">
                        <input type="file" class="shadow-xl focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-xl border border-gray-700 rounded-md" id="img-post" placeholder="Img" /><br />
                        <img src="${data.img}" id="img-preview" width="500"/>
                        </div>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700">
                          Desc
                        </label>
                        <textarea name=""  cols="145" rows="5" class="mt-1 px-6 pt-5 pb-6 border-2 border-gray-700 rounded-md" id="desc-post" placeholder="Description"></textarea><br />
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Update
                      </button>
                    </div>
                  </div>
                      </form>
                  </div>
                  <!-- /End replace -->
              </div>
              </main>
          </div>
          `;
    },
    afterRender(id) {
        const formAdd = document.querySelector("#form-add-post");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        let imgLink = "";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const CLOUDINARY_PRESET = "jkbdphzy";

        // handle sự kiện change để xem ảnh trên local
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                // call api cloudinary
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }

            // call api thêm bài viết
            update({
                id,
                title: document.querySelector("#title-post").value,
                price: document.querySelector("#price-post").value,
                img: imgLink || imgPreview.src,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default adminEdit;
