/* eslint-disable react/no-unescaped-entities */
import moment from 'moment';
import Image from 'next/image';

export default function TodaysWeather({city,weather}) {
    console.log(city);
    var currentTime = new Date().getHours();
  return (
    <div className="today">
    <div className="today__inner">
        <div className="today__left-content">
        <h1>{city[0].LocalizedName} ({city[0].Country.ID})</h1>
        <h2>
            <span>{weather.Temperature.Maximum.Value}&deg;{weather.Temperature.Maximum.Unit}</span>
            <span>{weather.Temperature.Minimum.Value}&deg;{weather.Temperature.Maximum.Unit}</span>
        </h2>
        </div>
        <div className='today__right-content'>
        <div className='today__icon-wrapper'>
        <div>
            <Image src={`https://developer.accuweather.com/sites/default/files/${weather.Day.Icon < 10 ? '0'+weather.Day.Icon : weather.Day.Icon }-s.png`} alt="weather icon" height={180} width={160}/>
        </div>
        
        </div>
        <h3>
            {(5 < currentTime && currentTime < 18 )  ? weather.Day.IconPhrase :weather.Night.IconPhrase}
        </h3>
        </div>
    </div>
    </div>
  )
}
