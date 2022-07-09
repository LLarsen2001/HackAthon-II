import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

const MyLink = ({ url, children }) => {
    return (
        <>
            <LinkContainer to={url}>
                <Nav.Link > {children}</Nav.Link>
            </LinkContainer>
        </>
    )
};


const BuildingNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const renderNavItems = () => {
        if (user) {
            return (
                <>

                    <MyLink url='/posts' >Posts</MyLink>







                    <Nav.Link as={"li"} onClick={logout}>Logout</Nav.Link>

                </>


            );
        } else {
            return (
                <>






                    <MyLink url="/signup">Sign Up</MyLink>





                </>
            );
        }
    };
    return (

        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="/home">Twitter</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <MyLink url="/login">Login</MyLink>

                        {renderNavItems()}
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};
export default BuildingNavbar;