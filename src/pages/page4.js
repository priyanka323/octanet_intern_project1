import React from 'react';

function Page_4 ()  {
    const image2 = require('./octanet2.jpeg')
    return(
        <>
        <hr></hr>
        <div style={{height:'543px', display:'flex',flexDirection:'row'}}>
            <div style={{}}>
                <img src='https://octanet.in/storage/2023/04/cropped-cropped-sdrf-300x134.png' alt='img logo' />
                <div style={{width:'50%',marginLeft:'10%'}}>
                    <h1>OPPORUNITIES</h1>
                    <ul style={{margin:'10%'}}>
                        <p>•THIS INTERNSHIP IS FOR LEARNING AND
                        GROWTH</p>
                        <p> •INTERNSHIP WILL HELP YOU TO IMPROVE
                        YOUR EMPLOYABILITY PROSPECTS</p>
                    </ul>
                </div>            
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                
                <div style={{width:'50%'}}>
                    <img src={image2} style={{height:'90%',width:'400px',marginRight:'5%',marginTop:'0px'}}/>
                    
                </div>
            </div>
            
        </div>
        </>
    )
};
export default Page_4;