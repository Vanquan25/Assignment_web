import Banner from "../components/banner";
import News from "../components/news";
import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
    async render() {
        return /* html */`
        <div class="max-w-full mx-auto">
        <div id="header">
        ${Header.render()}
    </div>
        <main>
        <div class="banner">
        ${Banner.render()}
    </div>
    <div class="news">
        ${await News.render()}
    </div></br>
        </main>
        <div>
        ${Footer.render()}
        </div>
      </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;
