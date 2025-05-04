import React, {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import "../App.css"

let mode="sun";
let bgcolor="white";
let txcolor="black";
//let col="40ccff";
let UI="./Icons/Moon UI.png";

//Handle Dark/Light Mode
function chmod()
{
  if(mode==="sun") {mode="moon";UI="./Icons/Moon UI.png";bgcolor="black";txcolor="white";}
  else             {mode="sun";UI="./Icons/Sun UI.png";bgcolor="white";txcolor="black";}
}

function Header({scrollToHome,scrollToAbout,scrollToWorks,scrollToCertificates,scrollToContact,isH})
{
 //Effects works well with "blue" or "green" but not hex colors
  let col="blue"//"#33aaff";
  let lightcol="lightblue"//"#33FFFF";

  if(bgcolor==="white") {col="blue";lightcol="lightblue";}
  else if(bgcolor==="black") {col="lime";lightcol="springgreen";}

 const [Hovereditem,setHoveredItem]=useState(null);

 const getStyle=(item)=>
 ({
  fontSize:Hovereditem===item?32:30,
  textDecoration:Hovereditem===item?'underline':'none',
  color:Hovereditem===item?lightcol:col,
  marginLeft:40,
  cursor:'pointer',
  transition:'font-size 0.5s, text-decoration 0.5s, color 0.5s',
 });

  return(
    <div className="header" style={{display:(isH)?'flex':'flex',border:'1px solid '+col,borderRadius:8}}>
      <h2 style={{color:col,fontSize:30,marginLeft:30,marginRight:200}}>DARYL ANTONY LUIZ</h2>
      <h2 style={getStyle('Home')} onMouseEnter={()=>setHoveredItem('Home')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToHome} >Home</h2>
      <h2 style={getStyle('About')} onMouseEnter={()=>setHoveredItem('About')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToAbout}>About</h2>
      <h2 style={getStyle('Works')} onMouseEnter={()=>setHoveredItem('Works')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToWorks}>Works</h2>
      <h2 style={getStyle('Certificates')} onMouseEnter={()=>setHoveredItem('Certificates')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToCertificates}>Certificates</h2>
      <h2 style={getStyle('Contact')} onMouseEnter={()=>setHoveredItem('Contact')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToContact}>Contact</h2>

      <button className="modeButton" onClick={chmod}><img src={UI} alt="D/B Mode" className="modeIcon"/></button>
    </div>
  );
}

function Home({isH})
{
  let col="blue";//"#40ccff";
  let lightcol="lightblue";

  if(mode==="sun") {col="blue";lightcol="lightblue";}//"#40ccff";
  else if(mode==="moon") {col="lime";lightcol="springgreen";}//"14E70D";

  const Ico='./Icons/';
  const [Hovereditem,setHoveredItem]=useState(null);
  
  //"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
  let jokes=[
             "Why do programmers prefer dark mode? Because light attracts bugs!",
             "What did the computer do at lunchtime? Had a byte!",
             "How do you comfort a JavaScript bug? You console it!",
             "What’s a computer’s favorite snack? Microchips!",
             "What’s a programmer’s favorite place to hang out? The Foo Bar!",
             "Why did the computer break up with the internet? There were too many connections!",
             "What’s a computer’s least favorite food? Spam!",
             "Why did the programmer go broke? Because he lost his cache!",
             'What did the Java code say to the C code? "You have no class!"',
             "Why do Java developers wear glasses? Because they can’t C#!",
             "Why was the computer cold? It left its Windows open!",
             "Why did the computer go to therapy? It had too many bytes!"
            ];
  const now=new Date();
  const hour=now.getHours(); //now.toLocaleTimeString()[0];->localetimestring works only for 1-9. For 10 to 19, [0] part returns 1,20 to 24, [0] returns 2
  return(
    <div style={{marginTop:10}}>
      <div style={{display:"flex"}}>
        <div className="Title" style={{width:800,borderRadius:30,display:'inline-block'}}>
         <p style={{color:(Hovereditem==='Daryl')?lightcol:'',width:500,marginLeft:200,marginBottom:5,marginTop:5,fontSize:70,fontWeight:'bold',fontFamily:'Calibri',wordSpacing:30,transition:'color 0.5s'}} onMouseEnter={()=>setHoveredItem('Daryl')} onMouseLeave={()=>setHoveredItem(null)}>DARYL ANTONY</p>
         <p style={{color:(Hovereditem==='Daryl')?lightcol:'',width:130,marginLeft:350,marginTop:5,marginBottom:5,fontSize:70,fontWeight:'bold',fontFamily:'Calibri',transition:'color 0.5s'}} onMouseEnter={()=>setHoveredItem('Daryl')} onMouseLeave={()=>setHoveredItem(null)}>LUIZ</p>
         <p style={{width:800,marginLeft:80,fontSize:30,display:'inline-block'}}>Web developer - App Developer - Database management - Video Editor - Animation Maker - Teacher - Song Writer</p>
        </div>

        {/* Profile Photo */}
        <div className="Profile Image" style={{display:'inline-block',marginLeft:150}}>
          <img src="./Daryl Photo 4 cropped.jpg" alt="Daryl's profile" style={{width:300,height:380,border:'3px solid '+txcolor,borderRadius:30,animation:' float 3s infinite'}}/>
        </div>
      </div>

      <p style={{marginTop:10,marginBottom:5,marginLeft:80,fontFamily:'papyrus',color:col,fontSize:25,fontWeight:'bold',animation:'fadeInOut 3s infinite'}}>{jokes[hour%12]}</p> {/*12 hours*/}
      
      <div className="Icon pins" style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'lightblue',marginLeft:250,marginTop:2,borderRadius:'70px',width:300,height:60}}>
        <button style={{border:'none',borderRadius:'100px',padding:15,marginBottom:1,marginTop:1,marginLeft:0.5,width:50,height:50,display:'flex',alignItems:'center',justifyContent:'center'}} onMouseEnter={()=>setHoveredItem('Whatsapp')} onMouseLeave={()=>setHoveredItem(null)} onClick={()=>window.open("https://web.whatsapp.com/")}><img src={Ico+"Whatsapp icon 21.png"} alt="Whatsapp icon" style={{borderRadius:'70px',width:50}}/></button>
        <button style={{border:'none',borderRadius:'100px',padding:15,marginBottom:1,marginTop:1,marginLeft:30, width:50,height:50,display:'flex',alignItems:'center',justifyContent:'center'}} onMouseEnter={()=>setHoveredItem('Facebook')} onMouseLeave={()=>setHoveredItem(null)} onClick={()=>window.open("https://www.facebook.com/profile.php?id=61561993948905")}><img src={Ico+"facebook icon 21.png"} alt="Facebook icon" style={{borderRadius:'70px',width:50}}/></button>
        <button style={{border:'none',borderRadius:'100px',padding:15,marginBottom:1,marginTop:1,marginLeft:30, width:50,height:50,display:'flex',alignItems:'center',justifyContent:'center'}} onMouseEnter={()=>setHoveredItem('Instagram')} onMouseLeave={()=>setHoveredItem(null)} onClick={()=>window.open("https://www.instagram.com/darylluiz/?next=%2F&hl=en")}><img src={Ico+"Insta icon 21.png"} alt="Instagram icon" style={{borderRadius:'70px',width:50}}/></button>
        <button style={{border:'none',borderRadius:'100px',padding:15,marginBottom:1,marginTop:1,marginLeft:30, width:50,height:50,display:'flex',alignItems:'center',justifyContent:'center'}} onMouseEnter={()=>setHoveredItem('LinkedIn')} onMouseLeave={()=>setHoveredItem(null)} onClick={()=>window.open("https://www.linkedin.com/in/daryl-antony-luiz-rajagiri-6ba82727a/")}><img src={Ico+"LinkedIn icon.png"} alt="LinkedIn icon" style={{borderRadius:'70px',width:50}}/></button>
      </div>
      {Hovereditem&&<div style={{backgroundColor:'black',color:'white',width:80,marginLeft:(Hovereditem==='Whatsapp')?260:((Hovereditem==='Facebook')?340:(Hovereditem==='Instagram'?420:500)),opacity:1,animation:'fadeIn 0.5s ease-in'}}>{Hovereditem}</div>}
    </div>
  );
}

function About()
{
  const tskills=['AI','ML','Web','Data Interpretation','Data Analysis','Presentation','MS Word','MS Powerpoint','MS Excel'];
  const ntskills=['Problem Solving','Thinking','Analytical thinking','Creativity','Research','Management','Leadership','Decision-Making','Motivation'];
  const lang=['English','Malayalam','Hindi'];
  const plang=['Python','C','Java','R','PHP'];
  const fl=['HTML','JS','CSS','ReactJS','React Native'];
  const bl=['SQL','SQLite','Oracle','MongoDB','Flask'];

  return(
    <div>
      <div style={{display:'flex'}}>
        <div className="About" style={{}}>
        <h1 style={{marginLeft:30}}>About</h1>
          <div style={{width:680,marginTop:1,marginLeft:30,border:'1px solid '+txcolor,borderRadius:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p style={{height:407,marginLeft:10,marginRight:10,fontSize:20}}>
              Hi I am an undergraduate Computer Science and Engineering student of Rajagiri School of Engineering and Technology,
              Kakkanad,Ernakulam. I was born and brought up in Ernakulam,Kerala. I have studied in Archbishop Attipetty Public 
              School,Vaduthala and completed +1 and +2 in Chinmaya Vidyalaya Vaduthala. I have little hearing problem but that has
              not stopped me from dreaming for higher things.I am always a topper in class and I have a positive outlook in my life.
              My projects have helped me to develop and improve my personal skills. I have developed many websites and apps which has
              helped me to gain experience and acquire coding and database management skills in Python, SQL, HTML, JS, CSS, ReactJS and 
              React Native as frontend language.I also know C and Java. I can use Flask as backend and have little knowledge on Django.
              I have experience in managing my project team and working together as a team.I also help others to excel.
            </p>
          </div>
        </div>

        <div className="Program skills list" style={{marginLeft:30}}>
          <h1>Programming Languages</h1>
            <div className="Coding Lang" style={{borderRadius:'10px'}}>
              <ul style={{display:'flex',flexWrap:'wrap',padding:0,margin:0,width:550}}>
                {plang.map((item,index)=>(<p key={index} className={`but1 ${(mode==='sun')?'bluetheme':'greentheme'}`}>{item}</p>))}
              </ul>
            </div>

          <h1>Frontend</h1>
          <div className="Frontend" style={{ borderRadius:'10px' }}>
            <ul style={{display:'flex',flexWrap:'wrap',padding:0,margin:0,width:550}}>
              {fl.map((item, index) => (<p key={index} className={`but1 ${(mode==='sun')?'bluetheme':'greentheme'}`}>{item}</p>))}
            </ul>
          </div>


            <h1>Backend</h1>
            <div className="Backend" style={{borderRadius:'10px'}}>
              <ul style={{display:'flex',flexWrap:'wrap',padding:0,margin:0,width:550}}>
                {bl.map((item,index)=>(<p key={index} className={`but1 ${(mode==='sun')?'bluetheme':'greentheme'}`}>{item}</p>))}
              </ul>
            </div>
          </div>
      </div>

      <div className="Skills" style={{display:'flex',height:100,marginLeft:100,marginBottom:350}}>
        <div className="Technical">
          <h1 style={{marginLeft:30}}>Technical Skills</h1>
          <ul>
            {tskills.map((item,index)=>(<p key={index} className={`but2 ${(mode==='sun')?'bluetheme':'greentheme'}`}>{item}</p>))}
          </ul>
        </div>

        <div className="Non Technical" style={{marginLeft:200}}>
          <h1>Non Technical Skills</h1>
          <ul>
            {ntskills.map((item,index)=>(<p key={index} className={`but2 ${(mode==='sun')?'bluetheme':'greentheme'}`}>{item}</p>))}
          </ul>
        </div>

        <div className="Language" style={{marginLeft:150}}>
          <h1>Languages Known</h1>
          <ul>
            {lang.map((item,index)=>(<p key={index} className={`but2 ${(mode==='sun')?'bluetheme':'greentheme'}`}>{item}</p>))}
          </ul>
        </div>

      </div>
    </div>
  );
}


//If you want certificate to be permanently visible,change opacity or comment else part of (vis)?
function Works({isW})
{
  const vis=isW;
  const navigate=useNavigate();
  const Imagestyle=(idx)=>
  ({
    padding:0,
    marginLeft:70,
    marginTop:20,
    display:'inline-block',
    opacity:0,
    cursor:'pointer',
    animation:(vis)?(idx%2===0?'slideInLeft 0.5s forwards':'slideInRight 0.5s forwards'):(idx%2===0?'slideOutLeft 0.5s forwards':'slideOutRight 0.5s forwards'),    //First cert slideleft,sec cert slideright
    animationDelay:'0.1s'
  })

  const Folder='./Works/'
  
  const [curIdx,setcurIdx]=useState(0);
  const [fade,setFade]=useState(true);

  const works=[{name:'Simple Icon Drag App',img:['icdg1.png','icdg2.png','icdg3.png']},
               {name:'Simple Flexing App',img:['flex.png']},
               {name:'Remade Instagram App',img:['classinsta.png','class.png']},
               {name:'Card with Images App',img:['card.png']},
               {name:'Login App',img:['login1.png','login2.png','login3.png']},
               {name:'Note Taking App',img:['Starting screen.png','Note signin.png','Home screen(Categories).png','Notes screen resized.png','Note details screen.png']},
               {name:'Food Ordering App',img:['Hotel Home resized.png','Hotel dishes.png','Hotel cart.png','Hotel orders.png','Hotel order success.png','Hotel list of orders.png']},
               {name:"Route",img:['Route App.png']},
               {name:"API",img:['API app.png']},
               {name:'Todo App',img:['Todo App.png']},
               {name:'Bakery Management System',img:['Preview.png','Bakery Login.png','Menu.png','Food Details.png','Bill.png','Contact.png','Bakery DB.png']},
               {name:'Traffic Signal Detection',img:['TSDR Home.png','TSDR Browse.png','TSDR Display.png','TSDR Predict.png','TSDR Performance Metric.png']}];

  useEffect(()=>                      //For some effects to happen
  {
    const interval=setInterval(()=>   //setInterval for effect to happen every 2 sec
    {
      setFade(false);
      setTimeout(()=>                //setTimeout for image to change with fade out on time.It waits for fade out to complete before changing the image and fading in
      {
       setcurIdx((curIdx)=>curIdx+1);
       setFade(true)
      },500);   //Time taken for fadeout
    },2000);  //Time taken for fadein

    return ()=>clearInterval(interval);
  },[]);
  
  return(
    <div className="Works">
      <h1 style={{marginLeft:600,marginTop:500}}>Works</h1>
      <h3 style={{marginLeft:70,marginTop:1,marginBottom:1,fontWeight:'bold'}}>See my progress over time...</h3>
      <ul style={{padding:0,margin:0,overflow:'hidden'}}>  {/*overflow to remove Xscrollbar*/}
        {works.map((item,index)=>
        (
         <div key={index} style={Imagestyle(index)} onClick={()=>navigate('/web-profile-react/displayWork')}>
          <p style={{fontSize:30,marginBottom:1}}>{item.name}</p>
          <img src={Folder+item.img[curIdx%item.img.length]} alt={item.name} style={{border:'1px solid black',borderRadius:'40px',padding:0,opacity:fade?1:0,transition:'opacity 0.5s ease-in-out'}} height="500" width="300"/>
        </div>
        ))}
      </ul>
    </div>
  );
}

//If you want certificate to be permanently visible,change opacity or comment else part of (vis)?
function Certificates({isC})
{
  const vis=isC;
  const [selectedImage, setSelectedImage]=useState(null);
  const Imagestyle=(idx)=>
  ({
    display:'inline-block',
    margin:10,
    zindex:1,
    opacity:0,
    cursor:'pointer',
    transition:'opacity 0.5s ease-in',
    animation:(vis)?(idx%3===0?'slideInLeft 0.5s forwards':(idx%3===1?'slideInTop 0.5s forwards':'slideInRight 0.5s forwards')):(idx%3===0?'slideOutLeft 0.5s forwards':(idx%3===1?'slideOutTop 0.5s forwards':'slideOutRight 0.5s forwards')),    //First cert slideleft,sec cert slidetop,third cert slideright
    animationDelay:'0.1s'
  })

  const Folder='./Certificates/'
  const C=[{name:'Codium',img:'Codium.png',ht:250,wt:420},
           {name:'Web App Development using HTML5',img:'Addon Web.jpg',ht:250,wt:420},
           {name:'QuantaCom',img:'QuantaCom.png',ht:250,wt:420},
           {name:'MendX IoT',img:'MendX IoT.png',ht:250,wt:420},
           {name:'Cybersecurity and Ethical Hacking Workshop',img:'Blue Shell Technologies.png',ht:250,wt:420},
           {name:'A3K Technical Quiz',img:'A3K Cipher Quest.png',ht:250,wt:420},
           {name:'Microsoft Intrnforte Internship',img:'Intrnforte Internship Certificate.jpg',ht:250,wt:420},
           {name:'NPTEL Swayam ML Course',img:'ML NPTEL MOOC Certificate.jpg',ht:250,wt:420},
           {name:'Gate 2024 Score Card',img:'Gate score 2024.png',ht:250,wt:420},
           {name:'NPTEL Swayam DL Course',img:'NPTEL Swayam Deep Learning-IIT Ropar Result.png',ht:250,wt:420},
           {name:'Data Analytics Course 1',img:'Google ADA Course 1.png',ht:250,wt:420},
           {name:'Data Analytics Course 2',img:'Google ADA Course 2.png',ht:250,wt:420},
           {name:'Data Analytics Course 3',img:'Google ADA Course 3.png',ht:250,wt:420}];
  return(
    <div className="Certificates" style={{position:'relative'}}>
      <h1 style={{marginLeft:600,marginTop:100}}>Certificates</h1>
      <ul style={{padding:0,marginLeft:10,overflow:'hidden'}}>    {/*overflow to remove Xscrollbar*/}
        {C.map((item,index)=>
        (
          <div key={index} style={Imagestyle(index)} onClick={()=>setSelectedImage(Folder+item.img)}>
            <p style={{fontSize:20,fontWeight:'bold',padding:0}}>{item.name}</p>
            <img src={Folder+item.img} alt={item.name} height={item.ht} width={item.wt} style={{border:'1px solid black',borderRadius:'10px'}}/>
          </div>
        ))}
      </ul>
      {selectedImage&&
      <div style={{display:'flex',flexDirection:'column',height:'800px',width:'800px', backgroundColor:'gray', position:'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius:'10px', zIndex:1000}}>
        <div style={{alignSelf:'flex-end',cursor:'pointer',textAlign:'center', padding:'5px 10px', borderRadius:'50%', backgroundColor:"lightgray", marginRight:'10px'}} onClick={()=>setSelectedImage(null)}>x</div>
        <div style={{display:'flex', justifyContent:'center'}}>
          <img src={selectedImage} alt="selected item" style={{width:550, height: 550}}/>
        </div>
      </div>}
    </div>
  );
}

function Contacts({scrollToHeader})
{
 const [showpopup,setshowpopup]=useState(false);
 const [isHovered, setIsHovered]=useState(false);
 
 //To detect web end
 useEffect(()=>
 {
  const handleScroll=()=>
  {
    const isAtBottom=window.innerHeight+window.scrollY>=document.body.offsetHeight;
    if(isAtBottom) setshowpopup(true);
    else setshowpopup(false);
  };
  window.addEventListener("scroll",handleScroll);
  return ()=>{window.removeEventListener("scroll",handleScroll);};
 },[]);

  return(
    <div style={{marginLeft:50}}>
      <h1 style={{color:'blue'}}>Contacts</h1>
      <p><b>Ph No:8075742417</b></p>
      <p><b>darylluiz1707@gmail.com</b></p>
      {showpopup&&
      <h1 style={{position: "fixed",
                  bottom: "20px",
                  right: "600px",
                  backgroundColor: isHovered ? "lightblue" : "blue",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius:50,
                  cursor: "pointer",
                  zIndex: 1000,
                  animation:'slideInBottom 0.5s forwards'}} 
                  onClick={scrollToHeader}
                  onMouseEnter={()=>setIsHovered(true)}
                  onMouseLeave={()=>setIsHovered(false)}>^</h1>}
    </div>
  );
}

export default function ProfilePage()
{
  const headerRef=useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  const [Hrviewed,setHrviewed]=useState(false);
  const [Hmviewed,setHmviewed]=useState(false);
  const [aviewed,setaviewed]=useState(false);
  const [wviewed,setwviewed]=useState(false);
  const [cviewed,setcviewed]=useState(false);
  const [conviewed,setconviewed]=useState(false);

  const scrollTo=(xref)=>{xref.current.scrollIntoView({ behavior: 'smooth' });};

  //ScrollReveal()
  useEffect(() => 
  {
   // Dynamically load ScrollReveal
   const script = document.createElement('script');
   script.src = "https://unpkg.com/scrollreveal";
   script.onload = () => 
   {
    if (window.ScrollReveal) 
    {
      /*window.ScrollReveal().reveal(headerRef.current,{reset:true,
                                                     duration:1000,
                                                     afterReveal:()=>{setHrviewed(true);},
                                                     afterReset:()=>{setHrviewed(false);}
                                                    });*/
 
      window.ScrollReveal().reveal(homeRef.current,{reset:true,
                                                    duration:1000,
                                                    afterReveal:()=>{setHmviewed(true);},
                                                    afterReset:()=>{setHmviewed(false);}
                                                   });
     window.ScrollReveal().reveal(aboutRef.current,{reset:true,
                                                    duration:1000,
                                                    afterReveal:()=>{setaviewed(true);},
                                                    afterReset:()=>{setaviewed(false);}
                                                   });

     window.ScrollReveal().reveal(worksRef.current,{reset:true,
                                                    duration:1000,
                                                    afterReveal:()=>{setwviewed(true);},
                                                    afterReset:()=>{setwviewed(false);}
                                                   });

     window.ScrollReveal().reveal(certificatesRef.current,{reset:true,
                                                          duration:1000,
                                                          afterReveal:()=>{setcviewed(true);},
                                                          afterReset:()=>{setcviewed(false);}
                                                          });

     window.ScrollReveal().reveal(contactRef.current,{reset:true,
                                                      duration:1000,
                                                      afterReveal:()=>{setconviewed(true);},
                                                      afterReset:()=>{setconviewed(false);}
                                                     });                                                     
    };
   }
   document.body.appendChild(script);

   // Cleanup script if component unmounts
   return () => {document.body.removeChild(script);};
  }, []);

  return(
    <div style={{backgroundColor:bgcolor,color:txcolor}}>
      <div ref={headerRef} onMouseEnter={()=>setHrviewed(true)} onMouseLeave={()=>setHrviewed(false)}>
        <Header scrollToHome={()=>scrollTo(homeRef)} scrollToAbout={()=>scrollTo(aboutRef)}
                scrollToWorks={()=>scrollTo(worksRef)} scrollToCertificates={()=>scrollTo(certificatesRef)}
                scrollToContact={()=>scrollTo(contactRef)} isH={Hrviewed}/>
      </div>
      <div ref={homeRef}>        <Home         isH={Hmviewed}/></div>
      <div ref={aboutRef}>       <About        isA={aviewed}/></div>
      <div ref={worksRef}>       <Works        isW={wviewed}/></div>
      <div ref={certificatesRef}><Certificates isC={cviewed}/></div>
      <div ref={contactRef}>     <Contacts     isC={conviewed} scrollToHeader={()=>scrollTo(headerRef)}/></div>
    </div>
  );
}

/*
Use https://jeffrey-chiu.medium.com/customize-your-react-project-with-fonts-b65ce0b4669d to decide font style
Use https://htmlcolorcodes.com/color-picker/ to select colour

Dark grey - #413f3f
Light grey - #bab6b6
Light green - #14e70d
Light blue - #16eee6

Available shades of blue,green:
Shades of Blue:
LightBlue: #ADD8E6
SkyBlue: #87CEEB
DeepSkyBlue: #00BFFF
DodgerBlue: #1E90FF
CornflowerBlue: #6495ED
SteelBlue: #4682B4
RoyalBlue: #4169E1
Blue: #0000FF
MediumBlue: #0000CD
DarkBlue: #00008B
Navy: #000080
MidnightBlue: #191970
PowderBlue: #B0E0E6
LightSteelBlue: #B0C4DE

Shades of Green:
LightGreen: #90EE90
PaleGreen: #98FB98
MediumSpringGreen: #00FA9A
SpringGreen: #00FF7F
Lime: #00FF00
LimeGreen: #32CD32
MediumSeaGreen: #3CB371
SeaGreen: #2E8B57
ForestGreen: #228B22
Green: #008000
DarkGreen: #006400
YellowGreen: #9ACD32
OliveDrab: #6B8E23
DarkOliveGreen: #556B2F
Teal: #008080

Shades of Red:
LightCoral: #F08080
Salmon: #FA8072
DarkSalmon: #E9967A
LightSalmon: #FFA07A
Crimson: #DC143C
Red: #FF0000
FireBrick: #B22222
DarkRed: #8B0000
IndianRed: #CD5C5C
Tomato: #FF6347
Coral: #FF7F50
Maroon: #800000

Shades of Yellow:
LightYellow: #FFFFE0
LemonChiffon: #FFFACD
LightGoldenRodYellow: #FAFAD2
PapayaWhip: #FFEFD5
Moccasin: #FFE4B5
PeachPuff: #FFDAB9
PaleGoldenRod: #EEE8AA
Khaki: #F0E68C
Yellow: #FFFF00
Gold: #FFD700
DarkKhaki: #BDB76B

Shades of Grey:
Gainsboro: #DCDCDC
LightGray / LightGrey: #D3D3D3
Silver: #C0C0C0
DarkGray / DarkGrey: #A9A9A9
Gray / Grey: #808080
DimGray / DimGrey: #696969
SlateGray / SlateGrey: #708090
DarkSlateGray / DarkSlateGrey: #2F4F4F
Black: #000000 (technically the darkest grey)

For alignment to work,first put display:'flex'

For deploying website online follow https://youtu.be/7wzuievFjrk?si=2MM_DNYPweNbGtvM (through github)
step 1: npm install gh-pages --save-dev
step 2:create new repository in gh.
step 3:Follow the rest of the git commands.
step 4:Go to package.json->before name, type "homepage": "https://dl1707.github.io/web-profile-react".
step 5:Under script, 
    {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    }
step 6:npm run deploy
step 7:Go to github -> that repository -> settings -> pages -> click on link at Your site is live at https://dl1707.github.io/web-profile-react/.

For dark mode to work fine:
* style the parent <div> component of App() with bgcolor and txcolor
* In Header(), make some event say onMouseEnter={()=>setViewed(true)} 
  and onMouseLeave={()=>setViewed(false)} on its parent <div> to 
  trigger change/update to make the whole web dark/light.
*/