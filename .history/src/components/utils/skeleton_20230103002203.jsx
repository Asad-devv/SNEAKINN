import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


export default function DummySkeleton() {
  return (
    <Stack spacing={1} width="40vh" m={3} mb={5}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Stack display="flex">
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton width={30} variant="rectangular" sx={{ fontSize: '1rem' }} />

      </Stack>
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rounded" width={250} height={150} />
    </Stack>
  );
}