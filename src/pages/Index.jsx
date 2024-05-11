import { Box, Button, Container, Flex, IconButton, Image, Switch, Text, VStack } from "@chakra-ui/react";
import { FaCamera, FaCog, FaVolumeUp, FaVolumeMute, FaImages } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const [audioFeedback, setAudioFeedback] = useState(false);

  const toggleCamera = () => setCameraOn(!cameraOn);
  const toggleAudioFeedback = () => setAudioFeedback(!audioFeedback);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center" height="100vh">
        <VStack spacing={4} align="stretch" w="full">
          <Flex justify="space-between" align="center">
            <IconButton icon={<FaCog />} aria-label="Settings" size="lg" />
            <Text fontSize="2xl" fontWeight="bold">
              ViewSight Camera App
            </Text>
            <IconButton icon={<FaImages />} aria-label="Gallery" size="lg" />
          </Flex>
          <Box borderWidth="2px" borderColor="gray.200" flex="1" w="full" bg="black" position="relative">
            {cameraOn ? (
              <Image src="https://images.unsplash.com/photo-1472393365320-db77a5abbecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY2FtZXJhJTIwZmVlZHxlbnwwfHx8fDE3MTU0NDYzMjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Live Camera Feed" fit="cover" w="full" h="full" />
            ) : (
              <Flex height="full" align="center" justify="center">
                <Text color="whiteAlpha.800" fontSize="lg">
                  Camera is off
                </Text>
              </Flex>
            )}
            <Flex position="absolute" top="3" right="3" align="center">
              <FaCamera onClick={toggleCamera} color={cameraOn ? "limegreen" : "red"} size="24" style={{ cursor: "pointer" }} />
              <IconButton aria-label={audioFeedback ? "Mute Audio Feedback" : "Unmute Audio Feedback"} icon={audioFeedback ? <FaVolumeUp /> : <FaVolumeMute />} onClick={toggleAudioFeedback} ml={2} />
            </Flex>
          </Box>
          <Flex justify="space-between" align="center">
            <Text>Camera {cameraOn ? "On" : "Off"}</Text>
            <Switch isChecked={cameraOn} onChange={toggleCamera} />
            <Text>Audio Feedback</Text>
            <Switch isChecked={audioFeedback} onChange={toggleAudioFeedback} />
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
