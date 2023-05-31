import {Avatar, Box, Divider, Table, TableContainer, Tbody, Td, Tr,} from '@chakra-ui/react';
// import {useHistory} from "react-router-dom";
import { Button } from "@chakra-ui/react";

const personnes= [{name:'jean Abrahmov' , email:"jean Abrahmov@gmail.com" , src:'https://bit.ly/abramol' },
    {name: 'Kola Tioluwani' , email:"Kola Tioluwani@gmail.com", src: 'https://bit.ly/tioluwani-kolawole'} ,
    {name:'Kent Dodds' , email:"Kent Dodds@gmail.com", src:'https://bit.ly/kent-c-dodds'} ,
    {name:'Ryan Florence', email:"Ryan Florence@gmail.com" , src:'https://bit.ly/ryan-florence'} ,
    {name:'Prosper Otemuyiwa', email:"Prosper Otemuyiwa@gmail.com" , src:'https://bit.ly/prosper-baba'} ,
    {name:'Christian Nwamba' , email:"Christian Nwamba@gmail.com", src:'https://bit.ly/code-beast'} ,
    {name:'Segun Adebayo', email:"Segun Adebayo@gmail.com" , src:'https://bit.ly/sage-adebayo' }
]
const Students = () => {
    // const history = useHistory()
    return (
        <>
        <Box>
            <p style={{color : "#41a090", fontWeight:700 , fontSize:20}} > Teachers</p>
            <Divider style={{margin:"15px 0 15px"}}/>
            <div style={{display:"flex" , flexDirection:"row", alignItems:"center" , justifyContent:"space-between"}} >
             <p style={{display:"flex" ,fontWeight:"700" , flexDirection:"row", alignItems:"center"}}>  <Avatar size='2xl'  marginRight={10} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                 <p >Dan Abrahmov</p></p>
                <p style={{color:"grey"}}>Dan Abrahmov@gmail.com</p>
            </div>
           <p style={{color : "#41a090", fontWeight:700 , fontSize:20, marginTop:"15px"}} > Students</p>
            <Divider  style={{margin:"20px 0 15px"}}/>
            <TableContainer>
                <Table size='sm'>

                    <Tbody>{personnes.map((p)=>
                       ( <Tr>
                            <Td width={20}><Avatar name={p.name} src={p.src}  /></Td>
                            <Td fontWeight={700} >{p.name}</Td>
                            <Td style={{textAlign:"end", color:"grey"}}>{p.email}</Td>
                        </Tr>)
                    )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
        <br />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Button colorScheme="custom" color="#FFF" bgColor="#66B0F0" rounded="full" size="md" 
                height="30px"
                width="120px" onClick={() => {
                }}
            >Add Student</Button>
            </div>
        </>
    );
};


export default Students;