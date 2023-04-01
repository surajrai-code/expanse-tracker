import React from 'react'
import { Form,Button, Container} from 'react-bootstrap'
const SignUp = () => {
  return (
    <div style={{textAlign:'center' , margin:'5rem'}}>
   
     <Form>
    <Container >
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <input type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <input type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Confirm Password</Form.Label>
        <input type="password" placeholder=" Confirm Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
    </Container><br></br>
      <Button variant="primary" type="submit">
        HAVE AN ACCOUNT? LOGIN
      </Button>
    </Form>
    
    </div>
  )
}

export default SignUp;