import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex display-row w-full h-20 bg-sky-500 relative justify-between items-center">
      <NavLink to="/">
        <ul>
          <li className="ml-24 text-white font-bold text-2xl">HOME</li>
        </ul>
      </NavLink>
      <NavLink to="/tickets">
        <ul>
          <li className="mr-24 text-white font-bold text-2xl">Tickets Page</li>
        </ul>
      </NavLink>
      <NavLink to="/cart">
        <ul>
          <li className="mr-24 text-white font-bold text-2xl">Cart Page</li>
        </ul>
      </NavLink>
    </div>
  );
};

export default Header;
