import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import styles from './portfolio.module.css'

export default function Projects() {
    return (
        <div className='bg-warning container-fluid' style={{ backgroundColor: '#FECD55' }}>
            <div className='row p-5'>
                <div className='col-4 d-flex text-left m-auto justify-content-center p-3'>
                    <div className="card" style={{ width: '18rem', borderRadius: ' 30px 0 30px 0' }}>
                        <img src={require('../Components/all-in-one.jpg')} className="card-img-top" alt="img" style={{borderRadius: '30px 0 0 0'}}/>
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>All In One </h5>
                            <hr/>
                            <p className="card-text" className={styles.projectDes}>A Fashion store! application is made using react, react-router, bootstrap.</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/masai-course/nj_005_shabaz/tree/master/week_11/day_4/session_1/router-project" ><img alt='img' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>             
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position:'relative' ,top:'6px' }} />                       
                                    <a href='https://router-project.now.sh/' style={{color:'#707070'}}> Demo Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 d-flex text-left m-auto justify-content-center p-3'>
                    <div className="card" style={{ width: '18rem', borderRadius: ' 30px 0 30px 0' }}>
                        <img src={require('../Components/all-in-one.jpg')} className="card-img-top" alt="img" style={{borderRadius: '30px 0 0 0'}}/>
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>All In One </h5>
                            <hr/>
                            <p className="card-text" className={styles.projectDes}>A Fashion store! application is made using react, react-router, bootstrap.</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/masai-course/nj_005_shabaz/tree/master/week_11/day_4/session_1/router-project" ><img alt='img' className='' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>             
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position:'relative' ,top:'6px' }} />                       
                                    <a href='https://router-project.now.sh/' style={{color:'#707070'}}> Demo Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4 d-flex text-left m-auto justify-content-center p-3'>
                    <div className="card" style={{ width: '18rem', borderRadius: ' 30px 0 30px 0' }}>
                        <img src={require('../Components/all-in-one.jpg')} className="card-img-top" alt="img" style={{borderRadius: '30px 0 0 0'}}/>
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>All In One </h5>
                            <hr/>
                            <p className="card-text" className={styles.projectDes}>A Fashion store! application is made using react, react-router, bootstrap.</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/masai-course/nj_005_shabaz/tree/master/week_11/day_4/session_1/router-project" ><img alt='img' className='' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>             
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position:'relative' ,top:'6px' }} />                       
                                    <a href='https://router-project.now.sh/' style={{color:'#707070'}}> Demo Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
