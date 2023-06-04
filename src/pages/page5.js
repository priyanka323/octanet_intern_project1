import React from 'react';
import {FiPhoneCall} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {TfiWorld} from 'react-icons/tfi'
function Page_5 ()  {
    // const image1 = require('./octanet.png')
    return(
        <>
        <hr></hr>
        <div style={{height:'543px',}}>
            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8qmOXbHtY3J6PfoUCPf2kT5aed14ddG9o-ev2dO_q3JJuRv9P' style={{backgroundSize:'cover',width:'40%',position:'absolute',opacity:'0.1'}}/>
            <div >
                <img src='https://octanet.in/storage/2023/04/cropped-cropped-sdrf-300x134.png' alt='img logo' style={{marginLeft:'900px'}} />
            </div>
            <div style={{marginLeft:'50%',marginTop:'6%'}}>
                <div style={{display:'flex',flexDirection:'row'}}>
                   <FiPhoneCall/>
                   <h4 style={{marginLeft:'5%', marginTop:'0px'}}>+91 7789001085</h4>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                   <AiOutlineMail/>
                   <h4 style={{marginLeft:'5%', marginTop:'0px'}}>support@octanet.in</h4>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                   <TfiWorld/>
                   <h4 style={{marginLeft:'5%', marginTop:'0px'}}>www.octanet.in</h4>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                   <AiFillLinkedin/>
                   <h4 style={{marginLeft:'5%', marginTop:'0px'}}>OctaNet</h4>
                </div>
                
            </div>
            
        </div>
        </>
    )
};
export default Page_5;