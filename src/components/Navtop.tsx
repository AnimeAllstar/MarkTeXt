import { Container, Nav, Navbar } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { PlusCircle, ThreeDots } from 'react-bootstrap-icons';
import { useContext } from 'react';
import { AppCtx } from '../contexts/DataContext';

const Navtop = () => {

    const context = useContext(AppCtx);
    const { addNewNote } = { ...context };

    return (
        <Navbar bg="dark" expand="lg" className="h-100">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#" className="text-light">
                        <Sidebar>
                            <ThreeDots size={24} />
                        </Sidebar>
                    </Nav.Link>
                    <Nav.Link href="#" className="text-light">
                        <PlusCircle size={24} onClick={addNewNote} />
                    </Nav.Link>
                </Nav>
                <Navbar.Brand href="#" className="ms-auto text-light fw-bold">MarkTeXt</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navtop;