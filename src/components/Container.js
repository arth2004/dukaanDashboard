import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Table from './Table'

const Container = () => {
  return (
    <div className='flex flex-col w-full md:pl-[16.67%]'>
        <Nav/>
        <Hero/>
        <Table/>
    </div>
  )
}

export default Container;