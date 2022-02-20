import axios from "axios";

const News = {
    async render() {
        const { data } = await axios.get("http://localhost:3002/posts");
        return /* html */`
              <h2 class="uppercase font-bold text-3xl my-5 text-blue-900 text-center">
              Sản phẩm mới nhất
              </h2>
              <div class="grid md:grid-cols-4 gap-8">
              ${data.map((post) => `
                  <div class="border shadow rounded p-4">
                      <a href="/product/${post.id}">
                        <img
                          src="${post.img}" alt=""
                          class="w-full"
                        />
                      </a>
                      <h3 class="my-3 text-center">
                        <a href="/product/${post.id}" class="text-blue-500 font-semibold text-xl">${post.title}</a>
                      </h3>
                      <p class="text-red-500 font-semibold">
                      ${post.price}
                      </p>
                    </div>
                    `).join("")}
        
                    </div>
                    `;
    },

};
export default News;
