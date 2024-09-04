import React, { useState, useRef } from "react";
import "./Features.css"
import { QuestionMark, Dots } from "../Icons/Icons";

function Tabs(data){
if(data === "abt-btn"){
    document.getElementById("abt-tab").style.display="flex";
    document.getElementById("exp-tab").style.display="none";
    document.getElementById("rec-tab").style.display="none";
}else if(data === "exp-btn"){
    document.getElementById("abt-tab").style.display="none";
    document.getElementById("exp-tab").style.display="flex";
    document.getElementById("rec-tab").style.display="none";
}else{
    document.getElementById("abt-tab").style.display="none";
    document.getElementById("exp-tab").style.display="none";
    document.getElementById("rec-tab").style.display="flex";
}
}

function Features() {
    const [exp, setExp] = useState("");
    const [rec, setRec] = useState("");
    return (
        <div className='features'>

            <div className='FeatureNavSide'>
                <QuestionMark id="qmark"/>
                <Dots id="dot"/>
            </div>

            <div className="nav-body">
                <div className='FeatureNavTop'>
                    <div id="abt-btn" onClick={(e)=>Tabs(e.target.id)}>About Me</div>
                    <div id="exp-btn" onClick={(e)=>Tabs(e.target.id)}>Experiences</div>
                    <div id="rec-btn" onClick={(e)=>Tabs(e.target.id)}>Recomended</div>
                    <div></div>
                </div>

                <div className="tabs">
                    <div id="abt-tab">
                        Hello! I’m Dave, your dedicated sales representative from Salesforce. I've been with this incredible company for over three years, and I’m excited to help you explore the powerful solutions we offer.
                        A bit about me—I was born and raised in Albany, New York, and for the past decade, I’ve been living in Santa Carla with my wonderful wife, Tiffany, and our twin daughters, Emma and Ella. At four years old, the girls have just started school, which has been a big milestone for our family. My mornings are pretty busy, so my calendar is typically blocked between 9 and 10 AM as I help get them ready and off to school. Despite the hectic start to the day, being there for them is incredibly important to me.
                        When I'm not working or spending time with my family, I enjoy exploring the beautiful outdoors around Santa Carla, whether it’s hiking, strolling along the beach, or simply unwinding in nature. I also love cooking and experimenting with new recipes.
                        At Salesforce, I’m here to make a real difference for you. My goal is to understand your unique needs and provide tailored solutions that help your business thrive. I believe in building strong, lasting relationships based on trust and transparency, so feel free to reach out anytime. I’m looking forward to working together and helping your business succeed.
                    </div>

                    <div id="exp-tab">
                        <input type="text" placeholder="Enter Your Experiences" id="exp-input"></input>
                        <div id="add-exp-btn" onClick={()=>{
                           setExp( document.getElementById("exp-input").value);
                        }}>+ Add Experiences</div>
                        <p>
                         {exp}
                        </p>
                    </div>

                    <div div id="rec-tab">
                    <input type="text" placeholder="Enter Your Experiences" id="rec-input"></input>
                        <div id="add-rec-btn" onClick={()=>{
                           setRec( document.getElementById("rec-input").value);
                        }}>+ Add Recomendation</div>
                        <p>
                         {rec}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Features