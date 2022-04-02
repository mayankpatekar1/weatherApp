import React from 'react';
import TodaysWeather from '../../components/TodaysWeather';
import WeeklyWeather from '../../components/WeeklyWeather';
import SearchBox from '../../components/SearchBox';
import Link from 'next/link';


export async function getServerSideProps(context){
    const city = getCity(context.params.city);
    if(!city){
        return{
            notFound:true,
        };
    }

    const cityRes = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.API_KEY}&q=${city}`);

    const cityKey = await cityRes.json();


    
    if(cityKey){

        
        const res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey[0].Key}?apikey=${process.env.API_KEY}`);

        const data = await res.json();
        if(!data){
            return{
                notFound:true,
            }
        }
        const slug = context.params.city;
        const Headlines = data.Headline;
        const DailyForecast = data.DailyForecasts;
        const cityData = cityKey;
        return{
            props: {
                slug: slug,
                cityKey: cityData,
                data: data,
                Headlines:Headlines,
                DailyForecast:DailyForecast,
            },
        };



    }else{
        return{
            notFound:true,
        };
    }


    
}

const getCity = (param) =>{
    const cityParam = param.trim();
    const splitCity = cityParam.split("-");
    const city = (splitCity.slice(0,-1)).join(' ');
    
    return city;
}

export default function City({slug,cityKey,data,Headlines,DailyForecast}) {
    console.log(DailyForecast[0].Day.Icon);
    console.log(DailyForecast);
    const DailyForecasts = DailyForecast;


  return (
    <div>
       
       <div className='page-wrapper'>
           <div className='container'>
           <Link href="/">
               <a className='back-link'>&larr; Home</a>
           </Link>
           <SearchBox placeholder="Search for other location here ..." />
       <TodaysWeather city={cityKey} weather={DailyForecasts[0]} />
       <WeeklyWeather DailyForecasts={DailyForecasts} />

           </div>
       </div> 
          
    </div>
  )
}
