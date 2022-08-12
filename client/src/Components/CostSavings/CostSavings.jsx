import {
  faArrowDownLong,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import {
  AppWrapper,
  fixedWindow,
  graphCanvas,
  middle,
  middleWindow,
} from "../Styles_&_Components/Styles";
import { info, values } from "./Styles";

export default function CostSavings({ props }) {
  const { appHeight } = props;

  return (
    <Stack sx={{ ...AppWrapper, height: appHeight }} direction="row">
      <LeftSidebar />

      <Stack sx={{ ...middle }}>
        <Stack sx={{ ...middleWindow }}>
          <Typography variant="h3" component="div" fontWeight="700">
            Cost Savings
          </Typography>

          <Stack sx={{ ...fixedWindow }}>
            <Stack gap={3} mt={3}>
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: "1.8em", lg: "2em" },
                  fontWeight: "500",
                  mr: 2,
                }}
              >
                Impact of burnout on operational Revenue
              </Typography>
              <Paper sx={{ ...graphCanvas, ...info, p: "1.5rem" }}>
                <Stack>
                  <Typography
                    sx={{
                      color: "#999999",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Losses
                  </Typography>

                  <Box sx={{ ...values, color: "#f55f4b" }}>
                    <IconButton
                      color="inherit"
                      sx={{
                        cursor: "text",
                        bgcolor: "rgba(245, 95, 75, 0.05);",
                        p: 1,
                      }}
                    >
                      <Box component={FontAwesomeIcon} icon={faArrowDownLong} />
                    </IconButton>
                    <Typography variant="div" component="div">
                      800$
                    </Typography>
                  </Box>
                </Stack>

                <Stack>
                  <Typography
                    sx={{
                      color: "#999999",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Profit
                  </Typography>

                  <Box sx={{ ...values, color: "#06b58c" }}>
                    <IconButton
                      color="inherit"
                      sx={{
                        cursor: "text",
                        bgcolor: "rgba(245, 95, 75, 0.05);",
                        p: 1,
                      }}
                    >
                      <Box
                        component={FontAwesomeIcon}
                        sx={{ transform: "rotate(180deg)" }}
                        icon={faArrowDownLong}
                      />
                    </IconButton>

                    <Typography variant="div" component="div">
                      800$
                    </Typography>
                  </Box>
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      color: "#999999",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Net Amount
                  </Typography>

                  <Box sx={{ ...values, color: "#f55f4b" }}>
                    <IconButton
                      color="inherit"
                      sx={{
                        cursor: "text",
                        bgcolor: "rgba(245, 95, 75, 0.05);",
                        p: 1,
                      }}
                    >
                      <Box
                        component={FontAwesomeIcon}
                        sx={{ transform: "rotate(90deg)" }}
                        icon={faArrowRightArrowLeft}
                      />
                    </IconButton>
                    <Typography variant="div" component="div">
                      800$
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Stack>
          </Stack>

          <Box sx={{ height: 5 }}></Box>
        </Stack>
      </Stack>

      <RightSidebar />
    </Stack>
  );
}
