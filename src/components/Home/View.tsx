"use client";

import { Container, Flex, Heading, Select } from "@chakra-ui/react";

import Action from "./components/Action";
import List from "./components/List";

import usePage from "./View.hook";

export default function Home() {
  const { chats, user, handleSendChat, handleChangeUser } = usePage();

  return (
    <Container p={0}>
      <Flex flexDirection={"column"} h="calc(100vh)">
        <Flex
          bg={"teal.300"}
          p={2}
          borderRadius={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading as="h1" size="md" color="white">
            Simple Chat App
          </Heading>
          <Select w="160px" bg="white" onChange={handleChangeUser}>
            <option value="#" disabled>
              Select User
            </option>
            <option value="user-1">User 1</option>
            <option value="user-2">User 2</option>
          </Select>
        </Flex>
        <List chats={chats} user={user} />
        <Action onSend={handleSendChat} />
      </Flex>
    </Container>
  );
}
