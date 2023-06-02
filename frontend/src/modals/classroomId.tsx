import {
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    ModalHeader
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";

export default function ClassroomIdModal({handleSubmit, onClose, values = {id: ''}}) {
    return (
        <><ModalHeader>Add Classroom</ModalHeader><ModalCloseButton/><Formik
            initialValues={values}
            onSubmit={handleSubmit}
        >
            {(formikProps) => (
                <Form>
                    <ModalBody>
                        <Field name="id">
                            {({field}) => (
                                <FormControl>
                                    <FormLabel>Classroom's ID</FormLabel>
                                    <Input {...field} />
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
                        <Button onClick={onClose} rounded="full" colorScheme="custom" color="grey" bgColor="#FFF"
                                borderWidth="1px" borderColor="grey" ml={4}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            )}
        </Formik></>
    )
}