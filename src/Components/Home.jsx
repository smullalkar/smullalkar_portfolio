import React from 'react'
import styles from './portfolio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                <img alt='img' src={require('../Components/IMG_3392.jpg')} style={{ height: '150px', width: '150px', border: 'solid #FECD55 15px' }} className='m-auto rounded-circle'></img>
            </div>
            <div className='row'>
                <div className='m-auto text-center'>
                    <p className={styles.name}>Shabaz K Mullalkar</p>
                    <h4 className={styles.profession}>Full Stack Developer</h4>
                </div>
            </div>
            <div className='row' className={styles.locationPosition} style={{ marginTop: '10px' }}>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center offset-lg-1 offset-md-1'>
                        <FontAwesomeIcon icon={faMapPin} style={{ color: '#FECD55', marginRight: '5px', position: 'relative', top: '6px' }} />
                        <a className={styles.locationFontsize} href='https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.954517,77.3507316,10z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627'>Bangalore, Karnataka, India</a>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-12 col-xs-12 d-flex justify-content-md-center justify-content-sm-center justify-content-center'>
                        <FontAwesomeIcon icon={faPhone} style={{ color: '#FECD55', marginRight: '5px', position: 'relative', top: '6px' }} />
                        <span className={styles.locationFontsize} href='https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.954517,77.3507316,10z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627'>+91 812 3332 662</span>
                    </div>
                    <div className='col-lg col-md col-sm-12 col-xs-12 d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center'>
                        <FontAwesomeIcon icon={faMailBulk} style={{ color: '#FECD55', marginRight: '5px', position: 'relative', top: '6px' }} />
                        <span className={styles.locationFontsize} href='https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.954517,77.3507316,10z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627'>smullalkar@gmail.com</span>
                    </div>
                </div>
            </div>
            <br />
            <div className='row'>
                <div className='row m-auto text-center'>
                    <div className='col m-auto text-center'>
                        <a href="https://github.com/smullalkar" ><img alt='img' src={require('../Components/github-icon.svg')} style={{ height: '40px', width: '40px' }}></img></a>
                    </div>
                    <div className='col m-auto text-center'>
                        <a href="https://www.hackerrank.com/smullalkar" ><img alt='img' src={require('../Components/hackerank.png')} style={{ height: '40px', width: '40px' }}></img></a>
                    </div>
                    <div className='col m-auto text-center'>
                        <a href="https://www.linkedin.com/in/shabaz-mullalkar-0755601a1/" ><img alt='img' src={require('../Components/linkedin.svg')} style={{ height: '40px', width: '80px' }}></img></a>
                    </div>
                </div>
            </div>
            <div className='row' style={{ marginTop: '20px', color: '#A8A8A8', fontSize: '14px' }}>
                <p className='m-auto text-center'>Aspiring Full Stack Web Developer.<br />
                moulded and shaped by Masai School's intensive training program. I want to work in such a way that can inspire others <br />
                and lead to the growth of mine as well as the organisation i will work with.</p>
            </div>
            <br />
            <br />
            <div>
                <div className='row'>

                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                        <figure>
                            <img className='mx-5 my-2' src={require('../Components/html-5.svg')} style={{ height: '100px', width: '100px' }}></img>
                            <figcaption>HTML-5</figcaption>
                        </figure>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                        <figure>
                            <img alt='img' className='mx-5 my-2' src={require('../Components/github-icon.svg')} style={{ height: '100px', width: '100px' }}></img>
                            <figcaption>GITHUB</figcaption>
                        </figure>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                        <figure>
                            <img alt='img' className='mx-5 my-2' src={require('../Components/css-3.svg')} style={{ height: '100px', width: '100px' }}></img>
                            <figcaption>CSS-3</figcaption>
                        </figure>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                        <figure>
                            <img alt='img' className='mx-5 my-2 rounded' src={require('../Components/bootstrap.svg')} style={{ height: '100px', width: '100px' }}></img>
                            <figcaption>BOOTSTRAP</figcaption>
                        </figure>
                    </div>

                </div>
                <br />
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                        <figure>
                            <img alt='img' className='mx-5 my-2 rounded-circle' src={require('../Components/react.svg')} style={{ height: '100px', width: '100px' }}></img>
                            <figcaption>REACT</figcaption>
                        </figure>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                        <figure>
                            <img alt='img' className='mx-5 my-2' src={require('../Components/javascript.svg')} style={{ height: '100px', width: '100px', borderRadius: '15px' }}></img>
                            <figcaption>JavaScript</figcaption>
                        </figure>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                        <figure>
                            <img alt='img' className='mx-5 my-2' src={require('../Components/redux.svg')} style={{ height: '100px', width: '100px', borderRadius: '15px' }}></img>
                            <figcaption>REDUX</figcaption>
                        </figure>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                        <figure>
                            <img alt='img' className='mx-5 my-2' src={require('../Components/python.svg')} style={{ height: '100px', width: '100px', borderRadius: '15px' }}></img>
                            <figcaption>PYTHON</figcaption>
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    )
}
