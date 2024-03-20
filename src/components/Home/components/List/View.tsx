"use client";

import { Box, Flex } from "@chakra-ui/react";

import { Props } from "./View.types";

export default function List({ chats, user }: Props) {
  return (
    <Flex flexGrow={1} overflow={"auto"} flexDirection={"column"}>
      {chats.map((chat, idx) => {
        const isRight = user === chat.username;

        return (
          <Flex
            key={idx}
            px={2}
            py={2}
            pl={isRight ? 12 : undefined}
            pr={isRight ? undefined : 12}
            justifyContent={isRight ? "end" : "start"}
          >
            <Box
              bg={isRight ? "teal.100" : "gray.100"}
              display={"inline-block"}
              borderRadius={8}
              px={2}
              py={1}
            >
              {chat.message}
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
}
