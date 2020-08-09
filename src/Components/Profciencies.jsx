import React from 'react'
import styles from './portfolio.module.css'

export default function Profciencies() {
    return (
        <div className='mt-5'>
            <hr />
            <br />
            <br />
            <br />
            <h1 className={styles.proficiencies}>Proficiencies</h1>
            <br/>
            <br/>
            <div className='row ml-md-5 ml-lg-0 pl-lg-0 pl-md-5 pl-sm-0 mr-lg-5 mr-md-0 mr-sm-0 mr-0'>
                <div className='col-lg-3 col-md-5 col-sm-12 col-xs-12'>
                    <figure>
                        <img className='mx-5 my-2' src={require('../Components/IMG_3996.jpg')} style={{ height: '250px', width: '250px' }}></img>
                    </figure>
                </div>
                <div className='col-lg-3 col-md-5 col-sm-12 col-xs-12'>
                    <figure>
                        <img alt='img' className='mx-5 my-2' src={require('../Components/IMG_3995.jpg')} style={{ height: '250px', width: '250px' }}></img>
                    </figure>
                </div>
                <div className='col-lg-3 col-md-5 col-sm-12 col-xs-12'>
                    <figure>
                        <img alt='img' className='mx-5 my-2' src={require('../Components/IMG_3994.jpg')} style={{ height: '250px', width: '250px', position: 'relative', top: '7px' }}></img>
                    </figure>
                </div>
                <div className='col-lg-3 col-md-5 col-sm-12 col-xs-12'>
                    <figure>
                        <img alt='img' className='mx-5 my-2 rounded' src={require('../Components/IMG_3993.jpg')} style={{ height: '250px', width: '250px' }}></img>
                    </figure>
                </div>
            </div>
            <div className='row m-5'>
                <div className='col m-auto text-center d-flex justify-content-center'>
                    <div className='row'>
                        <figure>
                            <img className='mx-5 my-2' src={require('../Components/github_graph.jpg')} style={{ height: '250px', width: '90%' }}></img>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
