import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Feedback = () => {
    // Form Data
    // Customer Name
    // Email
    // Phone
    // All below 4 with options  (Excellent, good, fair, bad).
    // 1. Please rate the quality of the service you received from your host.
    // 2. Please rate the quality of your beverage.
    // 3. Was our restaurant clean?
    // 4. Please rate your overall dining experience.

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [error, setError] = useState(false);

    function refreshPage() {
        window.location.reload(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("name", name);
            data.append("email", email);
            data.append("phone", phone);
            data.append("question1", question1);
            data.append("question2", question2);
            data.append("question3", question3);
            data.append("question4", question4);
            const res = JSON.stringify(Object.fromEntries(data));

            if (localStorage.getItem("feedback1")) {
                const keyLength = Object.keys(localStorage).length;
                localStorage.setItem(`feedback${keyLength + 1}`, res);
            } else {
                localStorage.setItem("feedback1", res);
            }

            setError(false);
        } catch (err) {
            setError(true);
            console.log(err.message);
        }
        if (!error) {
            document.getElementById("success").style.display = "block";
        } else {
            document.getElementById("failure").style.display = "block";
        }
    };

    return (
        <Form onSubmit={handleSubmit} id="feedback">
            <h6>
                {" "}
                We are committed to providing you with the best dining
                experience possible, so we welcome your comments. Please fill
                out this questionnaire. Thank you.
            </h6>
            <Form.Group className="mb-3" controlId="customerName">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Form.Text className="text-muted">
                    We'll never share your personal details with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="customerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                    type="number"
                    required
                    placeholder="Contact Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Group>
            <br />
            <h6>
                Below are the following questions each with four options, please
                answer carefully.
            </h6>
            <br />
            <Form.Group className="mb-3" controlId="checkBoxForm1">
                <Form.Label>
                    Please rate the quality of the service you received from
                    your host.{" "}
                </Form.Label>
                {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        {["Excellent", "Good", "Fair", "Bad"].map(
                            (values, key) => (
                                <Form.Check
                                    inline
                                    label={values}
                                    name="question1"
                                    type={type}
                                    value={question1}
                                    id={`inline-${type}-${key}`}
                                    required
                                    key={key}
                                    onChange={(e) =>
                                        setQuestion1(
                                            e.target.parentNode.lastChild
                                                .textContent
                                        )
                                    }
                                />
                            )
                        )}
                    </div>
                ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="checkBoxForm2">
                <Form.Label>
                    Please rate the quality of your beverage.{" "}
                </Form.Label>
                {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        {["Excellent", "Good", "Fair", "Bad"].map(
                            (values, key) => (
                                <Form.Check
                                    inline
                                    label={values}
                                    name="question2"
                                    type={type}
                                    value={question2}
                                    id={`inline-${type}-${key}`}
                                    onChange={(e) =>
                                        setQuestion2(
                                            e.target.parentNode.lastChild
                                                .textContent
                                        )
                                    }
                                    required
                                    key={key}
                                />
                            )
                        )}
                    </div>
                ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="checkBoxForm3">
                <Form.Label>Was our restaurant clean? </Form.Label>
                {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        {["Excellent", "Good", "Fair", "Bad"].map(
                            (values, key) => (
                                <Form.Check
                                    inline
                                    required
                                    key={key}
                                    label={values}
                                    name="question3"
                                    type={type}
                                    value={question3}
                                    id={`inline-${type}-${key}`}
                                    onChange={(e) =>
                                        setQuestion3(
                                            e.target.parentNode.lastChild
                                                .textContent
                                        )
                                    }
                                />
                            )
                        )}
                    </div>
                ))}
            </Form.Group>
            <Form.Group className="mb-3" controlId="checkBoxForm4">
                <Form.Label>
                    Please rate your overall dining experience.{" "}
                </Form.Label>
                {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        {["Excellent", "Good", "Fair", "Bad"].map(
                            (values, key) => (
                                <Form.Check
                                    inline
                                    label={values}
                                    name="question4"
                                    type={type}
                                    value={question4}
                                    id={`inline-${type}-${key}`}
                                    required
                                    key={key}
                                    onChange={(e) =>
                                        setQuestion4(
                                            e.target.parentNode.lastChild
                                                .textContent
                                        )
                                    }
                                />
                            )
                        )}
                    </div>
                ))}
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
            <h1 id="success"> Thank you for completing the information </h1>
            <Button variant="success" id="success" onClick={refreshPage}>
                Click to refresh
            </Button>
            <Button variant="danger" id="failure" onClick={refreshPage}>
                Feedback Not Recieved, click to refresh
            </Button>

            <br />
            <br />
            <br />
            <br />
        </Form>
    );
};

export default Feedback;
