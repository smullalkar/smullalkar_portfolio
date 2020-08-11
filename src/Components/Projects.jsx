import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import styles from './portfolio.module.css'

export default function Projects() {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#FECD55' }}>
            <br />
            <br />
            <h1 className={styles.project}>Projects</h1>
            <div className='row p-5'>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px' }}>
                        <img src={require('../Components/POS-Systems.png')} className="card-img-top" alt="img" style={{ borderRadius: '0 30px 0 0', height: '250px', width: '100%', backgroundSize: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>POS App</h5>
                            <hr />
                            <p className="card-text" className={styles.projectDes}>Point of sale!<br /> very first end to end application built using react,redux,flask,and mysql <br /> Users can manage stock data, supplier's data, customer's data, and they can also generate the bills!</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/smullalkar/Project-POS" ><img alt='img' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position: 'relative', top: '6px' }} />
                                    <a href='https://posproject.smullalkar.tech' style={{ color: '#707070' }}> Demo Link</a>
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col'>
                                    <img className='mx-2' alt='img' src={require('../Components/react.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/react-router.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/bootstrap.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/flask.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/redux.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/aws-ec2.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/mysql.svg')} style={{ height: '30px', width: '30px' }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px' }}>
                        <img src={require('../Components/marks_recorder.jpg')} className="card-img-top" alt="img" style={{ borderRadius: '0 30px 0 0', height: '250px', width: '100%', backgroundSize: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>Marks Reccorder </h5>
                            <hr />
                            <p className="card-text" className={styles.projectDes}>Student marks managment system!<br /> this application is made using react, react-router, material-ui, flask <br /> Mentain records of student's marks!</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/smullalkar/Marks_Recorder" ><img alt='img' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position: 'relative', top: '6px' }} />
                                    <a href='https://marksrecordproject.smullalkar.tech' style={{ color: '#707070' }}> Demo Link</a>
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col'>
                                    <img className='mx-2' alt='img' src={require('../Components/react.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/react-router.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/material-ui.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/flask.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/redux.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/aws-ec2.svg')} style={{ height: '30px', width: '30px' }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: ' 30px 0 30px 0' }}>
                        <img src={require('../Components/all-in-one.jpg')} className="card-img-top" alt="img" style={{ borderRadius: '30px 0 0 0', height: '250px', width: '100%', backgroundSize: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>All In One </h5>
                            <hr />
                            <p className="card-text" className={styles.projectDes}>A Fashion store!<br /> this application is made using react, react-router, bootstrap. <br /> Shop for Men, Women and Kids!</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/smullalkar/Allinone" ><img alt='img' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position: 'relative', top: '6px' }} />
                                    <a href='allinone.smullalkar.tech' style={{ color: '#707070' }}> Demo Link</a>
                                </div>
                            </div>
                            <hr />
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
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: '0 30px 0 30px' }}>
                        <img src={require('../Components/jobs.jpg')} className="card-img-top" alt="img" style={{ borderRadius: '0 30px 0 0', height: '250px', width: '100%', backgroundSize: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>Dream Job</h5>
                            <hr />
                            <p className="card-text" className={styles.projectDes}>A Job Portal!<br /> this application is made using react, react-router, bootstrap, axios.<br /> You can search for job here.</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/smullalkar/github-Jobs" ><img alt='img' className='' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position: 'relative', top: '6px' }} />
                                    <a href='https://githubjobsproject.smullalkar.tech' style={{ color: '#707070' }}> Demo Link</a>
                                </div>
                            </div>
                            <hr />
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
                <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt-md-4 mt-lg-4 mt-sm-4 mt-4'>
                    <div className="card" style={{ borderRadius: ' 30px 0 30px 0' }}>
                        <img src={require('../Components/covid-19.jpg')} className="card-img-top" alt="img" style={{ borderRadius: '30px 0 0 0', height: '250px', width: '100%', backgroundSize: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title" className={styles.projectTitle}>COVID-19</h5>
                            <hr />
                            <p className="card-text" className={styles.projectDes}>COVID stats based on countries!<br /> this application is made using HTML, JQuery, Bootstrap. <br /> See the covid stats of all the countries of the world!</p>
                            <div className='row'>
                                <div className='col-5 d-flex justify-content-end'>
                                    <a href="https://github.com/smullalkar/Covid-19" ><img alt='img' src={require('../Components/github-icon.svg')} style={{ height: '30px', width: '30px' }}></img></a>
                                </div>
                                <div className='col-7 d-flex justify-content-start'>
                                    <FontAwesomeIcon icon={faLink} style={{ color: '#707070', marginRight: '5px', position: 'relative', top: '6px' }} />
                                    <a href='https://covidproject.smullalkar.tech' style={{ color: '#707070' }}> Demo Link</a>
                                </div>
                            </div>
                            <hr />
                            <div className='row'>
                                <div className='col'>
                                    <img className='mx-2' alt='img' src={require('../Components/html-5.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/jquery.svg')} style={{ height: '30px', width: '30px' }}></img>
                                    <img className='mx-2' alt='img' src={require('../Components/bootstrap.svg')} style={{ height: '30px', width: '30px' }}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
