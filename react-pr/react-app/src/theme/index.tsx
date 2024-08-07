import { createTheme } from "@mui/material";
const theme=createTheme({
    palette:{
        primary:{
            main:"#1976d2",
        },
        secondary:{
            main:"#dc004e",
        },
        background:{
            default:"#f5f5f5",
        },
    },
    typography:{
        fontFamily:"sans-serif,Times New Roman",
        body1:{
            fontWeight:500,
        },
        body2:{
            fontWeight:800,
        }
    }
})
export default theme