import logo from './logo.svg';
import './App.css';
import AddNewTask from './components/AddNewTask'
import TaskList from './components/TaskList';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';



function App() {

  const tasks = useSelector(state => state.serviceList)
  console.log(tasks)
  return (
    <Container className="main-app-container">
       <Row className="mb-4">
        <Col className="mt-4">
          <AddNewTask />
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col md={12}>
          <h4>Список работ</h4>
        </Col>
         <Col>
          <TaskList tasks={ tasks } />
        </Col>
        </Row>
    </Container>
  );
}

export default App;
