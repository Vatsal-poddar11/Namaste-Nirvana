import React from 'react'
import Card from './Card'
import './Tours.css';

const Tours = ({tours, removeTour}) => {
  return (
    <div className='container'>
        <div className='title'>
            <h2>Namaste Nirvana</h2>
        </div>
        <div className='cards'>
            {
                tours.map((tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>
    </div>
  )
}

export default Tours;