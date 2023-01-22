import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PostDTO } from '../interface';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { imageHelper, paddingHelper, textAlignHelper } from '../helper';
import Image from 'mui-image';
import theme from '../theme';


interface PostsDTO {
    items: Array<PostDTO>
}


function Posts(dto:PostsDTO): JSX.Element {
    const { items } = dto;

    return (
        <React.Fragment>
            {items.map((item:PostDTO): JSX.Element => {
                const { header, main, sub, cta, size, picture } = item;

                return (
                    <Grid item lg={size.desktop} sm={size.mobile} key={uuidv4()}>
                        <Paper 
                            component='article'
                            elevation={12}
                            sx={{
                                ...textAlignHelper('center'),
                                ...paddingHelper({ desktop: [4,4], mobile: [4,4]}),

                                borderRadius: theme.spacing(2),
                                minHeight: theme.spacing(60),

                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            { picture ? 
                                <Image 
                                    src={imageHelper(picture)} 
                                    fit='scale-down'
                                    position='relative'
                                    shift='right'
                                    width='100%'
                                    showLoading={true} 
                                />
                            : null }
                            <Typography variant='subtitle2'>
                                {sub}
                            </Typography>
                            <Typography variant='h5'>
                                {header}
                            </Typography>
                            <Typography variant='body2'>
                                {main}
                            </Typography>    
                            { cta ?                             
                                <Button size="small">
                                {cta.name}
                                </Button>   
                            : null }
                        </Paper>
                    </Grid>
                )
            })}
        </React.Fragment>
    )
}

export default Posts;