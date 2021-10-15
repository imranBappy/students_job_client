import Layout from "./Layout";
import { useState } from 'react';

export default function Register() {
  const [user, setUser] = useState({})
  const [error, setError] = useState({
    name:'',
    phone:'',
    username:'',
    password:''
  })
  const handleChange = e =>{
    const name = e.target.name, value = e.target.value;
    setUser({...user, [name]:value})
  }
  return (
    <>
      <Layout title="Login Account">
        <h3 className="mt-2">Register Form</h3>
        <p className="text-muted">Please fill up the from</p>
        <form>
        <div className="input-group mb-1">
            <span className="input-group-text" id="basic-addon1">
              Full Name
            </span>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Full Name"
              aria-label="name"
              aria-describedby="basic-addon1"
              name='name'
            />
          </div>
          <p className="text-danger">Name Error</p>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Phone Number
            </span>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Phone Number"
              aria-label="phone"
              aria-describedby="basic-addon1"
              name='phone'
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name='username'
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" >
              Register
            </button>
          </div>
        </form>
        <br />
      </Layout>
    </>
  );
}
