import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { usersActions } from "../Actions/userActions";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import EditIcon from "../Assets/images/file.png";



const CardBox = ({user}) => {

    const [fixed, setFixed] = useState(true);
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [stateAndCity, setStateAndCity] = useState();

    const dispatch = useDispatch();


    const updateContactInfo = () => {
        if( !fixed ) {
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const stateAndCity = document.getElementById("stateAndCity").value;

            setEmail(email);
            setPhone(phone);
            setStateAndCity(stateAndCity);


            const commaIndex = stateAndCity.indexOf(",");
            const state = stateAndCity.substring(0, commaIndex);
            const city = stateAndCity.substring(commaIndex+2);
            const updatedUser = {
                name: {
                    first: user.name.first,
                    last: user.name.last,
                },
                email: email,
                phone: phone,
                state: state,
                city: city
            };

            dispatch(usersActions.updateUser(updatedUser));
        }

        setFixed(!fixed);
    };

    const setStateHook = id => {
        const elementValue = document.getElementById(id).value;

        if( elementValue ) {
            switch(id) {
                case "email":
                    setEmail(elementValue);
                    break;

                case "phone":
                    setPhone(elementValue);
                    break;

                case "stateAndCity":
                    setStateAndCity(elementValue);
                    break;

                    default:
                        break;
            }
        }
    };


    return (
        <Col xs="12" sm="6" lg="4" xl="3">
            <Card>
                <Card.Header className="position-relative padding-on-header text-center bg-primary text-white fs-4">
                    <div className="position-absolute edit-icon-width">
                        <img src={EditIcon} alt="" className="w-100 d-block p-0 m-0" onClick={ updateContactInfo }/>
                    </div>
                    <span>{user.name.first} {user.name.last}</span>
                </Card.Header>

                <div className="d-flex justify-content-center position-absolute w-100 image-container-position">
                    <img src={user.picture.large} alt="" className="img-fluid rounded-circle" />
                </div>

                <Card.Body className="text-center card-body-position text-muted">
                    { fixed && <>
                            <div className="pb-3">{email || user.email}</div>
                            <div className="pb-3">{phone || user.phone}</div>
                            <div className="pb-3">{stateAndCity || (`${user.location.state}, ${user.location.city}`)}</div>
                        </> 
                    }
                    { !fixed && <>
                            <Form.Control id="email" type="email" placeholder={email || user.email} className="border-0" onBlur={() => setStateHook("email")}/>
                            <Form.Control id="phone" placeholder={phone || user.phone} onBlur={() => setStateHook("phone")}/>
                            <Form.Control id="stateAndCity" placeholder={stateAndCity || (`${user.location.state}, ${user.location.city}`)} onBlur={() => setStateHook("stateAndCity")}/>
                        </>
                    }
                </Card.Body>
            </Card>
    </Col>
    );
};

export default CardBox;