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
            <div className='row m-5'>
                <div className='col m-auto text-center d-flex justify-content-center'>
                    <div className='row'>
                        <figure>
                            <img className='mx-5 my-2' src={require('../Components/IMG_3996.jpg')} style={{ height: '250px', width: '250px' }}></img>
                        </figure>
                    </div>
                    <div className='row'>
                        <figure>
                            <img alt='img' className='mx-5 my-2' src={require('../Components/IMG_3995.jpg')} style={{ height: '250px', width: '250px' }}></img>
                        </figure>
                    </div>
                    <div className='row'>
                        <figure>
                            <img alt='img' className='mx-5 my-2' src={require('../Components/IMG_3994.jpg')} style={{ height: '250px', width: '250px' }}></img>
                        </figure>
                    </div>
                    <div className='row'>
                        <figure>
                            <img alt='img' className='mx-5 my-2 rounded' src={require('../Components/IMG_3993.jpg')} style={{ height: '250px', width: '250px' }}></img>
                        </figure>
                    </div>
                </div>
            </div>
            <div className='row m-5'>
                <div className='col m-auto text-center d-flex justify-content-center'>
                    <div className='row'>
                        <figure>
                            <img className='mx-5 my-2' src={require('../Components/github_graph.jpg')} style={{ height: '100%', width: '70%' }}></img>
                        </figure>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}
