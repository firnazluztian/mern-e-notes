import React from 'react'
import faker from 'faker';
import Container from './Container'

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
      h5={faker.lorem.sentence()}
      p={faker.lorem.paragraph()}
    />

    <Container
      isRight={true}
      bgcolor=""
      src="https://cw-production-assetsbucket-8j84s7jns7p2.s3.amazonaws.com/media/blog-images/responsive-web-design-caktus.gif?rev=d5ba3501"
      alt=""
      h1="Responsive"
      h5={faker.lorem.sentence()}
      p={faker.lorem.paragraph()}
    />

    <Container
      isMid={true}
      bgcolor="lightgrey"
      h1="Sign up and try it out now"
      h5={faker.lorem.sentence()}
      p={faker.lorem.paragraph()}
      btnName="Sign me up now"
    />

    <Container isFooter={true} bgcolor='' />

  </div>
}

export default HomePage