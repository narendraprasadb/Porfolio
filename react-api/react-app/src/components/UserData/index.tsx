import React from "react";
import {  Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { useFetchUsers } from "../UserList";
import NAMES from '../../constants/index'


const UserData=()=>{
    const data=useFetchUsers();
    return(
        <Box>
        <Typography>User Data</Typography>
        <List>
        {data.map(user => (
          <ListItem key={user.id}>
            <ListItemText
              primary={user.name}
              secondary={
                <>
                  <Typography variant="body2"><strong>{NAMES.user}</strong> {user.username}</Typography>
                  <Typography variant="body2"><strong>{NAMES.email}</strong> {user.email}</Typography>
                  <Typography variant="body2"><strong>{NAMES.phone}</strong> {user.phone}</Typography>
                  <Typography variant="body2"><strong>{NAMES.website}</strong> {user.website}</Typography>
                  <Typography variant="body2"><strong>{NAMES.company}</strong> {user.company.name}</Typography>
                  <Typography variant="body2"><strong>{NAMES.address}</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
        </Box>
    )
}
export default UserData;