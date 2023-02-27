import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function DummySkeleton() {
  return (
    <Stack spacing={1} width="40vh" m={3} >
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={50} height={40} />
      <Skeleton variant="rounded" width={250} height={150} />
    </Stack>
  );
}