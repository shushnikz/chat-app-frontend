import {io} from 'socket.io-client';
import React from 'react';
const SOCKET_URL = 'https://chat-app-backend-deploy1.herokuapp.com';

//app socket 
export const socket = io(SOCKET_URL);
export const AppContext = React.createContext();