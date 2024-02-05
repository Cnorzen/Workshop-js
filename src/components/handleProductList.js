import api from "../apis";

const handleProductList = async () => {
  const productList = document.getElementById("productList");
  try {
    // Bước 1: fetch data
    const { data } = await api.get("/products");
    // ! destructuring
    // Bước 2: Lấy được data thì map thành content

    // <img src="${product.thumbnail}" />
    //     <div class="inner-product">
    //     <h2>${product.title}<h2>
    //     <p>Giá: ${product.price}<p>
    //     <p>Mô tả: ${product.description}<p>
    //     </div>

    const contentHTML = data
      .map(
        (product) => `

          <div class="product"></h1>
      <img src="${product.thumbnail}" alt="${product.title}" />
      <div class="title">Tên sảm phẩm: ${product.title}</div>
      <div class="price">Giá sản phẩm: ${product.price}</div>
      <div>Mô tả: ${product.description}</div>
      </div>
        `
      )
      .join("");

    // Bước 3: Gắn content vào DOM
    productList.innerHTML = contentHTML;
  } catch (error) {
    console.log(error);
  }
};

export default handleProductList;
