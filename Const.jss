import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";

const Search = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.openbrewerydb.org/v1/breweries?per_page=10")
            .then((res) => setData(res.data));
    }, []);

    const navigate = useNavigate();

    const cardStyle = {
        width: '18rem',
        border: '2px solid #4CAF50',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        backgroundColor: '#f1f1f1',
        marginBottom: '20px',
    };

    const cardTextStyle = {
        fontSize: '16px',
        color: '#333',
        marginBottom: '5px',
    };

    return (
        <Container className="mt-5">
            <Row>
                {data.map((item, index) => (
                    <Col xs="4" className="mt-3" key={index}>
                        <Card 
                            onClick={() => navigate("/det", { state: item })}
                            style={cardStyle}
                        >
                            <CardBody>
                                <CardTitle tag="h5" style={cardTextStyle}>{item.name}</CardTitle>
                                <CardText style={cardTextStyle}>{item.brewery_type}</CardText>
                                <CardText style={cardTextStyle}>{item.address_1}</CardText>
                                <CardText style={cardTextStyle}>{item.city}</CardText>
                                <CardText style={cardTextStyle}>{item.state_province}</CardText>
                                <CardText style={cardTextStyle}>{item.country}</CardText>
                                <CardText style={cardTextStyle}>{item.postal_code}</CardText>
                                <CardText style={cardTextStyle}>{item.phone}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Search;
