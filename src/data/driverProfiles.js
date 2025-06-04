import maxVerstappenImg from '../assets/images/driverImages/Verstappen.png';
import hamiltonImg from '../assets/images/driverImages/Hamilton.png'
import leclercImg from '../assets/images/driverImages/Leclerc.png'
import piastriImg from '../assets/images/driverImages/Piastri.png'
import norrisImg from '../assets/images/driverImages/Norris.png'
import russellImg from '../assets/images/driverImages/Russell.png'
import antonelliImg from '../assets/images/driverImages/Antonelli.png'
import sainzImg from '../assets/images/driverImages/Sainz.png'
import albonImg from '../assets/images/driverImages/Albon.png'
import hadjarImg from '../assets/images/driverImages/Hadjar.png'
import oconImg from '../assets/images/driverImages/Ocon.png'
import hulkenbergImg from '../assets/images/driverImages/Hulkenberg.png'
import strollImg from '../assets/images/driverImages/Stroll.png'
import gaslyImg from '../assets/images/driverImages/Gasly.png'
import tsunodaImg from '../assets/images/driverImages/Tsunoda.png'
import bearmanImg from '../assets/images/driverImages/Bearman.png'
import lawsonImg from '../assets/images/driverImages/Lawson.png'
import alonsoImg from '../assets/images/driverImages/Alonso.png'
import bortoletoImg from '../assets/images/driverImages/Bortoleto.png'
import colapintoImg from '../assets/images/driverImages/Colapinto.png'


let driverProfiles = [
    {
        name: "Max Verstappen",
        image: maxVerstappenImg,
        dob: "30 September 1997",
        team:"Red Bull Racing",
        nationality: "Netherlands",
        countryCode: "nl",
        wins: 65,
        titles:4,
        points:3160.5,
        podiums:116
    },
    {
        name: "Lewis Hamilton",
        image: hamiltonImg,
        dob: "7 January 1995",
        team:"Ferrari",
        nationality: "United Kingdon",
        countryCode: "gb",
        wins: 105,
        titles:7,
        points:4933.5,
        podiums:202
    },
    {
        name: "Charles Leclerc",
        image:leclercImg,
        dob: "16 October 1997",
        team:"Ferrari",
        nationality: "Monaco",
        countryCode: "mc",
        wins: 8,
        titles:0,
        points:1524,
        podiums:46
    },
    {
        name: "Oscar Piastri",
        image: piastriImg,
        dob: "06 April 2001",
        team:"Mclaren",
        nationality: "Australian",
        countryCode: "nl",
        wins: 7,
        titles:0,
        points:575,
        podiums:18,
    },
    {
        name: "Lando Norris",
        image: norrisImg,
        dob: "13 November 1999",
        team:"Mclaren",
        nationality: "United Kingdom",
        countryCode: "gb",
        wins: 6,
        titles:0,
        points:1183,
        podiums:34
    },
    {
        name: "George Russel",
        image: russellImg,
        dob: "15 February 1998",
        team:"Mercedes",
        nationality: "United Kingdom",
        countryCode: "gb",
        wins: 3,
        titles:0,
        points:825,
        podiums:19
    },
    {
        name: "Kimi Antonelli",
        image: antonelliImg,
        dob: "25 August 2006",
        team:"Mercedes",
        nationality: "Italy",
        countryCode: "it",
        wins: 0,
        titles:0,
        points:48,
        podiums:0
    },
    {
        name: "Carlos Sainz",
        image: sainzImg,
        dob: "01 September 1994",
        team:"Williams Racing",
        nationality: "Spain",
        countryCode: "nl",
        wins: 4,
        titles:0,
        points:1283.5,
        podiums:27
    },
    {
        name: "Alex Albon",
        image: albonImg,
        dob: "23 March 1996",
        team:"Williams Racing",
        nationality: "Thailand",
        countryCode: "nl",
        wins: 0,
        titles:0,
        points:282,
        podiums:2
    },
    {
        name: "Isack Hadjar",
        image: hadjarImg,
        dob: "28 September 2004",
        team:"Racing Bulls",
        nationality: "France",
        countryCode: "nl",
        wins: 0,
        titles:0,
        points:21,
        podiums:0
    },
    {
        name: "Esteban Ocon",
        image: oconImg,
        dob: "17 September 1996",
        team:"Haas",
        nationality: "France",
        countryCode: "nl",
        wins: 1,
        titles:0,
        points:465,
        podiums:4
    },
    {
        name: "Nico Hulkenberg",
        image: hulkenbergImg,
        dob: "19 August 1987",
        team:"Kick Sauber",
        nationality: "Germany",
        countryCode: "de",
        wins: 0,
        titles:0,
        points:587,
        podiums:0
    },
    {
        name: "Lance Stroll",
        image: strollImg,
        dob: "29 October 1998",
        team:"Aston Martin",
        nationality: "Canada",
        countryCode: "nl",
        wins: 0,
        titles:0,
        points:306,
        podiums:3
    },
    {
        name: "Pierre Gasly",
        image: gaslyImg,
        dob: "07 February 1996",
        team:"Alpine",
        nationality: "France",
        countryCode: "fr",
        wins: 1,
        titles:0,
        points:447,
        podiums:5
    },
    {
        name: "Yuki Tsunoda",
        image: tsunodaImg,
        dob: "30 September 1997",
        team:"Red Bull Racing",
        nationality: "Japan",
        countryCode: "nl",
        wins: 0,
        titles:0,
        points:101,
        podiums:0
    },
    {
        name: "Oliver Bearman",
        image: bearmanImg,
        dob: "08 May 2005",
        team:"Haas",
        nationality: "United Kingdom",
        countryCode: "gb",
        wins: 0,
        titles:0,
        points:13,
        podiums:0
    },
    {
        name: "Liam Lawson",
        image: lawsonImg,
        dob: "",
        team:"Racing Bulls",
        nationality: "New Zealand",
        countryCode: "nz",
        wins: 0,
        titles:0,
        points:10,
        podiums:0
    },
    {
        name: "Fernando Alonso",
        image: alonsoImg,
        dob: "29 July 1981",
        team:"Aston Martin",
        nationality: "Spain",
        countryCode: "sp",
        wins: 32,
        titles:2,
        points:2339,
        podiums:106
    },
    {
        name: "Gabriel Bortoleto",
        image: bortoletoImg,
        dob: "14 October 2004",
        team:"Kick Sauber",
        nationality: "Brazil",
        countryCode: "nl",
        wins: 0,
        titles:0,
        points:0,
        podiums:0
    },
    {
        name: "Franco Colapinto",
        image: colapintoImg,
        dob: "30 September 1997",
        team:"Alpine",
        nationality: "Argentina",
        countryCode: "nl",
        wins: 0,
        titles:0,
        points:5,
        podiums:0
    },
]

export default driverProfiles;