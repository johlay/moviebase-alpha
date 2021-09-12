import { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

const SearchField = ({ handleSubmit }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Form
        onSubmit={(e) => {
          handleSubmit(e, searchText);

          // reset search text.
          setSearchText("");
        }}
        className="mx-auto my-5"
      >
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Look for movie..."
            aria-label="search-text"
            aria-describedby="search-text"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="dark" type="submit">
            Search
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default SearchField;
