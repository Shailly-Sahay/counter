import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";

const Counter: React.FC = () => {
  // Load counter from localStorage (or start from 0)
  const [count, setCount] = useState<number>(() => {
    return Number(localStorage.getItem("counter")) || 0;
  });

  // Save count to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  const intensity = Math.min((count / 20) ** 2, 1);

  // Background color animation
  const bgSpring = useSpring({
    backgroundColor: `rgba(0, 0, 39, ${intensity})`,
    config: { tension: 200, friction: 10 },
  });

  return (
    <animated.div
      style={{
        ...bgSpring,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        textAlign="center"
        p={3}
        borderRadius={2}
        bgcolor="white"
        boxShadow={3}
      >
        <Typography variant="h4">Counter: {count}</Typography>
        <Button
          variant="contained"
          onClick={() => setCount((prev) => Math.max(prev + 1, 0))}
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
    </animated.div>
  );
};

export default Counter;
