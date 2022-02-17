import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../Selectors";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBox from "./CardBox";
import { userFiltering, orderByName } from "../Helpers/userHelper";
import { FloatingLabel } from "react-bootstrap";



const Dashboard = () => {

    const users = useSelector(getUsers);
    const [filteredUsers, setFilteredUsers] = useState();
    

    return (
        <Container fluid="lg">
            <h1 data-testid="title" className="my-3 text-center">USERS</h1>

            <Form data-testid="search-form" onSubmit={ e => setFilteredUsers( () => userFiltering(e, users) )}>
                <Row className="gx-0"> 
                    <Col >                
                        <FloatingLabel label="Search By Name">
                            <Form.Control data-testid="full-name-input" as="input" placeholder="Javier Monardo"/>
                        </FloatingLabel>
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary" type="submit" className=" d-block h-100 px-2 px-sm-3">Search</Button>
                    </Col>
                </Row>

                
                <Row className="mt-3">
                    <Col>
                        <Button variant="info" onClick={ () => setFilteredUsers(orderByName(filteredUsers || users)) }>Order by ascending last name</Button>
                    </Col>
                </Row>
            </Form>

            <Row className="mt-4 gy-4">
                { !filteredUsers && users && users.map( user => <CardBox user={user} key={user.login.uuid} /> ) }
                { filteredUsers && filteredUsers.map( user => <CardBox user={user} key={user.login.uuid} /> ) }     
            </Row>
        </Container>
    );
};

export default Dashboard;