import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Widgets.css'

function Widgets() {
 
    const newsArticle = (heading,subtitle) => (
        <div className='widgets__article'>
            <div className="article__widgetsLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>Linkedin News</h2>
            <InfoIcon/>
            
        </div>
        {newsArticle("This is the way","This is not the way")}
    </div>
    
  )
}

export default Widgets