import React, { useEffect, useState } from 'react';
import BottomIconControl from '../components/BottomIconControl';
import Banner from '../components/components_home/Banner';
import Categories from '../components/components_home/Categories';
import Criteria from '../components/components_home/Criteria';
import Necessity from '../components/components_home/Necessity';
import Product from '../components/components_home/Product';
import Sort from '../components/components_home/Sort';
import SecondHeader from '../layout/SecondHeader';

function Home() {
  const [currentPosition, setCurrentPosition] = useState(0)
  const handleDisplayOnTop = () => {
    setCurrentPosition(window.pageYOffset);
  }

  useEffect(() => {
    document.addEventListener('scroll', handleDisplayOnTop)

    return () => {
      document.removeEventListener('scroll', handleDisplayOnTop);
    }
  }, [])

  return (
    <>
      <SecondHeader />
      <Banner />
      <Categories />
      <Necessity />
      <Criteria />
      <Sort />
      <Product />
      {
        currentPosition >= 500 ? <BottomIconControl /> : null
      }
    </>
  )
}

export default Home