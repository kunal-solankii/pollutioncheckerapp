import React , {useEffect, useState} from 'react'

export  function ShowData(props) {
  
   
    const checkAQI = (data) =>{
    if(data == '1')
    {
        // quality='text-lime-400';
        return 'Good';
    }
    else if(data == '2') {
        // quality=('text-lime-100');
        return 'Fair';
    }
    else if (data == '3') {
        // quality='text-yellow-300';
        return 'Moderate'
    }
    else if (data == '4') {
        // quality='text-yellow-500';
        return 'Poor'
    }
    else if (data == '5') {
        // quality='text-rose-500';
        return 'Very Poor'
    }
    else return null
}
    return (
    <div className='flex justify-center bg-slate-100'>
        <div className='font-medium'>
            <h1 className='text-gray-600 text-center font-bold'>Pollution Data of {props.city}, {props.state}, {props.country}</h1>
            <br/>
            <table className='table-auto text-gray-600 border-separate border-spacing-2 border border-slate-200'>
                <tr>
                    <td className='border border-slate-300'>Сoncentration of CO (Carbon monoxide)</td>
                    <td className='border border-slate-300'>{props.co} μg/m3</td>
                </tr>
                
                <tr>
                    <td className='border border-slate-300'>Сoncentration of NO (Nitrogen monoxide)</td>
                    <td className='border border-slate-300'>{props.no} μg/m3</td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>Сoncentration of NO<sub>2</sub> (Nitrogen monoxide)</td>
                    <td className='border border-slate-300'>{props.no2} μg/m3 </td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>Сoncentration of O<sub>3</sub> (Ozone), </td>
                    <td className='border border-slate-300'>{props.o3} μg/m3 </td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>Сoncentration of SO<sub>2</sub> (Sulphur Dioxide), </td>
                    <td className='border border-slate-300'>{props.so2} μg/m3 </td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>Сoncentration of PM<sub>2.5</sub> (Fine particles matter), </td>
                    <td className='border border-slate-300'>{props.pm2_5} μg/m3 </td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>Сoncentration of PM<sub>10</sub> (Coarse particulate matter), </td>
                    <td className='border border-slate-300'>{props.pm10} μg/m3 </td>
                </tr>
                <tr>
                    <td className='border border-slate-300'>Сoncentration of NH<sub>3</sub> (Ammonia), </td>
                    <td className='border border-slate-300'>{props.nh3} μg/m3 </td>
                </tr>
            </table>
           {/* 0<p className='text-start'>Сoncentration of CO (Carbon monoxide), <span className='text-end px-14'>{props.co} μg/m3</span> </p> */}
            {/* <p className='text-start'>Сoncentration of NO (Nitrogen monoxide), <span className='text-end px-14'>{props.no} μg/m3 </span></p> */}
            {/* <p>Сoncentration of NO<sub>2</sub> (Nitrogen dioxide), <span className='text-end px-14'>{props.no2} μg/m3 </span></p> */}
            {/* <p>Сoncentration of O<sub>3</sub> (Ozone), <span className='text-end px-14'>{props.o3} μg/m3 </span></p> */}
            {/* <p>Сoncentration of SO<sub>2</sub> (Sulphur Dioxide), <span className='text-end px-14'>{props.so2} μg/m3 </span></p> */}
            {/* <p>Сoncentration of PM<sub>2.5</sub> (Fine particles matter), <span className='text-end px-14'>{props.pm2_5} μg/m3 </span></p> */}
            {/* <p>Сoncentration of PM<sub>10</sub> (Coarse particulate matter), <span className='text-end px-14'>{props.pm10} μg/m3 </span></p> */}
            {/* <p>Сoncentration of NH<sub>3</sub> (Ammonia), <span className='text-end px-14'>{props.nh3} μg/m3 </span></p> */}
            <p className='font-bold mt-2 text-center text-2xl text-gray-600'>Air Quality Index : <span className={
                props.aqi == '1' ? 'text-lime-600' : 
                props.aqi == '2' ? 'text-lime-300' : 
                props.aqi == '3' ? 'text-yellow-300' :
                props.aqi == '4' ? 'text-yellow-500' :
                props.aqi == '5' ? 'text-rose-600' : 
                  null }>
                {checkAQI(props.aqi)}</span></p>
    </div>
    </div>
  )
}
