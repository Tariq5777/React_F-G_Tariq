import { Navbar as BootstrapNavbar, Container, Button } from "react-bootstrap";

const Navbar = ({tablePresent}) => {

    const handleFormButton = () => {
        const tableData = document.getElementById("tableData")
        tableData.style.display = "none";
        const formId = document.getElementById("feedback")
        formId.style.display = "block";
        
    }
    
    const handleTable = () => {
        const formId = document.getElementById("feedback")
        formId.style.display = "none";
        const tableData = document.getElementById("tableData")
        tableData.style.display = "block";
    }

    return (
        <BootstrapNavbar bg="dark">
            <Container>
                <BootstrapNavbar.Brand href="#home">
                    <Button variant="light" onClick = {handleFormButton}>Form</Button>
                </BootstrapNavbar.Brand>
                {tablePresent && 
                <BootstrapNavbar.Brand href="#table">
                    <Button variant="light" onClick={handleTable}>Table</Button>
                </BootstrapNavbar.Brand>
                }
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
