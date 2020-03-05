import React from 'react'
import { navigate } from '@reach/router'
import Space from '../../../widgets/layout/Space'

const ImgContainer = ({alt, src}) => {
    return (
        <div>
        <img alt={alt} src={src} />
        </div>
    );
};
  
const TextContainer = ({h1, h5, p}) => {
    return (
    <div className="container-fluid" id="parent" style={{textAlign: 'center'}}>
        <div className="container" id="child">
        <h1>{h1}</h1>
        <h5>{h5}</h5>
        <p>{p}</p>
        </div>
    </div>
    );
};

const Container = ({bgcolor, isRight, isLeft, isMain, isMid, src, alt, h1, h5, p, btnName}) => {
    return (
    <div className="container-fluid" id="parent" style={{backgroundColor: bgcolor}}>
    {console.log('IM an app')}
        {isMain && <div className="container section" id="child">
            <div class="row">
                <div class="col-sm">
                    <ImgContainer src={src} alt={alt} />
                </div>
                <div class="col-sm">
                    <div className="container-fluid box-home" id="parent" style={{textAlign: 'center'}}>
                        <div className="container box-home" id="child">
                            <h1>{h1}</h1>
                            <h5>{h5}</h5>
                            <p>{p}</p>
                            <Space marginTop="2em" />
                            <button className='button is-info' onClick={() => navigate('/signup')}>Signup</button>
                            <span style={{padding: '5px'}} />
                            <button className='button is-success' onClick={() => navigate('/login')}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}

        {isMid &&
        <div className="container" style={{paddingTop: 2 + 'em', paddingBottom: 2 + 'em'}}>
            <TextContainer h1={h1} h5={h5} p={p} />
            <button className='button is-info' onClick={() => navigate('/signup')}>{btnName}</button>
        </div>}

        {isRight &&
        <div className="container section" id="child">
            <div class="row">
            <div class="col-sm">
                <ImgContainer src={src} alt={alt} />
            </div>
            <div class="col-sm">
                <TextContainer h1={h1} h5={h5} p={p} />
            </div>
            </div>
        </div>}

        {isLeft &&
        <div className="container section" id="child">
            <div class="row">
            <div class="col-sm">
                <TextContainer h1={h1} h5={h5} p={p} />
            </div>
            <div class="col-sm">
                <ImgContainer src={src} alt={alt} />
            </div>
            </div>
        </div>}
    </div>
    );
};

export default Container