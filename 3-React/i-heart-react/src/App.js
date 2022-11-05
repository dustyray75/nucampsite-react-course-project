import { Component } from 'react';
import HeartsList from './components/HeartsList';
import Header from './components/Header';
import './App.css';


class App extends Component() {
  render() {
    return (
      <>
        <Header />
        <HeartsList />
      </>
    );
  }
}

export default App;
