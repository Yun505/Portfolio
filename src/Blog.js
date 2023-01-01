import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import "./dist/output.css"
import luna from "./luna.png"
import butter from "./butter.jpg"
import escape from "./escape.jpg"
import rain from "./rain.jpg"
import giant from "./giant.jpg"
import bowling from "./bowling.jpg"
export default function Blog() {
    return (
        <div className="container pl-20 pr-20">
            <br></br>
            <br></br>
            <h1 className="text-5xl">Sporadically Updated</h1>
            <br></br>
            <br></br>
            <MDBAccordion flush initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle='Reborn Rich Kdrama 12/10/22' className="blog-accordion text-xl">
                    <p>Recently, I've been binging Reborn Rich. It's really good not just becuase of my favorite actor(Song Joon Ki) being there,
                        but the plot leaves me glued to the screen. I've been recommending it to everyone that likes Kdramas and I'm really glad
                        they're releasing 3 episodes. I heard the book they based the story off is really good and I'm looking forward to reading it
                        soon.
                    </p>
                    <p>This is kind of silly, but this show makes me want to learn stocks and invest more. My favorite character currently isn't who Song Joon Ki plays, but
                        the grandfather. I think his actor should honestly win an award this year, the acting was phenomenal.
                        His character is probably the smartest in the entire show. It's not Dojun who knows the future, although he is brilliant in his own way.
                        It's really fun seeing the historic events during my parent's time like the IMF crisis in the show and I find the parallels to Samsung pretty interesting
                        with calling the company Soonyang and all.
                    </p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6lGImvjI_Sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </MDBAccordionItem>
                <br></br>
                <MDBAccordionItem collapseId={2} headerTitle='NYC Food Trip 11/30/22' className="blog-accordion text-xl">
                    <p>My friend and I had been wanting to go to a restaurant since the Summer, but we didn't have time to because of school work and
                        writing essays :(. It was also really hard to get a reservation so when we finally had time, I recall I stayed up until midnight
                        (when the reservation site opens) to get a seat. We also went to nearby bakeries for some snacks and had a lot of fun.</p>
                        <img src={butter}></img>
                    <br></br>
                    <p>We got butterbeer later at the Harry Potter store. The drink was amazing and it was cool how we got the cup as a souvenir.
                        We stayed pretty late in the city and the city was so much prettier during the dark. I was kind of scared when waiting for our ride, but otherwise
                        I surprisingly felt relatively safe walking around.
                    </p>
                    <br></br>
                  
                </MDBAccordionItem>
                <br></br>

                <MDBAccordionItem collapseId={3} headerTitle='Escape Room 11/9/22' className="blog-accordion text-xl">
                    <img src={escape}></img>
                    <br></br>
                    <p>I tried an Escape Room for the first time. The lady in charge of our
                        room was super nice and gave us a lot of clues. Despite the clues, we still struggled with the high difficulty level, but it was fun overall.
                    </p>


                </MDBAccordionItem>
                <br></br>
                <MDBAccordionItem collapseId={4} headerTitle='Moon Poem  10/30/22' className="blog-accordion text-xl">
                    <p>Recently, I started to use LunaDiary on my phone again. I used it alot during April to organize my thoughts, but
                        I've picked up on it again. I think I got reminded of it when I saw how beautiful the moon was a couple days ago. I highly reccomend using the
                        app, the UI is very pleasing and it's simple to use. I found
                        something that I wrote on April 7th and here are some lines that I liked from it...
                    </p>
                    <p>You say you're not the sun, the shining light everyone likes, loves and adores,</p>
                    <p>that you're foregotten,</p>
                    <p> but to me you're my favorite light, calm and wise.</p>
                    <p>I like you the light that won't burn me if I stand too close, the light I can stare at forever. </p>
                    <p> The light that keeps me company in the dark, reassuring me that I'm not alone.</p>
                    <p>
                        The light that shines unlike the rest, able to see past my walls of complex thought.
                    </p>
                    <a href="https://apps.apple.com/us/app/luna-diary/id1536708339"><img src={luna} ></img></a>
                </MDBAccordionItem>
                <br></br>
                <MDBAccordionItem collapseId={5} headerTitle='Rain = Umbrella 10/15/22' className="blog-accordion text-xl">
                    <img src={rain}></img>
                    <br></br>
         
                    <p>Couldn't find a picture of a rainy day recently, so this one's a old picture that I liked. 
                    As I was walking through the rain this morning, on my daily walk during first period, I couldn't help but to start writing
                    a comparison of the umbrella to a character relationship in a current TV show I was watching.  </p>
                    <br></br>
                    <p>You're like my umbrella, </p>
                    <p>hiding me from the pouring rain but not enough to completely cover me, just the perfect amount to let me have rain droplets
                        cool me down. Without you I notice the pouring rain, the world overwhelming me immediately. 
                    </p>
                    <p>You let me overcome my troubles while shielding me and keeping me warm, letting me develop slowly not shoving me into
                        the cold like the rest.
                    </p>
                    <p>You're with me through the hard storm and light rain, doing your best to protect me despite my flaws as I don't know how to hold you.
                        Despite my stupid anger when I can't understand you, struggling with opening up and running away from you.
                    </p>
                    <p>Understanding as you are, you cover me from hardships, encouraging me that it's okay to be the way I am, letting me know that time will heal me,
                        reassuring me the rain will pass- </p>
                </MDBAccordionItem>
                <br></br>
                <MDBAccordionItem collapseId={6} headerTitle='Hiking Giant Stairs 8/1/22' className="blog-accordion text-xl">
                    <p>Today, I went hiking with my friends and man the trail was difficult. When I saw the reviews online and they said it was difficult,
                        I thought it was an exaggeration, but I was sorely mistaken.
                        The entire trail was basically rocks and the weather was extremely hot.
                        My friend who is a skilled hiker was basically running up the trail, but my other friend and I struggled to catch up to her.
                        The trail became easier as time passed and the view was worth it, but I was sweating buckets when we finally took a break. 
                        We had pocky and madeleines during our break. The 2 hour hike took us 4 hours as we sat on the rocks chatting about our Summer.
                    </p>
                    <br></br>
                    <img src={giant}></img>
                </MDBAccordionItem>
                <br></br>
                <MDBAccordionItem collapseId={7} headerTitle='Bowling + Top Gun Maverick 6/8/22' className="blog-accordion text-xl">
                    <p>I've been a fan of Tom Cruise for a while and I was super psyched to watch the new movie. The action was amazing and
                       the music was perfectly incorporated throughout each scene. I think my favorite song was <a className="text-purple-400 border-white inline-block rounded hover:bg-purple-300 hover:text-black" href="https://open.spotify.com/track/4h9wh7iOZ0GGn8QVp4RAOB?si=ee40eadb7ed74da3">I Ain't Worried</a>.
                    </p>
                    <p>Afterwards we went bowling, which was really nice because I hadn't gone bowling in years. At one point I managed to knock all the pins down in one go, which surprised me. </p>
                    <br></br>
                    <img src={bowling}></img>
                </MDBAccordionItem>
                <br></br>
            </MDBAccordion>
        </div>



    )
}