import React from 'react';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import { LogoDTO } from '../interface';
import { Grid } from '@mui/material';
import Image from 'mui-image';


interface LogosDTO {
    items: Array<LogoDTO>
}

function Logos(dto:LogosDTO): JSX.Element {
    const { items } = dto;

    return <React.Fragment>
        {
            items.map((item:LogoDTO): JSX.Element => {
                const { image, scale, align, name, link, target, size } = item;
        
                return (
                    <Grid item lg={size.desktop} sm={size.mobile} key={uuidv4()}>
                        <Box
                            sx={{
                                backgroundColor: 'primary.dark',
                                
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <Image src={image} showLoading={true} />
                        </Box>
                    </Grid>
        
                )
            })
        }
    </React.Fragment>
}

export default Logos;