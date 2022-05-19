import React, { useContext } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'
import Navtop from "./components/Navtop";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { AppCtx } from './contexts/DataContext';

const App = () => {

    const context = useContext(AppCtx);
    const { currNote, UpdateCurrNote } = { ...context }

    const updateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        UpdateCurrNote?.({ ...currNote, title: event.target.value, lastEdited: new Date() });
    }

    const updateBody = (event: React.ChangeEvent<HTMLInputElement>) => {
        UpdateCurrNote?.({ ...currNote, body: event.target.value, lastEdited: new Date() });
    }

    return (
        <div className="App">
            <Container fluid className="vh-100">
                <Row className="h-100">
                    <Col className="d-flex flex-column h-100">
                        <Row>
                            <Navtop />
                        </Row>
                        <Row className="flex-grow-1">
                            <Col xs={6} className="d-flex flex-column h-100 g-0">
                                <InputGroup>
                                    <FormControl className="h1 rounded-0 shadow-none border-0"
                                        value={currNote?.title || ""} onChange={updateTitle}
                                        style={{
                                            fontWeight: "500",
                                            lineHeight: "1.5",
                                            fontSize: "calc(1rem + 1vw)"
                                        }}
                                        placeholder="Title" />
                                </InputGroup>
                                <hr className="m-0" />
                                <InputGroup className="flex-grow-1">
                                    <FormControl className="rounded-0 shadow-none border-0"
                                        style={{ resize: "none" }}
                                        as="textarea"
                                        value={currNote?.body || ""}
                                        onChange={updateBody}
                                        placeholder="Start writing" />
                                </InputGroup>
                            </Col>
                            <Col xs={6} className="h-100 border">
                                <h1>{currNote?.title || ""}</h1>
                                <ReactMarkdown children={currNote?.body || ""} remarkPlugins={[remarkMath]}
                                    rehypePlugins={[rehypeKatex]} className="text-break py-2" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;