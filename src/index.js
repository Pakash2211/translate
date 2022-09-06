import React, {StrictMode} from 'react';
import ReactDom from 'react-dom/client' ;
import App from './App';




ReactDom.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>
    </StrictMode>
)