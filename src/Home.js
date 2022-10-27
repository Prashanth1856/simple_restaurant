import React from 'react'
import Card from './Container/Card';
import Filter from './Container/Filter';
import Header from './Container/Header';
import Table from './Container/Table';

const Home = () => {
  return (
    <div>
      <center>
        <Header />
        <Table />
        <Filter />
        <Card />
      </center>
    </div>
  )
}

export default Home;