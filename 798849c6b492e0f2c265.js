import "./styles.css";
import { footer } from "./components/footer.js";
import { banner } from "./components/banner.js";
import { nav } from "./components/nav.js";
import { HomePage } from "./components/pages/homepage.js";
const body = document.querySelector("body");

const bannerEl = banner();
const navEl = nav();
const footerEl = footer();

body.append(bannerEl, navEl, footerEl);

HomePage(navEl);

