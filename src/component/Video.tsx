import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
    background: theme.palette.success.main
  }));

function Video() {
  return (
    <Grid container spacing={2}>
        <Grid item md={12}>
            <BoxStyled>Video Placeholder</BoxStyled>
        </Grid>
    </Grid>
  );
}

export default Video;
