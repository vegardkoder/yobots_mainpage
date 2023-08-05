import React from 'react';
import { useState } from 'react';

import './main_page.css';
import main_bg from './images/main_page1.png';
import main_dark_bg from './images/main_page_dark.png';
import visionboard_img from './images/vision_board.png';
import lighting_bulb_img from './images/lightbulb.png';
import music_section_img from './images/music_switch1.png';
import pause_music_img from './images/robot_pause.png';

const Main_Page = () => {
    const [playingMusic, setPlayingMusic] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const clickEvent = () => {
    }

    const mouseEnter = (name) => {
        console.log(name);
        if (!isDark) {
            if (name == "visionboard") {
                document.getElementById("visionboard-popup").style = "visibility: visible;";
            } else if (name == "lightbulb") {
                document.getElementById("lighting-bulb-popup").style = "visibility: visible;";
            }
        }
    }
    const mouseLeave = (name) => {
        console.log(name)
        if (!isDark) {
            if (name == "visionboard") {
                document.getElementById("visionboard-popup").style = "visibility: hidden;";
            } else if (name == "lightbulb") {
                document.getElementById("lighting-bulb-popup").style = "visibility: hidden;";
            }
        }
    }

    const switch_music = () => {
        setPlayingMusic(!playingMusic);
    }
    const switch_light = () => {
        setIsDark(!isDark);
    }

    return (
        <div className="map-section">
            <img src={isDark ? main_dark_bg : main_bg} className="main_bg"/>

            <a id="lightbulb-link" onClick={switch_light} onMouseEnter={() => mouseEnter("lightbulb")} onMouseLeave={() => mouseLeave("lightbulb")} />
            <img src={lighting_bulb_img} id="lighting-bulb-popup"/>

            <a id="visionboard-link" onMouseEnter={() => mouseEnter("visionboard")} onMouseLeave={() => mouseLeave("visionboard")} />
            <img src={visionboard_img} id="visionboard-popup" />

            <img src={music_section_img} id="music-section-img" onClick={switch_music}/>
            <img src={pause_music_img} id="pause-music-img" onClick={switch_music} style={{visibility: playingMusic ? "visible" : "hidden" }} />
        </div>
    )
}

export default Main_Page;