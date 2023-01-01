import Logo from "../assets/img/Logo.png";
import { CiBellOn } from "react-icons/ci";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <nav className="flex justify-between drop-shadow-md bg-white px-24 h-20 w-screen fixed z-10">
      <img className="img-responsive my-8 h-6" src={Logo} alt="Logo" />
      <div className="flex my-4">
        <CiBellOn className="mx-2 my-4 rounded border" size={30} />
        <Avatar
          size="30"
          src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
          className="mx-2 my-2 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Header;
