import React from 'react'
import Category from "../../components/category/Category"
import About from "../../components/about/About"
import Job from "../../components/job/Job"
import Search from '../../components/search/Search'
import Carousel from '../../components/carousel/carousel'


const Home = () => {
    return (
        <>
        <Carousel/>
        <Search/>
        <Category/>
        <About/>
        <Job/>
        </>
    )
}

export default Home
