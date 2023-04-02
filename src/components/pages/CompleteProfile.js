import { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CompleteProfile() {
  let token = localStorage.getItem("token");
  const nameRef = useRef();
  const photourlRef = useRef();
  const [displayName, setDisplayName] = useState("");
  const [urlLink, setUrlLink] = useState("");

  const getSavedData = () => {
    let URL =
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB4eAcKhjMaxtHrq60AlEDI6Ace0n31ogg";

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        idToken: token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setDisplayName(data.users[0].displayName);
        setUrlLink(data.users[0].photoUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSavedData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    var enteredName = nameRef.current.value;
    var enteredUrl = photourlRef.current.value;

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB4eAcKhjMaxtHrq60AlEDI6Ace0n31ogg";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: token,
        displayName: enteredName,
        photoUrl: enteredUrl,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            if (data && data.error && data.error.message) {
              let errMessage = "Authentication Failed, " + data.error.message;
              throw new Error(errMessage);
            }
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div style={{ margin: "12%", paddingBottom: "20%" }}>
      <Button
        variant="danger"
        type="submit"
        style={{ justifyItems: "end", float: "right", marginBottom: "1%" }}
      >
        cancel
      </Button>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            ref={nameRef}
            defaultValue={displayName}
          />
          <Form.Text className="text-muted">
            We'll never share your Name with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Photo Url</Form.Label>
          <Form.Control
            type="text"
            placeholder="photo url"
            ref={photourlRef}
            defaultValue={urlLink}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default CompleteProfile;
