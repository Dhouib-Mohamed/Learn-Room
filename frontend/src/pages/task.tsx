import Footer from '../components/Footer';
import Header from '../components/Header';
import TaskButton from '../components/TaskButton';
import {Divider} from "@chakra-ui/react";

const teacher = "Aymen Sellaouti";
const date = "25 mars 2023";
const points = "100";
const mathHomework = `
Solve the following quadratic equations using the quadratic formula:
a) 3x^2 - 5x + 2 = 0
b) 2x^2 + 7x - 10 = 0
c) x^2 + 4x + 4 = 0

Determine the nature of the roots for each of the equations in question 1.

Solve the quadratic equation 4x^2 - 12x + 9 = 0 by factoring.

Solve the quadratic equation x^2 + 6x + 9 = 0 by completing the square.

For the equation 2x^2 + kx + 3 = 0, find the values of k for which the equation has real roots.

Solve the quadratic equation 2(x - 1)^2 - 3 = 0 and express the solutions in the simplest radical form.

Create three quadratic equations with distinct real roots.

Research and write a short explanation of the significance of the discriminant in quadratic equations.

Here is a link I found useful: https://www.youtube.com/watch?v=IlNAJl36-10

Please don't hesitate to contact me if you need help.
`;

function Task() {
    return (
        <>
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
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center"}}>
                    <TaskButton/>

                    </div>
                    

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Task;
