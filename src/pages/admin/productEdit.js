import NavAdmin from "../../components/NavAdmin";
import data from "../../data";

const AdminProductEdit = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /* html */`
        ${NavAdmin.render()}
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div class="container mx-auto px-6 py-8">
                        <h3 class="text-gray-700 text-3xl font-medium"></h3>
  <div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
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
                Time
              </label>
              <div class="mt-1">
              <input type="file" class="border border-black" id="img-post" placeholder="Img" /><br />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="${result.img}" alt="">
                  </div>
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-700 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Change
                </button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Cover photo
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
</div>    
  </div>`;
    },
};
export default AdminProductEdit;
