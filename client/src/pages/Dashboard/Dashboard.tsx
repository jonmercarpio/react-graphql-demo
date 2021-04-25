import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { Fragment } from "react";
import AppBar from "../../components/AppBar";
import Loader from "../../components/Loader";
import useMetrics from "./useMetrics";

import DowntimeChart from "./components/DowntimeChart";
import EfficiencyChart from "./components/EfficiencyChart";
import ShiftChart from "./components/ShiftChart";
import MaterialTable from "material-table";
import MetricsTable from "./components/MetricsTable";

export default function Dashboard() {
  const request = useMetrics();

  console.log({ request });

  return (
    <Fragment>
      <AppBar title="Dashboard" />
      <Container>
        <Loader request={request}>
          <Loader.Loading />
          <Loader.Content>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs>
                    <Card>
                      <CardContent>
                        <Typography
                          color="textSecondary"
                          variant="subtitle1"
                          gutterBottom
                        >
                          Downtime
                        </Typography>
                        <Box height={250}>
                          <DowntimeChart data={request.data} />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card>
                      <CardContent>
                        <Typography
                          color="textSecondary"
                          variant="subtitle1"
                          gutterBottom
                        >
                          Efficiency
                        </Typography>
                        <Box height={250}>
                          <EfficiencyChart data={request.data} />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card>
                      <CardContent>
                        <Typography
                          color="textSecondary"
                          variant="subtitle1"
                          gutterBottom
                        >
                          Shift
                        </Typography>
                        <Box height={250}>
                          <ShiftChart data={request.data} />
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <MetricsTable data={request.data} />
              </Grid>
            </Grid>
          </Loader.Content>
        </Loader>
      </Container>
    </Fragment>
  );
}
