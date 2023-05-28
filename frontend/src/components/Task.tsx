import {useHistory} from "react-router-dom";
import {Box, Button, Card, CardBody, Text} from '@chakra-ui/react';

const Task = ({id,title}) => {
    const history = useHistory()
    return (
      <Box  onClick={() => {
          history.push(`/classroom/${id}`)
      }} >
          <Card style={{marginBottom:5}}>
              <CardBody display={"flex"} justifyContent={"space-between"} width={"100%"}  flexDirection={"row"} >
                  <Text>{title}</Text>
                  <Button >view</Button>
              </CardBody>
          </Card>

      </Box>

    );
};


export default Task ;