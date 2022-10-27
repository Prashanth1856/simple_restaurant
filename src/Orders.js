import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Container/Header';

const Orders = ({list}) => {
  return (
    <div>
      <Header />
      <center>
            {list.length > 0 ? <>
            <div className='container'>
                <div className='row'>
                    {list.map((item) => (
                        <div className='col-md-4' style={{padding:"5px"}} key={item.id}>
                            <div className='card' style={{width:"18rem",padding:"3px"}}>
                                <img src={item.url} alt={item.name} className='card-img-top' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <div className='card-text'>Billing Amount Rs.{item.prize}</div>
                                    <p>Table Number : {item.table_number}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Link to="/"><button className='btn btn-primary text-right mt-5'>Place More Orders</button></Link>
            </> : 
            <>
            <div className='h4'>No order placed yet</div>
            <Link to="/"><button className='btn btn-primary text-right mt-5'>Place Order</button></Link>
            </>}
        </center>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.orderreducer
})

export default connect(mapStateToProps)(Orders);
