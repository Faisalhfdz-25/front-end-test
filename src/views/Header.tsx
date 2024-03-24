import React from "react";
import { Layout } from "antd";
import '../App.css';

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
    return(
        <Header className="App-header">
            <h1>News App</h1>
        </Header>
    )
}


export { HeaderComponent };