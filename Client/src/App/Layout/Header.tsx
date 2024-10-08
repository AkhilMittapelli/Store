import { ShoppingCart, Title } from "@mui/icons-material";
import { AppBar, Badge, Box, colors, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const midLinks=[
    { title: 'catalog', path:'/catalog'},
    { title: 'about', path:'/about'},
    { title: 'contact', path:'/contact'},
]
const rightLinks=[
    {  title: 'login', path:'/login'},
    { title: 'register', path:'/register'},
]
const navStyles ={color:'inherit', 
    textDecoration:'none',
    Typography:"h6",
    '&:hover':{
        color:'grey.500'
    },
    '&.active':{
        color: 'text.secondary'
    }
}
interface props{
    darkMode: boolean;
    handleThemeChange:() =>void;
}

export default function Header({darkMode,handleThemeChange}:props){
    return(
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display='flex' alignItems='centre'>
                <Typography variant="h6" component={NavLink} to='/'
                sx={navStyles}>
                    E-Commerce
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
                </Box>

                <List sx={{display:'flex'}}>
                    {midLinks.map(({title, path})=>(
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title.toLocaleUpperCase()}
                        </ListItem>
                    ))}

                </List>
                <Box display='flex' alignItems='centre'>

                <IconButton size="large" edge="start" color="inherit" sx={{mr:2}}>
                    <Badge badgeContent='4' color="secondary">
                        <ShoppingCart/>
                    </Badge>

                </IconButton>
               
                <List sx={{display:'flex'}}>
                    {rightLinks.map(({title, path})=>(
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title.toLocaleUpperCase()}
                        </ListItem>
                    ))}

                </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}