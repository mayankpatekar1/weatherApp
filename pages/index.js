import Head from 'next/head';
import MajorCities from '../components/MajorCities';
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather app</title>
      </Head> 

      <div className="home">
        <div className="container">
        <SearchBox placeholder="Search for weather prediction" />
        <MajorCities />
        </div>
      </div>

      <footer>
      <h3>All rights riserved @ Mayank Patekar - {new Date().getFullYear()}</h3>
      </footer>
    </div>
  )
}
