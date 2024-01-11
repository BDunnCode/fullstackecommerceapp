import './styles.scss';

import Logo from "./../../assets/logo.webp"

const Header = props => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="FacelessManPlaceHolderLogo" />
        </div>
      </div>

    </header>
  );
};

export default Header;