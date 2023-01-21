import React from 'react';
import Box from '@mui/material/Box';

interface FooterDTO {
    header?: String;
    sub?: String;
}

function Footer( dto:FooterDTO = {
    header: 'demo',
    sub: 'demo'
}): JSX.Element {
    const { header, sub } = dto

    return (
        <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            { header }
            { sub }
        </Box>       
    )
}

export default Footer;
