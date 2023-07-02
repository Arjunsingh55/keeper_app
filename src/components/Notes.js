import DeleteIcon from "@mui/icons-material/Delete";
import { Container } from "react-bootstrap";

const Notes = (prop) => {
  function handleDelete() {
    prop.onDelete(prop.id);
  }
  return (
    <div className="note m-4">
      <Container className="">
        <h1 className="my-3">{prop.title}</h1>

        <p>{prop.content}</p>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </Container>
    </div>
  );
};
export default Notes;
