import { Card, Col, Text } from "@nextui-org/react";

export const Cards = () => (
  <Card css={{ bg: "$black", w: "90%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, marginBottom:'20%' }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          MacBook Air
        </Text>
        <Text h4 color="white">
          Feel the power of M1
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-2.jpeg"
      width="100%"
      height={290}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);