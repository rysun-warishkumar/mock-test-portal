import React, { useState, useEffect } from "react";
import { 
  Box, Heading, Text, RadioGroup, Stack, Radio, Button, Input, Progress, useToast 
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// Mock Questions Data
const mockQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Hemingway", "Tolkien", "Dickens"],
    correctAnswer: "Shakespeare",
  },
];

const TestAttempt = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [userName, setUserName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);

  const currentQuestion = mockQuestions[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft === 0) {
      toast({
        title: "Time’s up!",
        description: "Moving to the next question.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      handleNext(); // Auto-move to next question when time runs out
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleNext = () => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const updatedResponses = [
      ...responses,
      {
        question: currentQuestion.question,
        selectedAnswer,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect,
      },
    ];
    setResponses(updatedResponses);

    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedAnswer("");
    setTimeLeft(60); // Reset timer for next question

    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Ensure all responses are stored before navigating
      const finalScore = score + (isCorrect ? 1 : 0);

      const resultData = {
        userName,
        score: finalScore,
        total: mockQuestions.length,
        responses: updatedResponses,
        timestamp: new Date().toLocaleString(),
      };

      setTimeout(() => {
        const storedResults = JSON.parse(localStorage.getItem("testResults")) || [];
        storedResults.push(resultData);
        localStorage.setItem("testResults", JSON.stringify(storedResults));

        navigate("/results", { state: resultData });
      }, 100);
    }
  };

  return (
    <Box p={6} textAlign="center">
      {!isNameEntered ? (
        <>
          <Heading mb={4}>Enter Your Name</Heading>
          <Input
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            size="lg"
            mb={4}
          />
          <Button colorScheme="blue" onClick={() => setIsNameEntered(true)} isDisabled={!userName}>
            Start Test
          </Button>
        </>
      ) : (
        <>
          {/* Progress Bar */}
          <Progress value={((currentQuestionIndex + 1) / mockQuestions.length) * 100} size="sm" colorScheme="blue" mb={4} />

          {/* Timer */}
          <Text fontSize="sm" color="red.500">Time left: {timeLeft}s</Text>

          <Heading mb={4}>Question {currentQuestionIndex + 1}</Heading>
          <Text fontSize="lg" mb={4}>{currentQuestion.question}</Text>

          <RadioGroup onChange={setSelectedAnswer} value={selectedAnswer}>
            <Stack spacing={3}>
              {currentQuestion.options.map((option, index) => (
                <Radio key={index} value={option} size="lg">{option}</Radio>
              ))}
            </Stack>
          </RadioGroup>

          <Button
            mt={6}
            colorScheme="blue"
            onClick={handleNext}
            isDisabled={!selectedAnswer}
          >
            {currentQuestionIndex < mockQuestions.length - 1 ? "Next" : "Submit"}
          </Button>
        </>
      )}
    </Box>
  );
};

export default TestAttempt;
