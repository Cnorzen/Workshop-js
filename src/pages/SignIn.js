const SignIn = () => {
    return /*html*/ `
    <form>
    <h1>Đăng Nhập</h1>
    <div class="mb-3">
      <label for="email" class="form-label">Địa chỉ email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
        required
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Mật khẩu</label>
      <input
        value=""
        type="password"
        class="form-control"
        id="password"
        required
      />
    </div>
  
    <button type="button" id="btnSignIn" class="btn btn-primary">
      Đăng nhập
    </button>
  </form>
    `;
  };
  
  export default SignIn;