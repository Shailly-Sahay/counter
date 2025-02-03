import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import { Counter, UserForm } from "../components";

const Layout: React.FC = () => {
  const [count, setCount] = useState(0);

  // Background color animation applied to the entire layout
  const bgSpring = useSpring({
    backgroundColor: `rgba(50, 100, 255, ${Math.min((count / 20) ** 2, 1)})`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={{ ...bgSpring, height: "100vh", padding: "16px" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        {/* Top Row */}
        <Grid item xs={6}>
          <Counter count={count} setCount={setCount} />
        </Grid>
        <Grid item xs={6}>
          {/* <RichTextEditor /> */}
        </Grid>

        {/* Bottom Row */}
        <Grid item xs={6}>
          <UserForm />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              padding: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              height: "100%",
            }}
          >
            <pre>{localStorage.getItem("userData") || "No data yet"}</pre>
          </Box>
        </Grid>
      </Grid>
    </animated.div>
  );
};

export default Layout;
