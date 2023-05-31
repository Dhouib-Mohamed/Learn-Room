import { Button, Divider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
const teacher = "Aymen Sellaouti";
const date = "25 mars 2023";
const points = "100";
const mathHomework = `NestJs Practice:
    1- create NestJs project
    2- struggle
    3- cry

Send your work anyway `;
export default function Assignment() {
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
                    <h3 style={{ fontWeight: '600', fontSize: "24px" }}>Solving Quadratic Equations</h3>
                    <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                        {teacher}  &#9679; {date}
                    </p>
                    <div style={{ height: '10px' }}></div>
                    <p style={{ fontSize: '16px', fontWeight: 'normal' }}>
                        {points} points
                    </p>
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                    <div style={{ width: "1000px", display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <div style={{ width: "900px" }}>
                            <pre >{mathHomework}</pre>
                        </div>
                    </div>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center"}}>
                    <Button colorScheme="custom" color="grey"
                    bgColor="#FFF"
                    borderWidth="1px" 
                    borderColor="grey" rounded="full"  type="submit"  my="4"  onClick={() => {
                    }}>Upload homework</Button>
                    </div>
                </div>
            </div></div>
        <Footer/>
        </>
    )
}