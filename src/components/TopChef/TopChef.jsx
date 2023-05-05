/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useLoaderData } from 'react-router-dom';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import ChefList from '../ChefList/ChefList';

function TopChef() {
    const data = useLoaderData();

    if (!data) {
        return (
            <Container className='mt-5 mb-5'>
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </Container>
        );
    }

    return (
        <Container className='mt-5 mb-5'>
            <h2 className='mt-5 mb-5' style={{color:'green',fontWeight:'800'}}>TOP CHEFS</h2>
            <Row xs={1} sm={2} md={3} className="g-4">
                {data.data.map((chefData) => (
                    <Col key={chefData.id}>
                        <ChefList chefData={chefData} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TopChef;

