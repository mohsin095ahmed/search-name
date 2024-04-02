import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const cities = [
    "Abidjan",
    "Abu Dhabi",
    "Abuja",
    "Accra",
    "Addis Ababa",
    "Adelaide",
    "Algiers",
    "Amman",
    "Amsterdam",
    "Ankara",
    "Antananarivo",
    "Ashgabat",
    "Asmara",
    "Astana",
    "Athens",
    "Auckland",
    "Baghdad",
    "Baku",
    "Bamako",
    "Bangkok",
    "Bangui",
    "Banjul",
    "Basseterre",
    "Beijing",
    "Beirut",
    "Belgrade",
    "Belmopan",
    "Berlin",
    "Bern",
    "Bishkek",
    "Bissau",
    "Bogotá",
    "Brasília",
    "Bratislava",
    "Brazzaville",
    "Bridgetown",
    "Brussels",
    "Bucharest",
    "Budapest",
    "Buenos Aires",
    "Bujumbura",
    "Cairo",
    "Canberra",
    "Caracas",
    "Castries",
    "Copenhagen",
    "Dakar",
    "Damascus",
    "Dar es Salaam",
    "Dhaka",
    "Dili",
    "Djibouti",
    "Dodoma",
    "Doha",
    "Dublin",
    "Dushanbe",
    "Edinburgh",
    "Freetown",
    "Funafuti",
    "Gaborone",
    "Georgetown",
    "Gitega",
    "Guatemala City",
    "Hanoi",
    "Harare",
    "Havana",
    "Helsinki",
    "Honiara",
    "Islamabad",
    "Jakarta",
    "Juba",
    "Kabul",
    "Kampala",
    "Kathmandu",
    "Khartoum",
    "Kiev",
    "Kigali",
    "Kingston",
    "Kingstown",
    "Kinshasa",
    "Kuala Lumpur",
    "Kuwait City",
    "Libreville",
    "Lilongwe",
    "Lima",
    "Lisbon",
    "Ljubljana",
    "Lomé",
    "London",
    "Luanda",
    "Lusaka",
    "Luxembourg",
    "Madrid",
    "Majuro",
    "Malabo",
    "Male",
    "Managua",
    "Manama",
    "Manila",
    "Maputo",
    "Maseru",
    "Mbabane",
    "Mexico City",
    "Minsk",
    "Mogadishu",
    "Monaco",
    "Monrovia",
    "Montevideo",
    "Moroni",
    "Moscow",
    "Muscat",
    "Nairobi",
    "Nassau",
    "Naypyidaw",
    "New Delhi",
    "Niamey",
    "Nicosia",
    "Nouakchott",
    "Nuku'alofa",
    "Oslo",
    "Ottawa",
    "Ouagadougou",
    "Panama City",
    "Paramaribo",
    "Paris",
    "Phnom Penh",
    "Podgorica",
    "Port Louis",
    "Port Moresby",
    "Port-au-Prince",
    "Porto-Novo",
    "Prague",
    "Praia",
    "Pretoria",
    "Pyongyang",
    "Quito",
    "Rabat",
    "Reykjavik",
    "Riga",
    "Riyadh",
    "Rome",
    "Roseau",
    "Saint George's",
    "Saint John's",
    "San José",
    "San Marino",
    "San Salvador",
    "Sana'a",
    "Santiago",
    "Santo Domingo",
    "Sarajevo",
    "Seoul",
    "Singapore",
    "Skopje",
    "Sofia",
    "Stockholm",
    "Suva",
    "Taipei",
    "Tallinn",
    "Tarawa",
    "Tashkent",
    "Tbilisi",
    "Tegucigalpa",
    "Tehran",
    "Thimphu",
    "Tirana",
    "Tokyo",
    "Tripoli",
    "Tunis",
    "Ulaanbaatar",
    "Vaduz",
    "Valletta",
    "Vatican City",
    "Victoria",
    "Vienna",
    "Vientiane",
    "Vilnius",
    "Warsaw",
    "Washington, D.C.",
    "Wellington",
    "Windhoek",
    "Yaoundé",
    "Yerevan",
    "Zagreb",
    "Zürich"
  ];
 const  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const [value, setvalue] = useState();
  const [result, setResult] = useState([]);
  const spanRefs = useRef()
   useEffect(()=>{
    if(value){
    
      const inputValue = value.toLowerCase();
      const city = cities.map(m => m.toLowerCase())
      const checkCites = city.filter(c=>inputValue === c.charAt());
      setResult(checkCites);
    if( value.length > 1){
     const name = result.filter(c => c.indexOf(inputValue) > -1)
     setResult(name)

     
    }  
      

    }
         },[value])
  

           return (
    <>
    <h1>SEARCH CITY </h1>
        <div className='input-div'>

        
        <input className='input' readOnly type="text" value={value} onChange={(e)=>{setvalue(e.target.value)}} /></div>
        <div className='span-div'>
         { 
            result && result.map(m=>(
              <div className='span' key={m} ref={spanRefs}>{m}</div>
            ))
         }

        </div>
      <div className='parent'>
      {
      alphabet.map((a, i)=>(
        <div key={a} className='child'>
        <button  onClick={()=>{setvalue(value ? value + a : a)}}>{a}</button>
        </div>
      )) 
     }

      </div>
     
  
        

    </>
  )
}

export default App
