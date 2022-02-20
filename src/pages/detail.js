import { get } from "../api/posts";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        // const result = data.find((post) => post.id === id);
        return /* html */`
        <div class="max-w-full mx-auto">
        ${Header.render()}
        <main>
        <div class="banner">
        ${Banner.render()}
    </div>
            <div><img src="${data.img}" alt="" width="500"/></div>
        <div>
                <h1>${data.title}</h1>
                <p>${data.desc}</p>
                <span>${data.price}</span>
            </div>
            </main>
        ${Footer.render()}
      </div>
        `;
    },
};
export default DetailPage;
