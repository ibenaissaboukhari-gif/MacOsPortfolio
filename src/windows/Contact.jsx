import React from 'react'
import {WindowControls} from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>
            
            <div className="p-5 space-y-5">
                <img
                    src="/images/Benaissa.jpg" alt="Benaissa" className="w-20 rounded-full"
                />

                <h3>Let's Connect</h3>
                <p>Got an idea ? or just wanna talk ? I'm in.</p>

                <ul>
                    {socials.map(({id, bg, link, icon,text})=>(
                        <li key={id} style={{backgroundColor: bg }}>
                            <a
                            href={link}
                            rel="noopener noreferrer"
                            target={text}
                            >
                                <img src={icon} alt={text} className="size-5"/>
                                <p>{text}</p>
                            </a>
                            </li>
                    ))}
                </ul>
            </div>

        </>
    )
}
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
