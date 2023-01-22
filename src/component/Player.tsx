import React from 'react';
import { VideoDTO } from '../interface';
import { Grid, Paper } from '@mui/material';
import theme from '../theme';
import ReactPlayer from 'react-player';
import { videoHelper } from '../helper';
import { Box } from '@mui/system';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


interface PlayerDTO {
  item: VideoDTO
}

function Player(dto: PlayerDTO): JSX.Element {
  const { video, scale, align, size, volume } = dto.item;

  const PlayIcon = (): JSX.Element => 
    <Box
      sx={{
        minHeight: theme.spacing(60),
        minWidth: theme.spacing(60),
      }}
      >
        <PlayCircleIcon />
    </Box>

  return (
    <Grid item lg={size.desktop} sm={size.mobile}
      sx={{
        paddingTop: 0,
        paddingLeft: 0
      }}
    >
      <Paper
        component='figure'
        elevation={0}
        sx={{
          // minHeight: theme.spacing(40),
          paddingTop: 0,
          paddingLeft: 0,
          margin: 0
        }}
      >
        <ReactPlayer 
          url={videoHelper(dto.item)} 
          playing={true} 
          controls={true} 
          width='100%'
          height='100%'
          volume={volume}
          pip={true}
        />
      </Paper>
    </Grid>
  );
}

export default Player;
