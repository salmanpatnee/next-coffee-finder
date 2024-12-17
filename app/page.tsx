'use client'
import Banner from "./components/Banner";

export default function Home() {

  const handleButtonClick = () => {
    alert('Clicked')
  }

  return (
    <Banner onButtonClick={handleButtonClick}/>
  );
}
