import Footer from '../components/Footer';
import Header from '../components/Header';
import { Button, Divider } from "@chakra-ui/react";
import {classrooms} from "../data/classrooms.js";
import {useParams} from "react-router-dom";


function AssignmentDetails() {
    let {id} = useParams();
    console.log(id)
    console.log(classrooms[0])
    const assignment=classrooms[0].assignments[0];
    return (
        <>
        <div style={{minHeight: "89vh",}}>
        <Header />
        <br />
            <br />
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: "center"
            }}>
                <div style={{ width: "1000px", }}>
                    <h3 style={{ fontWeight: '600', fontSize: "24px" }}>{assignment.title}</h3>
                    <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                        {assignment.teacher}  &#9679; {assignment.date}
                    </p>
                    <div style={{ height: '10px' }}></div>
                    <p style={{ fontSize: '16px', fontWeight: 'normal' }}>
                        {assignment.points} points
                    </p>
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                    <div style={{ width: "1000px", display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <div style={{ width: "900px" }}>
                            <pre >{assignment.description}</pre>
                        </div>
                    </div>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center"}}>
                    <Button colorScheme="custom" color="grey"
                    bgColor="#FFF"
                    borderWidth="1px" 
                    borderColor="grey" rounded="full"  type="submit"  my="4"  onClick={() => {
                    }}>Submit homework</Button>
                    </div>
                </div>
            </div></div>
        <Footer/>
        </>
    );
}

export default AssignmentDetails;
