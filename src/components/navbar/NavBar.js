import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FcLineChart } from 'react-icons/fc'

// eslint-disable-next-line
export function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FcLineChart />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Admin Panel
                </a>
            </nav>
        </>
    );
}
