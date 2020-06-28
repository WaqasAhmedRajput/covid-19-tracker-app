import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../api';


import styles from './Header.module.css'
import logo from '../../image.png';

const Header = ({ handleCountryChanging }) => {
    ////
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await countries());
        }
        fetchAPI();
    }, [setFetchedCountries]);


    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap style={{ flex: 1 }}>
                        <img src={logo} className={styles.logo} alt="COVID-19" />&nbsp;
                             Tracker
                    </Typography>
                    <FormControl>
                        <NativeSelect className={styles.dropDownMenu} defaultValue="" onChange={(e) => handleCountryChanging(e.target.value)}>
                            <option value="">Global</option>
                            {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                        </NativeSelect>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </div >
    );
}


export default Header;