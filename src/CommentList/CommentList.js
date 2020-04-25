import React from 'react';
import { Comment } from '../Comment/Comment';


 export function CommentList() {
    return (
        <div>
            <h1>Article Comments</h1>
            <Comment author="Mor Azulay" date="24/04/2020 14:34" content="A new model by the Network Science Institute at Northeastern University in Boston shows the first infections came from China in early or mid-January, and that the virus went undetected because many people were not presenting symptoms."/>
            <Comment author="Bar Lary" date="24/04/2020 15:01" content="A new model by the Network Science Institute at Northeastern University in Boston shows the first infections came from China in early or mid-January, and that the virus went undetected because many people were not presenting symptoms."/>
            <Comment author="Aviv Halperin" date="25/04/2020 03:04" content="A new model by the Network Science Institute at Northeastern University in Boston shows the first infections came from China in early or mid-January, and that the virus went undetected because many people were not presenting symptoms."/>
        </div>
    );
}
