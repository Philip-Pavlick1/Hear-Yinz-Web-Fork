/*+===================================================================
File: AboutUs.js

Summary: A holder page for the organization about us page

Exported Data Structures: None

Exported Functions: AboutUs

Contributors:
    Sam Merlin 2/21/2023 - SP 269

===================================================================+*/
import React from 'react';
import {useLocation} from 'react-router-dom'
export default function AboutUs() {
    const location = useLocation()
    const data = location.state.data;
    return(
        <div>
            <h>Welcome About Us</h>
            <p>Sample test from About Us page.</p>
        </div>
    );
}