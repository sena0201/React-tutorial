import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../components";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handelChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "login" : "register"}</h3>
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            handleChange={handelChange}
            value={values.name}
            labelText="name"
          />
        )}
        <FormRow
          type="email"
          name="email"
          handleChange={handelChange}
          value={values.email}
          labelText="email"
        />
        <FormRow
          type="password"
          name="password"
          handleChange={handelChange}
          value={values.password}
          labelText="password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "Loading..." : "submit"}
        </button>
        <div>
          <p>
            {values.isMember ? "Not a member yet?" : "Already a member?"}{" "}
            <button type="button" className="member-btn" onClick={toggleMember}>
              {values.isMember ? "Register" : "Login"}
            </button>
          </p>
        </div>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() => {
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            );
          }}
        >
          {isLoading ? "loading..." : "demo"}
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
