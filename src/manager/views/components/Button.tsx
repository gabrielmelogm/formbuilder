import { Button } from "@chakra-ui/react";

export function HelloButton() {
  return (
    <Button
      onClick={() => {
        alert('Hello!');
      }}
    >
      Hello
    </Button>
  );
}