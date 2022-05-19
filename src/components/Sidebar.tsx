import { cloneElement, useContext, useState } from 'react';
import { ListGroup, Offcanvas } from 'react-bootstrap';
import { AppCtx } from '../contexts/DataContext';

const Sidebar = ({ children }: { children: any }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const context = useContext(AppCtx);
    const { currNote, switchCurrNote } = { ...context };
    const notes = context?.notes || {};

    const switchActiveNote = (key: string) => {
        switchCurrNote?.(key);
    }
    return (
        <>
            {cloneElement(children, { onClick: handleShow })}

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Notes</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    <ListGroup variant="flush" className="border-bottom">
                        {Object.keys(notes).map((key) => (
                            <ListGroup.Item key={key} action active={currNote?.id === key ? true : false}
                                className="py-3 lh-sm" onClick={() => switchActiveNote(key)}>
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    <strong className="mb-1 me-1">{notes[key].title}</strong>
                                    <small>{notes[key]?.lastEdited?.toDateString()}</small>
                                </div>
                                <div className="col-10 mb-1 small">
                                    {notes[key].body}
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;