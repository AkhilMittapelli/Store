import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import agent from "../../App/api/agent";
import { useState } from "react";

export default function AboutPage(){
    const[validationErrors, setValidationErrors]= useState<string[]>([]);

    function getValidationError(){
        agent.TestErros.getValidationError()
        .then(()=>console.log('should not see this'))
        .catch(error => setValidationErrors(error));
    }

    return(
        <Container>
            <Typography gutterBottom variant="h2">Erros for testing purposes</Typography>
            <ButtonGroup fullWidth>
                <Button variant="contained" onClick={()=> agent.TestErros.get400Error().catch(error => console.log(error))}> Test 400 Error</Button>
                <Button variant="contained" onClick={()=> agent.TestErros.get401Error().catch(error => console.log(error))}> Test 401 Error</Button>
                <Button variant="contained" onClick={()=> agent.TestErros.get404Error().catch(error => console.log(error))}> Test 404 Error</Button>
                <Button variant="contained" onClick={()=> agent.TestErros.get500Error().catch(error => console.log(error))}> Test 500 Error</Button>
                <Button variant="contained" onClick={getValidationError}>  Test Vadliation error</Button>
            </ButtonGroup>
            {validationErrors.length>0 &&
            <Alert severity="error">
                <AlertTitle>validation Errors</AlertTitle>
                <List>
                    {validationErrors.map(error =>(
                        <ListItem key={error}>
                            <ListItemText>{error}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Alert>
        }
        </Container>
    )
}