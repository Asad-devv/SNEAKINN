import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function DummySkeleton() {
  return (
    <Stack spacing={1} textAlign="center" width="30vh" m={3} mb={5}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton
        variant="text"
        alignSelf="center"
        textAlign="center"
        sx={{ fontSize: "1.5rem" }}
        pl={3}
        ml={3}
      />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Stack
        gap={2}
        display="flex"
        width="30vh"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Skeleton
          variant="text"
          width={60}
          height={40}
          sx={{ fontSize: "1rem" }}
        />
        <Skeleton width={60} height={40} variant="text" />
        <Skeleton variant="text" width={50} height={50} />
      </Stack>
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rounded" width={250} height={150} />
    </Stack>
  );
}
