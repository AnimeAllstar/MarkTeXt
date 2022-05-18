import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'
import {Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

function App() {

    const [input, setInput] = React.useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return (
        <div className="App">
            <Container fluid className="vh-100">
                <Row className="h-100">
                    <Col className="h-100 w-50 g-0">
                        <InputGroup className="h-100">
                            <FormControl className="rounded-0 shadow-none" style={{resize: "none"}} as="textarea"
                                         value={input} onChange={handleChange}/>
                        </InputGroup>
                    </Col>
                    <Col className="h-100 w-50">
                        <ReactMarkdown children={input} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;
