import React from 'react'
import faker from 'faker';
import { Link } from '@reach/router'
import { Button } from '@blueprintjs/core'

const ImgContainer = ({alt, src}) => {
    return (
      <div>
        <img alt={alt} src={src} />
      </div>
    );
  };
  
  const TextContainer = ({h1, h5, p}) => {
    return (
      <div className="container-fluid box" id="parent" style={{textAlign: 'center'}}>
        <div className="container box" id="child">
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
        {isMain && <div className="container section" id="child">
            <div class="row">
                <div class="col-sm">
                    <ImgContainer src={src} alt={alt} />
                </div>
                <div class="col-sm">
                    <div className="container-fluid box" id="parent" style={{textAlign: 'center'}}>
                        <div className="container box" id="child">
                            <h1>{h1}</h1>
                            <h5>{h5}</h5>
                            <p>{p}</p>
                            <Link to="/signup">
                                <Button intent='primary'>Signup</Button>
                            </Link>
                            <span style={{padding: '5px'}} />
                            <Link to="/login">
                                <Button intent='success'>Login</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>}

        {isMid &&
        <div
            className="container"
            style={{paddingTop: 2 + 'em', paddingBottom: 2 + 'em'}}
        >
            <TextContainer h1={h1} h5={h5} p={p} />
            <Link to="/signup">
              <Button intent="primary" large>{btnName}</Button>
            </Link>

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

const HomePage = () => {
    return <div>
    <Container
      isMain={true}
      bgcolor="white"
      src="/img/header.jpg"
      alt=""
      h1="E-Student Notes"
      h5="The only app that you will ever need for your notes taking"
    />
    <Container
      isLeft={true}
      bgcolor="lightgrey"
      src="/img/sec1.png"
      alt=""
      h1="Simple and Fast"
      h5={faker.lorem.sentence ()}
      p={faker.lorem.paragraph ()}
    />
    <Container
      isRight={true}
      bgcolor=""
      src="https://cw-production-assetsbucket-8j84s7jns7p2.s3.amazonaws.com/media/blog-images/responsive-web-design-caktus.gif?rev=d5ba3501"
      alt=""
      h1="Responsive"
      h5={faker.lorem.sentence ()}
      p={faker.lorem.paragraph ()}
    />
    <Container
      isMid={true}
      bgcolor="lightgrey"
      h1="Sign up and try it out now"
      h5={faker.lorem.sentence ()}
      p={faker.lorem.paragraph ()}
      btnName="Sign me up now"
    />
  </div>
}

export default HomePage