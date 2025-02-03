import React from "react";
import { Button, Box, Typography } from "@mui/material";

interface CounterProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
  return (
    <Box
      textAlign="center"
      p={3}
      borderRadius={2}
      bgcolor="white"
      boxShadow={3}
    >
      <Typography variant="h5">Counter: {count}</Typography>
      <Button
        variant="contained"
        onClick={() => setCount((prev) => prev + 1)}
        sx={{ m: 1 }}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
        sx={{ m: 1 }}
      >
        Decrement
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => setCount(0)}
        sx={{ m: 1 }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Counter;
