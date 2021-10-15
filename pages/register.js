import Layout from "./Layout";

export default function Register() {
  return (
    <>
      <Layout title="Login Account">
        <form>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Full Name
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Full Name"
              aria-label="name"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Phone Number
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              aria-label="phone"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary" >
              Register
            </button>
          </div>
        </form>
        <br />
      </Layout>
    </>
  );
}
