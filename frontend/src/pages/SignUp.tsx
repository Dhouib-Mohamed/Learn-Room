import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Radio,
    RadioGroup,
    Stack,
    Text
} from '@chakra-ui/react';
import signin from "../assets/signin.png";
import Footer from '../components/Footer';
import logo from "../assets/logo.png";
import {useHistory} from "react-router-dom";
import {Formik, Form, Field} from 'formik';
import {post} from "../helpers/helpers";
import {setItem} from "../../utils/localStorage";

function SignUp() {
    const history = useHistory();

    const handleSubmit = async (values) => {
        try {
            const result = await post("user/signup", {
                name: values.name + " " + values.surname,
                email: values.email,
                password: values.password,
                user: values.role === "teacher"
            });
            if (result.id) {
                setItem("user", result);
                history.push("/home");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div style={{height: '800px', display: 'flex', alignItems: 'center'}}>
                <div style={{flex: 2, display: "flex", alignItems: "center", justifyContent: 'center'}}>

                    <Box textAlign="center">

                        <div style={{display: "flex", alignItems: "center", marginBottom: "100px"}}>
                            <img src={logo} alt="Logo" style={{width: "60px", marginRight: "20px"}}/>
                            <Heading>LearnRoom</Heading>
                        </div>

                        <Formik
                            initialValues={{
                                name: '',
                                surname: '',
                                email: '',
                                password: '',
                                role: "student",
                            }}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <Field name="name">
                                    {({field}) => (
                                        <FormControl id="name" my="4">
                                            <FormLabel>Name:</FormLabel>
                                            <Input {...field} type="text"/>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="surname">
                                    {({field}) => (
                                        <FormControl id="surname" my="4">
                                            <FormLabel>Surname:</FormLabel>
                                            <Input {...field} type="text"/>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="email">
                                    {({field}) => (
                                        <FormControl id="email" my="4">
                                            <FormLabel>Email:</FormLabel>
                                            <Input {...field} type="email"/>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="password">
                                    {({field}) => (
                                        <FormControl id="password" my="4">
                                            <FormLabel>Password:</FormLabel>
                                            <Input {...field} type="password"/>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="role">
                                    {({field, form}) => (
                                        <FormControl as="fieldset" my="4">
                                            <FormLabel as="legend">User Type:</FormLabel>
                                            <RadioGroup
                                                {...field}
                                                onChange={(value) => form.setFieldValue("role", value)}
                                            >
                                                <Stack direction="row">
                                                    <Radio value="student">Student</Radio>
                                                    <Radio value="teacher">Teacher</Radio>
                                                </Stack>
                                            </RadioGroup>
                                        </FormControl>
                                    )}
                                </Field>


                                <Button
                                    colorScheme="custom"
                                    color="white"
                                    bgColor="#FF796E"
                                    rounded="full"
                                    type="submit"
                                    my="4"
                                >
                                    Signup
                                </Button>
                            </Form>
                        </Formik>

                        <Text fontSize={'14px'}>
                            Already have an account? <Link fontWeight={'bold'} href="/signin">Sign in</Link>
                        </Text>
                    </Box>
                </div>

                <div style={{flex: 3}}>
                    <img src={signin} alt="landing image" style={{width: '1000px'}}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default SignUp;
