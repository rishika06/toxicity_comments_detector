import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function InputField({ comment, setComment, handleClassify, handleKeyDown }) {
  return (
    <div className="ttd__input-wrapper">
      <TextField
        type="text"
        placeholder="ex: you suck"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="ttd__textfield"
        onKeyDown={handleKeyDown}
      />
      <Button variant="contained" color="success" onClick={handleClassify}>
        +
      </Button>
    </div>
  );
}

export default InputField;
