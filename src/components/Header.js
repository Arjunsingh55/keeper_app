import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import HighlightIcon from "@mui/icons-material/Highlight";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  return (
    <>
      <Navbar className="headerStyle" data-bs-theme="dark">
        <Navbar.Brand className="headingStyle" href="#home">
          <div className="d-flex">
            <HighlightIcon /> Keeper App
          </div>
        </Navbar.Brand>
        <Container>
          <Nav className="me-auto"></Nav>
          <Nav>
            {isAuthenticated ? (
              <Button
                variant="danger"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </Button>
            ) : (
              <Button variant="success" onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            )}
          </Nav>
          <Nav className="text-white ms-2">
            {isAuthenticated && <p>{user.name}</p>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
