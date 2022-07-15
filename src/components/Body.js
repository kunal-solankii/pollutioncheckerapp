import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { apikey } from './ApiKey';
import { ShowData } from './ShowData';
import 'react-toastify/dist/ReactToastify.css';

export default function Body() {

    var temp;
    const [city, setCity] = useState();
    const [geoData, setGeoData] = useState('null');
    const [pollutionData, setPollutionData] = useState();

    useEffect(() => {
        fetchPollutionData();
    }, [geoData])


    async function sendDataToFetch() {

        let urlgeocode = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apikey;

        await axios.get(urlgeocode).then(response => {
            setGeoData(response.data);
            console.log(response.data);
        }

        ).catch(function error(err) {
            console.log(err)
        })

        // // setTimeout(()=>{
        // //     fetchPollutionData();
        // // },2000);
    }

    function fetchPollutionData() {
        try{
        let urlpollution = "https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=" + geoData[0].lat + "&lon=" + geoData[0].lon + "&appid=" + apikey;
        axios.get(urlpollution).then(response => {
            setPollutionData(response.data);
            console.log(response.data);
            console.log(response.data["list"]["0"].dt);
            temp = new Date(response.data["list"]["0"].dt * 1000);
            console.log(response.data["list"]["0"]["components"]["co"]);
            console.log(temp);
        }).catch((err) => console.log('Error Caught while Fetching Pollution Data ' + err))
    } catch(error){toast.error('Unknown Error Occured ')};
    }

    function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
    }

    const handleSubmitCity = () => {
        if (city == '' || !isNaN(city) || containsSpecialChars(city)) {
            console.log('Bad Input');
            toast.error('Invalid Input ')
        }
        else {
            console.log('City input is good');
            sendDataToFetch().then();
        }
    }


    const handleInputCity = (e) => {
        console.log(city);
        setCity(e.target.value);
    }
    return (
        <div className='flex-grow flex justify-center'>
            <div className='py-4'>
                <div className='my-2 text-center'>
                    <TextField color='primary' id="outlined-uncontrolled" label="Input City" value={city} variant="outlined" onChange={handleInputCity} />
                </div>

                <div className='my-4 text-center'>
                    {/* <button onClick={}> */}
                    <Button className='' onClick={handleSubmitCity} variant="contained" startIcon={<AddLocationIcon />}>Search</Button>
                    {/* </button> */}
                </div>

                
                    {pollutionData ? 
                    pollutionData["list"] ?
                    <ShowData dt={temp}
                    state={geoData["0"]["state"]}
                    city={geoData["0"]["name"]}
                    country={geoData["0"]["country"]}
                    co={pollutionData["list"]["0"]["components"]["co"]}
                    no={pollutionData["list"]["0"]["components"]["no"]}
                    no2={pollutionData["list"]["0"]["components"]["no2"]}
                    so2={pollutionData["list"]["0"]["components"]["so2"]}
                    o3={pollutionData["list"]["0"]["components"]["o3"]}
                    pm2_5={pollutionData["list"]["0"]["components"]["pm2_5"]}
                    pm10={pollutionData["list"]["0"]["components"]["pm10"]}
                    nh3={pollutionData["list"]["0"]["components"]["nh3"]}
                    aqi={pollutionData["list"]["0"]["main"]["aqi"]}
                /> : null : null}
                    
            </div>
            {<ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />}
        </div>
    )
}
