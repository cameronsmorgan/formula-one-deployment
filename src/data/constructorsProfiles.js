import mercedesImg from '../assets/images/teamImages/mercedes.png'
import redbullImg from '../assets/images/teamImages/redbull.png'
import ferrariImg from '../assets/images/teamImages/ferrari.png'
import mclarenImg from '../assets/images/teamImages/mclaren.png'
import williamsImg from '../assets/images/teamImages/241111_1245_FW46_AA_RightCGI-removebg-preview.png'
import astonImg from '../assets/images/teamImages/aston.png'
import alpineImg from '../assets/images/teamImages/alpine.png'
import haasImg from '../assets/images/teamImages/haas.png'
import sauberImg from '../assets/images/teamImages/sauber.png'
import racingbullsImg from '../assets/images/teamImages/racingbulls.png'

let constructorProfiles = [
  {
    name: "Mercedes",
    logo: mercedesImg,
    teamPrincipal: "Toto Wolff",
    firstEntry: "1970",
    championships: 8,
    country: "Germany",
    countryCode: "de",
    wins: 120,
    poles: 133,
    podiums: 302,
    themeColor: "#00D2BE", // 🟢 Teal

  },
  {
    name: "Red Bull Racing",
    logo: redbullImg,
    teamPrincipal: "Christian Horner",
    firstEntry: "1997",
    championships: 6,
    country: "Austria",
    countryCode: "at",
    wins: 124,
    poles: 106,
    podiums: 286,
    themeColor: "#1E41FF", // 🔵 Dark Blue

  },
   {
    name: "Ferrari",
    logo: ferrariImg,
    teamPrincipal: "Fred Vasseur",
    firstEntry: "1950",
    championships: 16,
    country: "Italy",
    countryCode: "it",
    wins: 249,
    poles: 253,
    podiums: 831,
    themeColor: "#DC0000", 

  },
   {
    name: "Mclaren",
    logo: mclarenImg,
    teamPrincipal: "Andrea Stella",
    firstEntry: "1966",
    championships: 9,
    country: "United Kingdom",
    countryCode: "uk",
    wins: 196,
    poles: 170,
    podiums: 538,
    themeColor: "#FF8000",
  },
   {
    name: "Williams Racing",
    logo: williamsImg,
    teamPrincipal: "James Vowles",
    firstEntry: "1978",
    championships: 9,
    country: "United Kingdom",
    countryCode: "uk",
    wins: 114,
    poles: 128,
    podiums: 313,
    themeColor: "#005AFF",
  },
   {
    name: "Haas",
    logo: haasImg,
    teamPrincipal: "Ayao Komatsu",
    firstEntry: "2016",
    championships: 0,
    country: "United States of America",
    countryCode: "us",
    wins: 0,
    poles: 1,
    podiums: 0,
    themeColor:"#B6BABD"
  },
   {
    name: "Alpine",
    logo: alpineImg,
    teamPrincipal: "Flavio Briatore",
    firstEntry: "1986",
    championships: 2,
    country: "France",
    countryCode: "at",
    wins: 21,
    poles: 20,
    podiums: 103,
    themeColor: "#FF4FA0"
  },
   {
    name: "Racing Bulls",
    logo: racingbullsImg,
    teamPrincipal: "Laurent Mekies",
    firstEntry: "1985",
    championships: 0,
    country: "Italy",
    countryCode: "it",
    wins: 2,
    poles: 1,
    podiums: 2,
    themeColor:"#001D4C"
  },
   {
    name: "Kick Sauber",
    logo: sauberImg,
    teamPrincipal: "Christian Horner",
    firstEntry: "1993",
    championships: 0,
    country: "Switzerland",
    countryCode: "at",
    wins: 1,
    poles: 1,
    podiums: 10,
    themeColor: "#00E701"
  },
  {
    name: "Aston Martin",
    logo: astonImg,
    teamPrincipal: "Andy Cowell",
    firstEntry: "2018",
    championships: 0,
    country: "United Kingdom",
    countryCode: "uk",
    wins: 1,
    poles: 1,
    podiums: 9,
    themeColor: "#00665E"
  },
  
];

export default constructorProfiles;