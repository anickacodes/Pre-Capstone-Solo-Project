const NavBar = () => {
  return (
    <nav>
      <ul className="navigation-bar">
        <li>
          <a href="/" className="navigation-link">Home</a>
        </li>
        <li>
          <a href="/about" className="navigation-link">About</a>
        </li>
        <li>
          <a href="/fun-facts" className="navigation-link">Fun Facts</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
