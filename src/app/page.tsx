import {
    Avatar,
    Button,
    Card,
    Icon,
    Input,
    Span,
    Timeline,
    Container,
    Box,
    Heading,
    Center,
    Link,
    SimpleGrid,
    List,
    ListItem,
    HStack,
    Text,
    defineStyle,
    Square,
    CloseButton,
    Dialog,
    Portal,
} from "@chakra-ui/react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri"

const ringCss = defineStyle({
    outlineWidth: "2px",
    outlineColor: "red.solid",
    outlineOffset: "2px",
    outlineStyle: "solid",
})

export default function Home() {
    return (
        <div>
            <Container maxW={"xl"} spaceY={"10"}>
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={{ base: "red.solid", _dark: "red.solid" }}
                    css={{ backdropFilter: 'blur(10px)' }}
                >
                    <Text fontWeight={"medium"} color={"gray.solid"}>
                        Hi, there! I'm a IT student and developer.
                    </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box>
                        <Heading fontSize={"3xl"}>
                            Cicero Paulino
                        </Heading>
                        <Text fontWeight={"semibold"} fontStyle={"italic"} color={"red.solid"} opacity={0.7}>
                            OS Dev - DevOps
                        </Text>
                    </Box>
                    <Box
                        borderColor="red.solid"
                        borderWidth={3}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            src="/assets/IMG_20240612_135304.png"
                            alt="Profile image"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
                <Box>
                    <Box spaceY={5}>
                        <Heading size={"2xl"} color={"red.solid"}>
                            About me
                        </Heading>
                        <Text textAlign={"justify"}>
                            I'm a student of IT Bachelor's at the Federal University of Rio Grande
                            do Norte (UFRN), in the Digital Metropolis Institute (IMD). Currently,
                            I'm working on university projects and in the Network Management
                            department of the Department of Informatics and Applied Mathematics.
                        </Text>
                    </Box>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center">
                    <Button colorPalette={"teal"} variant={"surface"}>
                        See more <RiArrowRightLine />
                    </Button>
                </Box>

                <Box spaceY={5}>
                    <Heading size={"2xl"} color={"red.solid"}>
                        Experiences timeline
                    </Heading>
                    <Timeline.Root size="sm" variant="solid" colorPalette={"red"}>

                        <Timeline.Item>
                            <Timeline.Content flex="1" alignItems="flex-end">
                                <Timeline.Title>2026.1 - End of IT Graduation</Timeline.Title>
                                <Timeline.Description>
                                </Timeline.Description>
                            </Timeline.Content>
                            <Timeline.Connector>
                                <Timeline.Separator />
                                <Timeline.Indicator />
                            </Timeline.Connector>
                            <Timeline.Content flex="1" />
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content flex="1" />
                            <Timeline.Connector>
                                <Timeline.Separator />
                                <Timeline.Indicator />
                            </Timeline.Connector>
                            <Timeline.Content flex="1">
                                <Timeline.Title>10/2024 - today</Timeline.Title>
                                <Timeline.Description>

                                    <Card.Root size="md" borderColor={"red.solid"}>
                                        <Card.Header>
                                            <Heading size="md"> OS Project</Heading>
                                        </Card.Header>
                                        <Card.Body color="fg.muted">
                                            Develop a OS with a team of students and Professors in UFRN.
                                        </Card.Body>
                                    </Card.Root>

                                </Timeline.Description>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content flex="1" alignItems="flex-end">
                                <Timeline.Title>09/2024 - today</Timeline.Title>
                                <Timeline.Description>

                                    <Card.Root size="md" borderColor={"red.solid"}>
                                        <Card.Header>
                                            <Heading size="md"> Network Management</Heading>
                                        </Card.Header>
                                        <Card.Body color="fg.muted">
                                            Work in the Department of Informatics and Applied Mathematics
                                            in tasks like server, sites and hardware maintenance of the
                                            department.


                                            <Dialog.Root scrollBehavior="inside" size="cover">
                                                <Dialog.Trigger asChild>
                                                    <Button variant="ghost" size={"2xs"} marginTop={2} colorPalette={"teal"}>See more</Button>
                                                </Dialog.Trigger>
                                                <Portal>
                                                    <Dialog.Backdrop />
                                                    <Dialog.Positioner>
                                                        <Dialog.Content>
                                                            <Dialog.Header>
                                                                <Dialog.Title>Experiences</Dialog.Title>
                                                            </Dialog.Header>
                                                            <Dialog.CloseTrigger asChild>
                                                                <CloseButton size="sm" />
                                                            </Dialog.CloseTrigger>
                                                            <Dialog.Body>
                                                            </Dialog.Body>
                                                        </Dialog.Content>
                                                    </Dialog.Positioner>
                                                </Portal>
                                            </Dialog.Root>


                                        </Card.Body>
                                    </Card.Root>

                                </Timeline.Description>
                            </Timeline.Content>
                            <Timeline.Connector>
                                <Timeline.Separator />
                                <Timeline.Indicator />
                            </Timeline.Connector>
                            <Timeline.Content flex="1" />
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content flex="1" />
                            <Timeline.Connector>
                                <Timeline.Separator />
                                <Timeline.Indicator />
                            </Timeline.Connector>
                            <Timeline.Content flex="1">
                                <Timeline.Title>09/2023 - 08/2024</Timeline.Title>
                                <Timeline.Description>

                                    <Card.Root size="md" borderColor={"red.solid"}>
                                        <Card.Header>
                                            <Heading size="md"> Scientific Initiation</Heading>
                                        </Card.Header>
                                        <Card.Body color="fg.muted">
                                            study of text sampling approach in immersive three-dimensional environments.
                                        </Card.Body>
                                    </Card.Root>

                                </Timeline.Description>
                            </Timeline.Content>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content flex="1" alignItems="flex-end">
                                <Timeline.Title>09/2023 - 08/2024</Timeline.Title>

                                <Timeline.Description>

                                    <Card.Root size="md" borderColor={"red.solid"}>
                                        <Card.Header>
                                            <Heading size="md"> Scientific Initiation</Heading>
                                        </Card.Header>
                                        <Card.Body color="fg.muted">
                                            study of text sampling approach in immersive three-dimensional environments.
                                        </Card.Body>
                                    </Card.Root>

                                </Timeline.Description>
                            </Timeline.Content>
                            <Timeline.Connector>
                                <Timeline.Separator />
                                <Timeline.Indicator />
                            </Timeline.Connector>
                            <Timeline.Content flex="1" />
                        </Timeline.Item>

                        <Timeline.Item>
                            <Timeline.Content flex="1" />
                            <Timeline.Connector>
                                <Timeline.Separator />
                                <Timeline.Indicator />
                            </Timeline.Connector>
                            <Timeline.Content flex="1">
                                <Timeline.Title>2021.1 - Start Of IT Graduation</Timeline.Title>
                            </Timeline.Content>
                        </Timeline.Item>

                    </Timeline.Root>

                </Box>


                <Box display="flex" flexDirection="column" alignItems="flex-start" gap={3}>
                    <Heading size="2xl" color="red.solid">
                        Other platforms
                    </Heading>

                    <Button colorPalette="teal" variant="ghost">
                        See more <RiArrowRightLine />
                    </Button>
                    <Button colorPalette="teal" variant="ghost">
                        See more <RiArrowRightLine />
                    </Button>
                </Box>
            </Container>
        </div >
    );
}

