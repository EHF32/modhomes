import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Typography, useMediaQuery, Grid, Button } from "@mui/material";
import Roof from "./roof";
import Module from "./module";
import EndWall from "./endwall";
import Foundation from "./foundation";
import { COLORS } from "./colors";
import { motion } from "framer-motion";

type LandingHeroProps = {
  handleScroll: () => void;
};

const LandingHero = ({ handleScroll }: LandingHeroProps) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const borderStyle = "1px dashed #131414";

  return (
    <Grid
      container
      spacing={0}
      columns={12}
      alignItems={isMobile ? "flex-end" : "center"}
      width="100%"
      height="100vh"
      margin="0 auto"
    >
      <Grid item xs={12} md={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            margin: isMobile ? "1rem" : "1rem 1rem 1rem 0",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography
            variant="h1"
            fontWeight={700}
            fontSize={isMobile ? "62px" : "92px"}
          >
            Modern, modular homes.
          </Typography>
          <Button
            size="large"
            variant="outlined"
            onClick={handleScroll}
            style={{
              marginTop: isMobile ? "1rem" : "2rem",
              marginLeft: isMobile ? "0" : "0.5rem",
              color: "#131414",
              border: borderStyle,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Select a model
            </motion.div>
          </Button>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={8} alignSelf={isMobile ? "flex-start" : "center"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ height: isMobile ? "35vh" : "75vh" }}
        >
          <Canvas camera={{ position: [60, 0, 60], fov: 30 }}>
            <OrbitControls
              autoRotate
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
            />
            <pointLight position={[20, 40, 40]} />
            <pointLight position={[-40, -80, -80]} />
            <ambientLight intensity={0.3} />
            <Roof position={[0, 5.25, 0]} color={COLORS.roof} width={7} />
            <EndWall
              position={[-3.5, 0, 0]}
              color={COLORS.grey}
              rotate={false}
              twoStory={false}
            />
            <Module
              position={[0, 0, 0]}
              color={COLORS.grey}
              envelopeOn
            ></Module>
            <EndWall
              position={[3.5, 0, 0]}
              color={COLORS.grey}
              rotate
              twoStory={false}
            />
            <Foundation position={[0, -5.7, 0]} color="#dbd9d9" width={7} />
          </Canvas>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default LandingHero;
