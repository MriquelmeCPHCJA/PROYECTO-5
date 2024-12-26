import { Box, Grid2 } from "@mui/material";
import { Component } from "react";
import { Typography } from "@mui/material";
import ImgError from '../assets/images/Error.webp';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
            
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="80vh"
                    backgroundColor="black">
                    
                    <Grid2
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <img src={ImgError} alt="Error" width="200" height="200" />
                    </Grid2>
                    
                    <Typography 
                        variant="h2"
                        color="error"
                        Component="h4">
                        
                        UP's ... Algo salio mal!</Typography>
                    <Typography
                        variant="h6"
                        color="white"
                        Component="h6">
                        Pero no te preocupes, no es culpa tuya.
                    </Typography>
                    <Typography
                        variant="h6"
                        color="white"
                        Component="h6">
                        Estamos trabajando en ello.
                    </Typography>
                </Box>
            
            )
        }
        return this.props.children;
    }
}