import React from "react";
import {NavLink, NavLinkRenderProps, Outlet} from "react-router-dom";

export const StandardFrame = () => {
    const getActiveStyle = (props: NavLinkRenderProps) => {
        const isActive = props.isActive;
        return {
            color: isActive ? "cornflowerblue" : "unset",
            fontWeight: isActive ? "bold" : "normal",
            marginLeft: 10,
            marginRight: 10
        }
    }

    return (
        <div className="App" style={{
            backgroundColor: "#282c34",
            color: "white",
        }}>
            <NavLink to={"/"} style={getActiveStyle}>Home</NavLink>
            <NavLink to={"/test"} style={getActiveStyle}>Test page</NavLink>
            <Outlet/>
        </div>
    );
}