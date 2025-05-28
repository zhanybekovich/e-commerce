import Container from "../container/Container";
import Navbar from "../navbar/Navbar";

function Header() {
  return (
    <header className="header">
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}

export default Header;
