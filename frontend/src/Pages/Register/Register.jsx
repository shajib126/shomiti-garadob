import React from "react";
import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import cogoToast from "cogo-toast";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/User";
import { useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.user);
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !phone || !avatar || !name) {
      cogoToast.error("সকল ফিল্ড পুরন করুন");
    } else {
      dispatch(register(name, email, phone, avatar, password)).then(() => {
        cogoToast.success("রেজিস্টার সফল হয়েছে");
      });
    }
  };
  useEffect(() => {
    if (error) {
      cogoToast.error(error);
    }
  }, [error, dispatch]);
  return (
    <form onSubmit={submitHandler} className="register">
      <img src={avatar} alt="avatar" />
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="phone"
        placeholder="phone"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <input onChange={changeImageHandler} type="file" accept="image/*" />
      <button type="submit">রেজিস্টার</button>
      <span className="login_nav">
        already have a account?<Link to="/authlogin">অথ লগিন</Link>{" "}করুন
      </span>
    </form>
  );
};

export default Register;
