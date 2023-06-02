import {
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    ModalHeader,
    Textarea
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";

export default function AssignmentModal({
                                            handleSubmit,
                                            onClose,
                                            values = {name: '', content: '', deadline: undefined}
                                        }) {
    return (
        <><ModalHeader>Add New Assignments</ModalHeader><ModalCloseButton/><Formik
            initialValues={values}
            onSubmit={handleSubmit}
        >
            {(formikProps) => (
                <Form>
                    <ModalBody>
                        <Field name="name">
                            {({field}) => (
                                <FormControl>
                                    <FormLabel>Assignment Title</FormLabel>
                                    <Input {...field} />
                                </FormControl>
                            )}
                        </Field>
                        <Field name="content">
                            {({field}) => (
                                <FormControl>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea {...field} />
                                </FormControl>
                            )}
                        </Field>
                        <Field name="deadline">
                            {({field}) => (
                                <FormControl>
                                    <FormLabel>Deadline</FormLabel>
                                    <input {...field} type={"date"}/>
                                </FormControl>
                            )}
                        </Field>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            type="submit"
                            isLoading={formikProps.isSubmitting}
                            rounded="full" colorScheme="custom" color="#FFF" bgColor="#66B0F0"
                        >
                            Submit
                        </Button>
                        <Button onClick={onClose}  rounded="full" colorScheme="custom" color="grey" bgColor="#FFF" borderWidth="1px" borderColor="grey" ml={4}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            )}
        </Formik></>
    )
}