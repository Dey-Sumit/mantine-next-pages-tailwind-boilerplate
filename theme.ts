import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "green",
  /* Put your mantine theme override here */
  colors: {
    // Add your custom color :   <Button color="green.7">Next</Button>
    green: [
      "#eefff2",
      "#d8ffe3",
      "#b3ffc9",
      "#79fc9f",
      "#37f16f",
      "#0ff053",
      "#04b539",
      "#088d31",
      "#0c6f2b",
      "#0c5b26",
    ],
    blue: [
      "#cbdcff",
      "#a9c5ff",
      "#97b9ff",
      "#86aeff",
      "#75a2ff",
      "#6397ff",
      "#528BFF",
      "#4a7de6",
      "#426fcc",
      "#315399",
    ],
  },
} as const);
