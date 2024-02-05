const signup = () => {
    return /*html*/ `
    <form>
    <h1>Đăng ký</h1>
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
    <div class="mb-3">
      <label for="confirmPass" class="form-label">Xác nhận lại mật khẩu</label>
      <input type="password" class="form-control" id="confirmPass" required />
    </div>
  
    <button type="button" id="btnRegister" class="btn btn-primary">
      Đăng ký
    </button>
  </form>
  
    `;
  };
  
  export default SignUp;