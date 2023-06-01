import Footer from '../components/Footer';
import Header from '../components/Header';
import {Button, Divider, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure} from "@chakra-ui/react";
import {classrooms} from "../data/classrooms.js";
import {useParams} from "react-router-dom";
import {getItem} from "../../utils/localStorage";
import {AiOutlineMore} from "react-icons/ai";


function AssignmentDetails() {
    let {id} = useParams();
    console.log(id)
    console.log(classrooms[0])
    const assignment=classrooms[0].assignments[0];
    const { isOpen, onOpen, onClose } = useDisclosure();
    const deleteClassroom = async () => {
        // const response=  await remove ("classroom/"+id)
        // setItem("user",response)
        // history.push('/home');
    }

    const editClassroom = async (data) => {
        // const result = await patch("classroom/" + id, data)
        // console.log("res:", result)
        // setItem("user", result)
        // onClose();
        // setUpdate(!update)
    }

    const handleSubmit = (values) => {

        editClassroom(values)

    };


    return (
        <>
        <div style={{minHeight: "89vh",}}>
        <Header />

            <Flex style={{
                flexDirection:"column",  justifyContent: "center" , margin:"20px 100px" }}>

                  <Flex flexDirection={"row"}>
                      <div style={{width:"99%"}}>
                      <h3 style={{ fontWeight: '600', fontSize: "24px" }}>{assignment.title}</h3>
                    <p style={{ fontSize: '15px', fontWeight: 'lighter' }}>
                        {assignment.teacher}  &#9679; {assignment.date}
                    </p>
                    <div style={{ height: '10px' }}></div>
                    <p style={{ fontSize: '16px', fontWeight: 'normal' }}>
                        {assignment.points} points
                    </p> </div>

                    {getItem("user").user ?  <Menu flip={true} direction={"rtl"} >
                        <MenuButton
                            fontSize={"25px"}
                            style={{marginTop:2 }}
                            as={IconButton}
                            aria-label='Options'
                            icon={<AiOutlineMore/>}
                            variant='outline'
                            border={false}
                        />
                        <MenuList  style={{fontSize:"15px"}}>
                            <MenuItem onClick={()=> {onOpen()

                            }} >Edit Classroom</MenuItem>

                            <MenuItem onClick={deleteClassroom} >Delete Classroom</MenuItem>

                        </MenuList>

                    </Menu> : null }


                  </Flex>
                    <Divider width="100%" my={4} borderColor={"#A6A6A6"} borderWidth="0.75px" />

                    <div style={{ width: "100%" }}>
                            <pre >{assignment.description}</pre>
                    </div>
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center"}}>
                    <Button colorScheme="custom" color="grey"
                    bgColor="#FFF"
                    borderWidth="1px" 
                    borderColor="grey" rounded="full"  type="submit"  my="4"  onClick={() => {
                    }}>Submit homework</Button>
                    </div>

                </Flex>
            </div>
        <Footer/>
        </>
    );
}

export default AssignmentDetails;
