import React from "react";
import { Box, Heading, SimpleGrid, Button, Text } from "@chakra-ui/react";

const testData = [
  { title: "Mathematics Mock Test", duration: "60 mins", questions: 50 },
  { title: "Science Mock Test", duration: "45 mins", questions: 40 },
  { title: "History Mock Test", duration: "30 mins", questions: 30 },
  { title: "English Grammar Test", duration: "40 mins", questions: 35 },
];

const Tests = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Available Mock Tests</Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {testData.map((test, index) => (
          <Box key={index} p={5} bg="gray.700" borderRadius="md" color="white">
            <Text fontSize="lg" fontWeight="bold">{test.title}</Text>
            <Text>Duration: {test.duration}</Text>
            <Text>Questions: {test.questions}</Text>
            <Button mt={3} colorScheme="blue">Start Test</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Tests;
