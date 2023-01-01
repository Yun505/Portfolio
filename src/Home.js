// import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Me from "./me.jpg";
import GWC from "./gwc.jpg";
import Hiking from "./hiking.jpg";
import Capstone from "./capstone.jpg";
import "./dist/output.css";

export default function Home() {
    return (
        <div className="container pl-20 pr-20">
            <br></br>
            <br></br>
            <h1 className="text-6xl">Hello, I'm Hayun Jung</h1>
            <br className="space-y-8"></br>
            <br className="space-y-8"></br>
            <div className="text-2xl space-y-3">
                <p>I'm a senior at <a className="text-purple-400 border-white inline-block rounded hover:bg-purple-300 hover:text-black" href="https://www.bergen.org/bca">Bergen County Academies </a> studying in ATCS (Academy of Technology and Computer Science).</p><p> I like making games + experimenting with web development and machine learning in my free time. </p>
                <br></br>
                <br></br>
            </div>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        src={Me}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-white border-black inline-block rounded bg-black py-1 px-1">Hi!</h3>
                        <br></br>
                        <p className="text-white border-black inline-block rounded font-normal text-size-2xl bg-black py-1 px-1">My favorite color is purple.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={GWC}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white border-black inline-block rounded bg-black py-1 px-1">Girls Who Code 2021-22</h3>
                        <br></br>
                        <p><a className="text-white border-black inline-block rounded font-normal text-size-2xl bg-black py-1 px-1" href="https://www.instagram.com/gwc.bca/">@gwc.bca</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Hiking}
                        alt="Third Slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white border-black inline-block rounded bg-black py-1 px-1">Hiking</h3>
                        <br></br>
                        <p className="text-white border-black inline-block rounded font-normal text-size-2xl bg-black py-1 px-1">
                            One of my favorite ways to destress with my friends.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Capstone}
                        alt="Fourth Slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white border-black inline-block rounded bg-black py-1 px-1">Capstone</h3>
                        <br></br>
                        <p className="text-white border-black inline-block rounded font-normal text-size-2xl bg-black py-1 px-1">
                            My teamates and I currently working on our capstone project. 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <br></br>
            <div className="edu">
                <Accordion defaultActiveKey="0" flush>
                    <Card>
                        <Accordion.Header className="text-xl"><Card.Header>Contact Me:</Card.Header></Accordion.Header>
                        <Accordion.Body>
                            <Card.Body>
                                <Card.Text>
                                    <p><a className="inline-block block border border-white rounded text-xl py-2 px-4 font-medium text-black hover:bg-purple-400 hover:text-white" href="mailto:yunjun505@gmail.com">yunjun505@gmail.com</a></p>
                                    <p><a className="inline-block block border border-white rounded  text-xl py-2 px-4 font-medium text-black hover:bg-purple-400 hover:text-white" href="https://github.com/Yun505">GitHub</a></p>
                                </Card.Text>
                            </Card.Body>
                        </Accordion.Body>
                    </Card>
                </Accordion>
            </div>
        </div>
    )
}
