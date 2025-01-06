// FeedbackForm.jsx
import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast } from '@chakra-ui/react';
import emailjs from 'emailjs-com';

export default function FeedbackForm() {
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS setup
        emailjs.sendForm('service_m63t1a7', 'template_cqrwv08', e.target, '1nFT5Au17M0L3_ahA')
            .then((result) => {
                console.log(result.text);
                toast({
                    title: "Feedback sent.",
                    description: "Thank you for your feedback!",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }, (error) => {
                console.log(error.text);
                toast({
                    title: "Error sending feedback.",
                    description: "Please try again later.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            });
        
        // Optionally reset the form
        e.target.reset();
    };

    return (
        <Box as="form" p={5} borderWidth="1px" borderRadius="lg" onSubmit={handleSubmit}>
            <VStack spacing={4}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" name="name" />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" />
                </FormControl>
                <FormControl id="message" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea name="message" />
                </FormControl>
                <Button colorScheme="blue" type="submit">Submit</Button>
            </VStack>
        </Box>
    );
}
