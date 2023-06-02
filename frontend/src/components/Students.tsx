import {
    Avatar,
    Box,
    Button,
    Divider,
    Modal,
    ModalContent,
    ModalOverlay,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr,
    useDisclosure,
} from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom';
import StudentModal from '../modals/student';

const personnes = [
    {name: 'jean Abrahmov', email: "jean Abrahmov@gmail.com", src: 'https://bit.ly/abramol'},
    {name: 'Kola Tioluwani', email: "Kola Tioluwani@gmail.com", src: 'https://bit.ly/tioluwani-kolawole'},
    {name: 'Kent Dodds', email: "Kent Dodds@gmail.com", src: 'https://bit.ly/kent-c-dodds'},
    {name: 'Ryan Florence', email: "Ryan Florence@gmail.com", src: 'https://bit.ly/ryan-florence'},
    {name: 'Prosper Otemuyiwa', email: "Prosper Otemuyiwa@gmail.com", src: 'https://bit.ly/prosper-baba'},
    {name: 'Christian Nwamba', email: "Christian Nwamba@gmail.com", src: 'https://bit.ly/code-beast'},
    {name: 'Segun Adebayo', email: "Segun Adebayo@gmail.com", src: 'https://bit.ly/sage-adebayo'}
];

const Students = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    // const history = useHistory();

    const addStudent = async (data) => {
        // const result = await post("classroom/" + getItem("user").id, data)
        // console.log(result)
        // onClose();
        // history.push(`/classroom/${result.id}`);
    }

    const handleSubmit = (values) => {
        addStudent(values)
    };

    return (
        <>
            <Box>
                <p style={{color: "#41a090", fontWeight: 700, fontSize: 20}}>Teachers</p>
                <Divider style={{margin: "15px 0 15px"}}/>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div style={{display: "flex", fontWeight: "700", flexDirection: "row", alignItems: "center"}}>
                        <Avatar size='2xl' marginRight={10} name='Dan Abrahmov' src='https://bit.ly/dan-abramov'/>
                        <p style={{margin: 0}}>Dan Abrahmov</p>
                    </div>
                    <p style={{color: "grey"}}>Dan Abrahmov@gmail.com</p>
                </div>
                <p style={{color: "#41a090", fontWeight: 700, fontSize: 20}}>Students</p>
                <Divider style={{margin: "20px 0 15px"}}/>
                <TableContainer>
                    <Table size='sm'>
                        <Tbody>
                            {personnes.map((p) => (
                                <Tr key={p.email}>
                                    <Td width={20}><Avatar name={p.name} src={p.src}/></Td>
                                    <Td fontWeight={700}>{p.name}</Td>
                                    <Td style={{textAlign: "end", color: "grey"}}>{p.email}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <br/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    colorScheme="custom"
                    color="#FFF"
                    bgColor="#66B0F0"
                    rounded="full"
                    size="md"
                    height="30px"
                    width="120px"
                    onClick={() => {
                        onOpen();
                    }}
                >
                    Add Student
                </Button>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <StudentModal onClose={onClose} handleSubmit={handleSubmit}/>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Students;
