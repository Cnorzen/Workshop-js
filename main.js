import "./node_modules/bootstrap/dist/js/bootstrap.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Navigo from "navigo";

import { render, router } from "./src/utils/common.js";
import HomePage from "./src/pages/HomePage.js";
import AboutPage from "./src/pages/AboutPage.js";
import Shop from "./src/pages/Shop.js";
import NotFoundPage from "./src/pages/NotFoundPage.js";
import register from "./src/components/Register.js";
import SignIn from "./src/pages/SignIn.js";
import login from "./src/components/SignIn.js";
import handleProductList from "./src/components/handleProductList.js";

import Dashboard from "./src/pages/admin/Dashboard.js";
import SignUp from "./src/pages/Signup.js";

const app = document.getElementById("app");
router.on("/", () => router.navigate("/home"));
router.on("/about", () => render(app, AboutPage));

router.on("/shop", () => render(app, Shop), {
  after() {
    handleProductList();
  },
});
router.on("/signup", () => render(app, SignUp), {
  after() {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register;
  },
});
router.on("/signin", () => render(app, SignIn), {
  after() {
    const btnSignIn = document.getElementById("btnSignIn");
    btnSignIn.onclick = login;
  },
});

router.on("/admin", () => render(app, Dashboad), {
  // checkPermission:
  before(done) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user && user.user.role === "admin") {
      console.log(user.user);
      done();
    } else {
      alert("Bạn không có quyền truy cập vào trang này");
      router.navigate("/home");
    }
  },
});
router.on("logout", () => {
  sessionStorage.removeItem("user");
  router.navigate("/signin");
});

router.on("/detail/:id", () => render(app, DetailPage), {
  after(data) {
    handleProductDetail(data.data.id);
  },
});

router.notFound(() => render(app, NotFoundPage));
router.resolve();
