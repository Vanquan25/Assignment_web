import axios from "axios";
import { add } from "../../api/posts";
import NavAdmin from "../../components/NavAdmin";

const Add = {
    render() {
        return /* html */`      
        ${NavAdmin.render()}
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div class="container mx-auto px-6 py-8">
                    <a href="/admin/list" class="text-gray-700 text-3xl font-medium">Quay lại</a>
                    </div>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
                        <label for="about" class="block text-sm font-medium text-gray-700">
                        Product Image
                        </label>
                        <div class="mt-1">
                        <input type="file" class="shadow-xl focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-xl border border-gray-700 rounded-md" id="img-post" placeholder="Img" /><br />
                        </div>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700">
                          Desc
                        </label>
                        <textarea name=""  cols="30" rows="10" class="mt-1 px-6 pt-5 pb-6 border-2 border-gray-700 rounded-md" id="desc-post" placeholder="Description"></textarea><br />
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                      </button>
                    </div>
                  </div>
                    </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        // console.log(document.querySelector('#form-add-post'));
        const formAdd = document.querySelector("#form-add-post");
        const CLOUD_API = "https://api.cloudinary.com/v1_1/dixysmopg/image/upload";
        const CLOUD_PRESET = "xjfrqlvj";
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = document.querySelector("#img-post").files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUD_PRESET);

            const { data } = await axios.post(CLOUD_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            const post = {
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            };
            add(post);
        });
    },
};
export default Add;
