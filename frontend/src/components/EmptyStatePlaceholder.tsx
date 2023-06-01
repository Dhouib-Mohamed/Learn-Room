import { Box, Button, Image } from "@chakra-ui/react";
import image from "../assets/emptyState.png";
import {useHistory} from "react-router-dom";


function EmptyStatePlaceholder({type, user}) {
    const history = useHistory()

    let title ="No Courses"
    let descriptionText = "There are no courses in this classroom yet. Wait for your teacher to publish one.";
    if (user === "teacher") {
        descriptionText = "There are no courses in this classroom yet. Publish one.";
    }
    if(type==="task" || type==="assignment"){
        title="No Todos"
    }
    

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box borderWidth="1px" borderColor="#B7B7B7" borderRadius={"10px"} width={"90%"}  style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'  }}>
                  <br />
                    <Image
                        src={image}
                        borderBottomRadius='lg'
                        height={"100px"}
                    />
                    <br />
                    <p style={{fontSize:"20px" ,color:"#5D5D5D"}}>{title}</p>
                    <p style={{fontSize:"15px",color:"#747474"}}>{descriptionText}</p>
                    <br />
                    {user === "teacher" ? (
                        null
                    ) : (
                    <><Button  colorScheme="custom"color="#616161" bgColor="#C8C8C8" rounded="full" height={"30px"} size="md" onClick={() => {history.push("/home")}}>
                    Go home
                </Button>
                <br /></>
                )}
                </Box>
            </div>
        </>

    )
}
export default EmptyStatePlaceholder;