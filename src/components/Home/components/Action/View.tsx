"use client";

import { Box, Flex, Button, Input } from "@chakra-ui/react";

import useView from "./View.hook";
import { Props } from "./View.types";

export default function Action(props: Props) {
  const { input, handleChangeInput, handleSendMessage } = useView(props);

  return (
    <Flex w="100%" gap={4} p={2} pb={6}>
      <Box w="80%">
        <Input
          placeholder="Type here..."
          onChange={handleChangeInput}
          value={input}
        />
      </Box>
      <Box flexGrow={1}>
        <Button
          w="100%"
          isDisabled={input.length == 0}
          colorScheme="teal"
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Box>
    </Flex>
  );
}
