import React from 'react';
import { Card, CardActionArea, Checkbox, FormControlLabel, CardContent, CardMedia, ThemeProvider } from '@mui/material';
import ImageMap from './assets/CardMedia.png';
import { theme } from './theme';

interface LayerCardProps {
    active?: boolean;
    checked?: boolean;
    onClick?: () => void;
}

export const LayerCard: React.FunctionComponent<LayerCardProps> = (props) => {
    const [checked, setChecked] = React.useState(props.checked);
    const [active, setActive] = React.useState(props.active);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        setActive(event.target.checked);
    };

    React.useEffect(() => {
        setChecked(props.checked);
        setActive(props.active);
    }, [props])

    return (
        <ThemeProvider theme={theme}>
        <Card sx={{
            boxSizing: 'content-box',
            maxWidth: '229px',
            maxHeight: '150px',
            borderRadius: theme.customBorderRadiuses[0],
            boxShadow: (active || checked) ? theme.customShadows[1] : undefined,
            outlineWidth: (active && checked) ? 1 : 0,
            outlineStyle: 'solid',
            outlineColor: theme.palette.card.border,
            color: theme.palette.card.active
        }}  {...props}>
            <CardActionArea sx={{
                color: theme.palette.common.black
            }}>
                <CardMedia
                    component="img"
                    height="100"
                    image = {ImageMap}
                    alt="map"
                />
                <CardContent sx={{ height: 50, display: 'flex', alignItems: 'center', padding: '0 0 0 18px' }} >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: theme.palette.checkbox.default,
                                    '&.Mui-checked': {
                                        color: theme.palette.checkbox.checked,
                                    },
                                }}
                            />
                        }
                        label="Flood zone 3"
                    />
                </CardContent>
            </CardActionArea>
        </Card>
        </ThemeProvider>
    );
};