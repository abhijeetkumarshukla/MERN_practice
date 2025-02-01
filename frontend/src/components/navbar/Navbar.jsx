import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <div className="p-2  shadow-md flex justify-around  ">
        <NavLink to="login">
          {" "}
          <button className="   gap-2 w-20 border p-2 rounded-md font-medium bg-orange-400">
            Login
          </button>
        </NavLink>
        <span className="   gap-2 w-20  m-auto font-black text-2xl p-2 rounded-md   ">
          {" "}
          Form{" "}
        </span>
        <NavLink to="signup">
          {" "}
          <button className="   gap-2 w-20 border p-2 rounded-md font-medium bg-orange-400">
            SignUp
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
