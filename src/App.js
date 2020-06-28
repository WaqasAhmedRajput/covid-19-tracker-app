import React from 'react';
// import ReactDom from 'react-dom';
import { Header, Cards, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import './App.css';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChanging = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });

  }



  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Header handleCountryChanging={this.handleCountryChanging} />
        <Cards data={data} />
        {/* <CountryPicker handleCountryChanging={this.handleCountryChanging} /> */}
        <Chart data={data} country={country} />

      </div>
    )
  }
}

export default App;
