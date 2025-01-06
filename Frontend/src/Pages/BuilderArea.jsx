import React, { useContext, useState } from 'react';
import { Button, Input, Box, Text, List, ListItem } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css';
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";
import axios from 'axios';

const BuilderArea = (props) => {
    const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext);

    const [file, setFile] = useState(null); // For file upload
    const [response, setResponse] = useState(null); // For storing backend response
    const [isAnalyzing, setIsAnalyzing] = useState(false); // Loading state for analysis

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent);
    };

    // File selection handler
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Function to analyze the resume via API call
    const handleAIResumeAnalyze = async () => {
        if (!file) {
            alert("Please upload a resume file first!");
            return;
        }

        const formData = new FormData();
        formData.append('resume', file);

        setIsAnalyzing(true); // Show loading indicator

        try {
            const res = await axios.post('http://localhost:5000/analyze-resume', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setResponse(res.data); // Save response
        } catch (error) {
            console.error("Error analyzing resume:", error);
            alert("Failed to analyze resume. Please try again.");
        } finally {
            setIsAnalyzing(false); // Hide loading indicator
        }
    };

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}
            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border'>
                    {props.theme}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handlePrint}>Print</Button>
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
                
                {/* File Input for Resume Upload */}
                <Box className="mx-2 my-5">
                    <Input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                    <Button mt={2} colorScheme={'teal'} variant={'outline'} onClick={handleAIResumeAnalyze}>
                        {isAnalyzing ? "Analyzing..." : "AI Resume Analyze"}
                    </Button>
                </Box>
            </div>

            {/* Display the Analysis Results */}
            {response && (
                <Box mt={5} p={5} borderWidth="1px" borderRadius="md">
                    <Text fontSize="xl" fontWeight="bold">Resume Score: {response.score}</Text>
                    <Text fontSize="lg" mt={3}>Recommendations:</Text>
                    <List spacing={2}>
                        {response.recommendations.map((rec, index) => (
                            <ListItem key={index}>- {rec}</ListItem>
                        ))}
                    </List>
                </Box>
            )}

            <Footer />
        </>
    );
};

export default BuilderArea;

