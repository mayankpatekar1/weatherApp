import React from 'react';
import Image from 'next/image';

export default function WeeklyWeather({DailyForecasts}) {
    const toDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const getDay = (num) =>{
        return(toDay[num]);
    }
    var currentTime = new Date().getHours();
  return (
    <div className='weekly'>
    <h3 className='weekly__title'>
    Weekly <span>Weather</span>
    </h3>
    {DailyForecasts && DailyForecasts.map((data,index)=>{
        if(index == 0){
            return;
        }
        return(
            <div className='weekly__card' key={index}>
            <div className='weekly__inner'>
            <div className='weekly__left-content'>
            <div>
            <h3>
            {getDay(new Date(data.Date).getDay())}
            </h3>
            <h4>
            <span>{data.Temperature.Maximum.Value}&deg;{data.Temperature.Maximum.Unit}</span>
            <span>{data.Temperature.Minimum.Value}&deg;{data.Temperature.Maximum.Unit}</span>
            </h4>
            </div>
            <div className='weekly__right-content'>
            <div className='weekly__icon-wrapper'>
            <div>
            <Image src={`https://developer.accuweather.com/sites/default/files/${data.Day.Icon < 10 ? '0'+data.Day.Icon : data.Day.Icon}-s.png`} alt={data.Day.Icon} layout="fill"/>
            </div>
            </div>
            <h5>{(5 < currentTime && currentTime < 18 )  ? data.Day.IconPhrase :data.Night.IconPhrase}</h5>
            </div>
            </div>

            </div>

            
            </div>);
        })}
    </div>
  )
}
