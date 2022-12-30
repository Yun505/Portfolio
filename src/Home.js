// import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import Me from "./me.jpg";
import GWC from "./gwc.jpg";
import Hiking from "./hiking.jpg";
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
               
            </div>

            {/* <MDBAccordion flush initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle='Education + Courses'>
                    <ol>Bergen County Academies 2019-2023
                        <li>Intro to Computer Science</li>
                        <li></li>
                    </ol>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </MDBAccordionItem>
            </MDBAccordion>
            ); */}


            <Carousel fade>
                <Carousel.Item>
                    <img
                        src={Me}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-white border-black inline-block rounded bg-black py-1 px-1">Hi!</h3>
                        <br></br>
                        <p  className="text-white border-black inline-block rounded font-normal text-size-2xl bg-black py-1 px-1">I love to go to the beach in the Summer.</p>
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
            </Carousel>

            <div className="edu">
                <Accordion defaultActiveKey="0" flush>
                    <Card>
                        <Accordion.Header><Card.Header>Contact Me</Card.Header></Accordion.Header>
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
