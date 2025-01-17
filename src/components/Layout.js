import React,{useState,useEffect} from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Layout({children}) {
    const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    console.log('loading');
  },[])
  return (
    <>
    <div className={`loader-area ${isLoading? '':'hide-me'}`}>
        <div className='loader'>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
        </div>
    </div>
    <Header />
    {children}
    <Footer />
</>
  )
}
