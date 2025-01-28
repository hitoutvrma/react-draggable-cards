import React, { useRef } from 'react';
import Card from './Card'

function Foreground() {

    const ref = useRef(null);
    // const data = [
    //     icon, desc, filesize, closeordownload, tagdetails
    // ]
    const data = [
        {
            title: "GTA 6",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sunt.",
            filesize: "0.5mb",
            available: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600" }
        },
        {
            title: "Cyberpunk 2077",
            desc: "Step into the futuristic world of Cyberpunk with breathtaking visuals.",
            filesize: "1.2gb",
            available: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-blue-600" }
        },
        {
            title: "Minecraft",
            desc: "Unleash your creativity in this open-world sandbox game.",
            filesize: "300mb",
            available: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-yellow-500" }
        },
        {
            title: "Call of Duty: Warzone",
            desc: "Battle Royale like never before in Call of Duty: Warzone.",
            filesize: "2.5gb",
            available: false,
            tag: { isOpen: true, tagTitle: "Coming Soon", tagColor: "bg-gray-500" }
        },
        {
            title: "Assassin's Creed Valhalla",
            desc: "Live the saga of a Viking raider in the stunning world of Assassin's Creed.",
            filesize: "3gb",
            available: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-purple-700" }
        },
        {
            title: "Fortnite",
            desc: "Join the ultimate battle royale experience with Fortnite.",
            filesize: "500mb",
            available: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-orange-600" }
        },
        {
            title: "The Witcher 3: Wild Hunt",
            desc: "Embark on a grand adventure in this critically acclaimed RPG.",
            filesize: "1.5gb",
            available: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600" }
        },
        {
            title: "PUBG: Battlegrounds",
            desc: "Gear up and fight to be the last one standing in PUBG.",
            filesize: "1.8gb",
            available: false,
            tag: { isOpen: true, tagTitle: "Coming Soon", tagColor: "bg-red-800" }
        },
        {
            title: "Red Dead Redemption 2",
            desc: "Experience life as an outlaw in this open-world epic.",
            filesize: "4gb",
            available: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-blue-800" }
        },
        {
            title: "League of Legends",
            desc: "Master your champion and claim victory in this MOBA classic.",
            filesize: "600mb",
            available: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-pink-500" }
        }
    ];
    
  return (
    <div ref={ref} className='fixed p-4 z-3 top-0 left-0 w-full h-full items-center justify-center flex gap-5 flex-wrap'>
        {data.map((item, index) =>(
            <Card data ={item} reference={ref}/>
        ) )
        }
    </div>
  )
}

export default Foreground
