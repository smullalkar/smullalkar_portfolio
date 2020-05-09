import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import styles from './portfolio.module.css'

export default function Projects() {
    return (
        <div className='container-fluid' style={{backgroundColor:'#FECD55'}}>
            <br/>
            <br/>
            <h1 className={styles.project}>Projects</h1>
            <div className='row p-5'>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-0 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: ' 30px 0 30px 0' }}>
                        <img src={require('../Components/all-in-one.jpg')} className="card-img-top" alt="img" style={{borderRadius: '30px 0 0 0', height:'250px', width:'100%', backgroundSize:'cover'}}/>
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>All In One </h5>
                            <hr/>
                            <p className="card-text" className={styles.projectDes}>A Fashion store!<br/> this application is made using react, react-router, bootstrap. <br/> Shop for Men, Women and Kids!</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/masai-course/nj_005_shabaz/tree/master/week_11/day_4/session_1/router-project" ><img alt='img' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>             
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position:'relative' ,top:'6px' }} />                       
                                    <a href='https://router-project.now.sh/' style={{color:'#707070'}}> Demo Link</a>
                                </div>
                            </div>
                            <hr/>
                            <div className='row'>
                                <div className='col'>
                                    <img className='mx-2' alt='img' src={require('../Components/react.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/react-router.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/bootstrap.svg')} style={{ height: '30px', width: '30px' }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-0 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px' }}>
                        <img src={require('../Components/jobs.jpg')} className="card-img-top" alt="img" style={{borderRadius: '0 30px 0 0', height:'250px', width:'100%', backgroundSize:'cover'}}/>
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>Dream Job</h5>
                            <hr/>
                            <p className="card-text" className={styles.projectDes}>A Job Portal!<br/> this application is made using react, react-router, bootstrap, axios.<br/> You can search for job here.</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/smullalkar/masai-module-3/tree/master/Project/module-3" ><img alt='img' className='' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>             
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position:'relative' ,top:'6px' }} />                       
                                    <a href='https://github-job-portal.now.sh/' style={{color:'#707070'}}> Demo Link</a>
                                </div>
                            </div>
                            <hr/>
                            <div className='row'>
                                <div className='col'>
                                    <img className='mx-2' alt='img' src={require('../Components/react.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/react-router.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/bootstrap.svg')} style={{ height: '30px', width: '30px' }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-0 mt-sm-4 mt-4'>
                    <div className="card" style={{borderRadius: '0 30px 0 30px' }}>
                        <img src={require('../Components/all-in-one.jpg')} className="card-img-top" alt="img" style={{borderRadius: '0 30px 0 0', height:'250px', width:'100%', backgroundSize:'cover'}}/>
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>All In One </h5>
                            <hr/>
                            <p className="card-text" className={styles.projectDes}>A Fashion store!<br/> this application is made using react, react-router, bootstrap. <br/> Shop for Men, Women and Kids!</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/masai-course/nj_005_shabaz/tree/master/week_11/day_4/session_1/router-project" ><img alt='img' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>             
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position:'relative' ,top:'6px' }} />                       
                                    <a href='https://router-project.now.sh/' style={{color:'#707070'}}> Demo Link</a>
                                </div>
                            </div>
                            <hr/>
                            <div className='row'>
                                <div className='col'>
                                    <img className='mx-2' alt='img' src={require('../Components/react.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/react-router.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/bootstrap.svg')} style={{ height: '30px', width: '30px' }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}
