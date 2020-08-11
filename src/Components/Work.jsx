import React from 'react'
import styles from './portfolio.module.css'

export default function Work() {
    return (
        <div className='container-flow'>
            <div className='row m-5 p-5'>
                <div className='col'>
                    <h1 className={styles.work} style={{ height:'160px', width:'160px',marginTop:'10px', border: '20px solid #FECD55', borderRadius: '100%' }}>
                        <span style={{position:'relative', top:'40px'}}>1200+</span>
                    </h1>
                    <div className={styles.label} >
                        Hours <br />
                        Coding
                    </div>
                </div>
                <div className='col'>
                    <h1 className={styles.work}  style={{ height:'160px', width:'160px',marginTop:'10px', border: '20px solid #FECD55', borderRadius: '100%' }}>
                    <span style={{position:'relative', top:'40px'}}>200+</span>
                    </h1>
                    <div className={styles.label}>
                        Hackerank <br />
                        DS problems
                    </div>
                </div>
                <div className='col'>
                    <h1 className={styles.work}  style={{ height:'160px', width:'160px',marginTop:'10px', border: '20px solid #FECD55', borderRadius: '100%' }}>
                    <span style={{position:'relative', top:'40px'}}>290+</span>
                    </h1>
                    <div className={styles.label}>
                        Git <br />
                        Commits
                    </div>
                </div>
                <div className='col'>
                    <h1 className={styles.work}  style={{ height:'160px', width:'160px',marginTop:'10px', border: '20px solid #FECD55', borderRadius: '100%' }}>
                    <span style={{position:'relative', top:'40px'}}>100+</span>
                    </h1>
                    <div className={styles.label}>
                        Hours <br />
                        Soft skills
                    </div>
                </div>
            </div>
        </div>
    )
}
