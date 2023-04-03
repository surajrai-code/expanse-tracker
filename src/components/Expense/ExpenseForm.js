import React, { Fragment, useEffect, useRef } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function ExpenseForm(props) {
  const amountInputRef = useRef();
  const descriptionInputRef = useRef();
  const categoryInputRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    const expenseData = {
      Amount: amountInputRef.current.value,
      Description: descriptionInputRef.current.value,
      Category: categoryInputRef.current.value,
    };
    amountInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  };
  return (
    <Fragment>
      <Container
        className="p-3 my-3  text-white"
        style={{ backgroundColor: "#b3adba" }}
      >
        <Form onSubmit={submitHandler} id="expenses">
          <Row>
            <Col className="form-control">
              <input
                type="number"
                placeholder="Amount"
                name="Amount"
                ref={amountInputRef}
                required
              ></input>
            </Col>

            <Col className="form-control">
              <textarea
                style={{ height: "25px" }}
                type="text"
                placeholder="Description"
                name="Description"
                ref={descriptionInputRef}
                required
              ></textarea>
            </Col>

            <Col className="form-control">
              <select ref={categoryInputRef} name="Category" required>
                <option>Food</option>

                <option>Petrol</option>

                <option>Clothes</option>

                <option>other..</option>
              </select>
            </Col>

            <Col className="mt-5">
              <Button type="submit" variant="success">
                Add New Expense
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Fragment>
  );
}

export default ExpenseForm;

