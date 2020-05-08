import React from 'react'
import styles from './portfolio.module.css'

export default function Work() {
    return (
        <div className='container-flow'>
            <div className='row m-5 p-5'>
                <div className='col'>
                    <h1 className={styles.work} style={{ padding: '50px', border: '20px solid #FECD55', borderRadius: '100%' }}>
                        1000+
                    </h1>
                    <div className={styles.label} >
                        Hours <br />
                        Coding
                    </div>
                </div>
                <div className='col'>
                    <h1 className={styles.work}  style={{ padding: '50px', border: '20px solid #FECD55', borderRadius: '100%' }}>
                        100+
                    </h1>
                    <div className={styles.label}>
                        Hackerank <br />
                        DS problems
                    </div>
                </div>
                <div className='col'>
                    <h1 className={styles.work}  style={{ padding: '50px', border: '20px solid #FECD55', borderRadius: '100%' }}>
                        120+
                    </h1>
                    <div className={styles.label}>
                        Git <br />
                        Commits
                    </div>
                </div>
                <div className='col'>
                    <h1 className={styles.work}  style={{ padding: '50px', border: '20px solid #FECD55', borderRadius: '100%' }}>
                        100+
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
