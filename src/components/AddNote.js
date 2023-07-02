import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useAuth0 } from "@auth0/auth0-react";
// import Background from "../assets/img2.jpg";
import { Row, Col, Container } from "react-bootstrap";

const AddNote = (prop) => {
  const { isAuthenticated } = useAuth0();
  const [note, setNote] = useState({
    title: " ",
    content: "",
  });

  function handleChange(event, property) {
    // const { name, value } = event.target;
    // setNote((preNote) => {
    //   return {
    //     ...preNote,
    //     [name]: value,
    //   };
    // });
    setNote({
      ...note,
      [property]: event.target.value,
    });
  }
  const submitNote = (event) => {
    event.preventDefault();
    prop.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div>
      {isAuthenticated ? (
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <form>
                <input
                  style={{ borderBottom: "1px solid #0504aa" }}
                  type="text"
                  name="Title"
                  placeholder="Title"
                  onChange={(event) => handleChange(event, "title")}
                  value={note.title}
                />

                <textarea
                  className="mt-3"
                  value={note.content}
                  name="content"
                  placeholder="Take a note..."
                  id=""
                  cols="22"
                  rows="3"
                  onChange={(event) => handleChange(event, "content")}
                ></textarea>
                <button onClick={submitNote}>
                  <AddIcon />
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      ) : (
        <Row>
          <Col>
            <img
              style={{
                backgroundSize: "fit",
                height: "550px",
                width: "100%",
                backgroundRepeat: "fit",
              }}
              src="./assets/img.jpg"
              alt=""
            />
          </Col>
        </Row>
      )}
    </div>
  );
};
export default AddNote;
