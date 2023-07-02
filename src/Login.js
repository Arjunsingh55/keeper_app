import { Button, TextField } from "@mui/material";
import { Card, Col, Container, Row } from "react-bootstrap";
const Login = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="border-0 shadow">
              <Card.Body>
                <Container></Container>
                <div className="text-center my-5">
                  <TextField
                    style={{ width: "80%" }}
                    className="mb-3"
                    label="Email"
                    id="fullWidth"
                  />
                  <br />

                  <TextField
                    style={{ width: "80%" }}
                    className="mb-3"
                    size="large"
                    label="Password"
                    id="fullWidth"
                  />
                  <br />
                  <Button style={{ width: "30%" }} variant="contained">
                    Login
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
