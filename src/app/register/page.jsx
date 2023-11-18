"use client";
import { useState } from "react";
import Input from "../components/input";
import Link from "next/link";

const defaultData = { name: "", email: "", password: "" };
const Register = () => {
  const [data, setData] = useState(defaultData);
  const onValueChange = (e) => {
    setData({ ...data, [e.targest.name]: e.targest.value });
  };
  const onRegister = (e) => {
    e.preventDefault();
    if(!data.name || !data.email || !data.password){
        alert("please fill all mandatory fildes")
        return
    }
    //api call
  };
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col justify-center items-center ">
      <div className="bg-white px-16 pb-12 mb-4 ">
        <h1 className="text-3xl  mb-4  mt-4 text-center font-semibold">
          Register
        </h1>
        <form action="">
          <Input
            label="Name"
            id="name"
            type="text"
            value={data.name}
            onChage={(e) => onValueChange(e)}
          />
          <Input
            label="Email"
            Id="email"
            type="text"
            value={data.email}
            onChage={(e) => onValueChange(e)}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            value={data.password}
            onChage={(e) => onValueChange(e)}
          />
          <button
            className=" bg-black hover:bg-slate-500 text-white py-2 px-4 rounded  w-full  "
            onClick={(e) => onRegister(e)}
          >
            Submit
          </button>
          <p className="mt-4 text-center  ">
            Already have an account ?
            <Link href="/login" className="text-blue-500 hover:underline">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
