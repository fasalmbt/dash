import { Grid } from "@nextui-org/react";
import {Cards} from '../Card/Card'

export default function CardView() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <Cards />
      </Grid>
      <Grid xs={12} sm={4}>
        <Cards />
      </Grid>
      <Grid xs={12} sm={4}>
        <Cards />
      </Grid>
    </Grid.Container>
  );
}