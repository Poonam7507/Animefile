import Card from './Card_char'
import img1 from '../assets/images/harry.jpg'
import img2 from '../assets/images/hermoine.jpg'
import img3 from '../assets/images/ron.jpg'
import img4 from '../assets/images/ginny.jpg'
import img5 from '../assets/images/draco.jpg'
import img6 from '../assets/images/voldemort.jpg'
import img7 from '../assets/images/albus dumbledore.jpg'
import img8 from '../assets/images/snape.jpg'

const product=()=>{
    const arr=[
        {
            id:1,
            title:"HarryPotter",
            description:"Harry James Potter is the main character in J. K. Rowling's Harry Potter fantasy series. The books cover seven years in the life of the orphan who, on his 11th birthday, learns he is a wizard and the son of magical parents Lily and James Potter.",
            image: <img  src={img1} alt=""/>
          
    
    
        },
        {
            id:2,
            title:'Hermione Jean Granger',
            description:"Hermione Jean Granger is a Muggle-born Gryffindor, who becomes best friends with Harry Potter and Ron Weasley. J.K. Rowling states that she was born on 19 September 1979 and she was nearly twelve when she first attended Hogwarts.",
            image: <img  src={img2} alt=""/>
    
    
        },
        {
            id:3,
            title:'Ron Weasley',
            description:"Ronald Bilius Weasley is a fictional character in J. K. Rowling's Harry Potter fantasy novel series. His first appearance was in the first book of the series, Harry Potter and the Philosopher's Stone, as the best friend of Harry Potter and Hermione Granger.",
            image:<img  src={img3} alt=""/>
    
        },
        {
            id:4,
            title:'Ginny Weasley',
            description:'Ginny Weasley is a pureblood witch born on 11 August 1981, the seventh child and only daughter of Arthur and Molly Weasley. She attended Hogwarts School of Witchcraft and Wizardry, and was sorted into Gryffindor house, along with the rest of her family.',
            image:<img  src={img4} alt=""/>
    
    
        },
        {
            id:5,
            title:'Draco Lucius Malfoy',
            description:"Draco Lucius Malfoy is a fictional character in J. K. Rowling's Harry Potter series. He is a student in Harry Potter's year belonging in the Slytherin house. He is frequently accompanied by his two cronies, Vincent Crabbe and Gregory Goyle",
            image:<img  src={img5} alt=""/>
    
        },
        {
            id:6,
            title:'Voldemort',
            description:"Voldemort is the archenemy of Harry Potter, who according to a prophecy has 'the power to vanquish the Dark Lord'. He attempts to murder the boy, but instead kills his parents, Lily and James Potter, and leaves Harry with a scar on his forehead in the shape of a lightning bolt.",
            image:<img  src={img6} alt=""/>
    
    
        },{
            id:7,
            title:'Albus Dumbledore',
            description:"Albus Percival Wulfric Brian Dumbledore is a fictional character in J. K. Rowling's Harry Potter series. For most of the series, he is the headmaster of the wizarding school Hogwarts.",
            image:<img  src={img7} alt=""/>
    
    
        },{
            id:8,
            title:'Severus Snape',
            description:"Severus Snape is a fictional character in J. K. Rowling's Harry Potter series. He is an exceptionally skilled wizard whose sarcastic, controlled exterior conceals deep emotions and anguish.",
            image:<img  src={img8} alt="" style={{marginBottom:"10vw"}}/>
    
    
        }
    ]
    return(
        <div className="product" >{
            arr.map((arr,id)=>{
                return <Card key={id} image={arr.image} title={arr.title} description={arr.description} />
            
            })
        }
        </div>
        )
        }
    
        
    
    export default product;