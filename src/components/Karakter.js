// Karakter bileşeniniz buraya gelecek

import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionBody
} from "reactstrap";
import Filmler from "./Filmler.js";
import { KarakterBilgileri } from "./styled.js";
import "bootstrap/dist/css/bootstrap.min.css";



export default function Karakter({ karakter }) {
    
    const [selectedKarakter, setSelectedKarakter] = useState(false);


    function handleAccordionClick(id) {
        setSelectedKarakter(selectedKarakter === id ? null : id);
    }

    return (
        <KarakterBilgileri>
            <Accordion open={selectedKarakter} toggle={handleAccordionClick}>
                <AccordionItem>
                    <AccordionHeader targetId="1">{karakter.name}</AccordionHeader>
                    <AccordionBody accordionId="1"><div>
                    <p>height : {karakter.height}</p>
                    <p>mass : {karakter.mass}</p>
                    <p>hair_color : {karakter.hair_color}</p>
                    <p>skin_color : {karakter.skin_color}</p>
                    <p>eye_color : {karakter.eye_color}</p>
                    <p>birth_year : {karakter.birth_year}</p>
                    <p>gender : {karakter.gender}</p>
                    <p>homeworld : {karakter.homeworld}</p>
                    <Filmler filmler={karakter.films} />
                </div>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </KarakterBilgileri>
    );
};