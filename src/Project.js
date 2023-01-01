import Card from 'react-bootstrap/Card';
import "./dist/output.css"
import "./App.css"
export default function Project() {
    return (
        <div className="container pl-20 pr-20">
            <br></br>
            <br></br>
            <h1 className="text-5xl">Projects</h1>
            <br></br>
            <Card className="hover:shadow-lg" style={{ width: '450', backgroundColor: '#e9d5ff' }} >
                <iframe width="stretch" height="315" src="https://www.youtube.com/embed/ijfOmpE0Msg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body className="text-medium">
                    <Card.Title>Current Project: Alumni Portal</Card.Title>
                    <Card.Text>
                        Prototype Demo for clients to give feedback on the portal's functions.
                        We are currently working with administration to create the first ever BCA-Alumni Portal.
                        Further explanation in video.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link className="text-purple-800 border-white inline-block rounded hover:bg-purple-300 hover:text-black px-2" href="https://github.com/RemingtonKim/AcademiesAlumni">GitHub</Card.Link>
                    <Card.Text className="text-end text-white  inline-block rounded bg-purple-400 px-2">NodeJS, ExpressJS, Bootstrap, Tailwind, JavaScript, ReactJS, MySQL, Google Sheets, Auth0</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card className="hover:shadow-lg" style={{ width: '450', backgroundColor: '#e9d5ff' }}>
                <iframe width="stretch" height="315" src="https://www.youtube.com/embed/Ot85pQ76atM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body>
                    <Card.Title>AP Microeconomics Dating Simulation</Card.Title>
                    <Card.Text>
                        <p>This was created for a unit review presentation in microeconomics to engage my classmates at the end of the lesson. During the presentation I reviewed why the question was wrong before moving on to the next one. The pictures are of BCA that I took and edited. There are 6 endings with the higher the ending number, the happier the ending. Penalty points do not correspond with ending numbers. The less penalty points you have, the better.
                        </p>
                        <p>Goal: to get as many correct answers to win the heart of the textbook character like any other dating simulation
                        </p>
                        <p>Wrong Answer: Takes player to  fitness center, the "dungeon" as BCA students call it + penalty point.
                        </p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link className="text-purple-800 border-white inline-block rounded hover:bg-purple-300 hover:text-black px-2" href="https://github.com/Yun505/MicroDatingSimulation">GitHub</Card.Link>
                    <Card.Text className="text-end text-white  inline-block rounded bg-purple-400 px-2">Ren'Py, Python</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card className="hover:shadow-lg" style={{ width: '450', backgroundColor: '#e9d5ff' }}>
            <iframe width="stretch" height="315" src="https://www.youtube.com/embed/JDNeyeTWXgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body>
                    <Card.Title>Natto Obstacle Course</Card.Title>
                    <Card.Text>
                        <p>One day, I was eating Natto and struggling to get some of the sticky strings out of my hair when I came up with this idea. The layout is that of the bowl where the player is a rice grain trying to navigate through the bowl without hitting the obstacles. Each obstacle slows down the player when hit but by different speeds. The player becomes red when they hit an obstacle.
                            There are two levels in this game and the second level has more obstacles + is faster.
                        </p>
                        <p>Three obstacles: Sticky Natto, Natto, Sticky Strings</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link className="text-purple-800 border-white inline-block rounded hover:bg-purple-300 hover:text-black px-2" href="https://github.com/Yun505/Natto_Obstacle_Course">GitHub</Card.Link>
                    <Card.Text className="text-end text-white  inline-block rounded bg-purple-400 px-2">C#, Unity </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card className="hover:shadow-lg" style={{ width: '450', backgroundColor: '#e9d5ff' }}>
                <iframe width="stretch" height="315" src="https://www.youtube.com/embed/GSpHw8jqjdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body>
                    <Card.Title>Music Classifier</Card.Title>
                    <Card.Text>
                        <p>The user is able to sign up/into the GUI and can choose to get song recommendations by inputting a song into the system. The system will tell the user what genre it is in the console and give song recommendations through the model. The song recommendations will show up in the Previous Song Recommendations section. The user can also play or stop a file they chose to check if it's the right song.
                        </p>
                        <p>Awarded: Most Technically Complex End of Year Project</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body  >
                    <Card.Link className="text-purple-800 border-white inline-block rounded hover:bg-purple-300 hover:text-black px-2" href="https://github.com/Yun505/MusicClassifier">GitHub</Card.Link>
                    <Card.Text className="text-end text-white  inline-block rounded bg-purple-400 px-2">Librosa,
                        Sklearn,
                        Pandas,
                        Tkinter,
                        Numpy,
                        Winsound,
                        Selenium(+chrome driver),

                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card className="hover:shadow-lg" style={{ width: '450', backgroundColor: '#e9d5ff' }}>
            <iframe width="stretch" height="315" src="https://www.youtube.com/embed/xOyyNY_SQwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body>
                    <Card.Title>BlackJack GUI</Card.Title>
                    <Card.Text>
                        <p>Player can choose 3 modes: AI, 2 player, 4 player to play the game. The game was designed with the idea in mind that players could play in the same room on one computer without knowing the other player’s cards.
                            Cards are randomly imported into the hands of the players. The player has the option to hit or pass each turn. If a player goes over 21 or chooses to keep their hand, the next player now has the same choice.
                            If the last player goes over 21 or chooses to keep their hand, the game will go to a screen, which will show who wins and add a counter for who won.

                        </p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link className="text-purple-800 border-white inline-block rounded hover:bg-purple-300 hover:text-black px-2" href="https://github.com/Yun505/Midyear-Project-Blackjack">GitHub</Card.Link>
                    <Card.Text className="text-end text-white  inline-block rounded bg-purple-400 px-2">Tkinter, Python, Paint 3D</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card className="hover:shadow-lg" style={{ width: '450', backgroundColor: '#e9d5ff' }}>
                <iframe width="stretch" height="315" src="https://www.youtube.com/embed/3Bsgfa6kNRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body>
                    <Card.Title>Rocket Game</Card.Title>
                    <Card.Text>
                        <p>The player must navigate the rocket through the terrain to the green launchpad. If the player hits an obstacle or falls down, they will start over from the launchpad. The player would press space to move the rocket up, A to move left, and D to move right. </p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link className="text-purple-800 border-white inline-block rounded hover:bg-purple-300 hover:text-black px-2" href="https://github.com/Yun505/rocket">GitHub</Card.Link>
                    <Card.Text className="text-end text-white  inline-block rounded bg-purple-400 px-2">C#, Unity</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            {/* <Card className="hover:shadow-lg" style={{ width: '450', backgroundColor: '#e9d5ff' }} >
                <iframe width="stretch" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body>
                    <Card.Title>Experimental: Music / CSS Website</Card.Title>
                    <Card.Text>
                        alskjf;lsadf
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link className="text-purple-800 border-white inline-block rounded hover:bg-purple-300 hover:text-black px-2" href="https://github.com/Yun505/MakeAWebPageProject">GitHub</Card.Link>
                    <Card.Link className="text-purple-800 border-white inline-block rounded hover:bg-purple-300 hover:text-black px-2" href="https://yun505.github.io/MakeAWebPageProject/">Website</Card.Link>
                </Card.Body>
            </Card>
            <br></br> */}
            {/* <Card style={{ width: '450' }}>
                <iframe width="stretch" height="315" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body>
                    <Card.Title>Librosa Model</Card.Title>
                    <Card.Text>
                        asdfkljsdklfj;sf
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="/https://github.com/RemingtonKim/AcademiesAlumni">GitHub</Card.Link>
                </Card.Body>
            </Card> */}
        </div>
    );
}