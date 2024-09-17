import React, {useEffect, useRef, useState} from "react";
import "./profile.css";

function Header({scrollToHome,scrollToAbout,scrollToWorks,scrollToCertificates,scrollToContact})
{
 const [Hovereditem,setHoveredItem]=useState(null);
 const [UI,setUI]=useState("./Icons/Moon UI.png");

  function chmod()
  {
   console.log(UI);
   if(UI==="./Icons/Moon UI.png") setUI("./Icons/Sun UI.png");
   else setUI("./Icons/Moon UI.png");
  }

 const getStyle=(item)=>
 ({
  fontSize:Hovereditem===item?32:30,
  textDecoration:Hovereditem===item?'underline':'none',
  color:Hovereditem===item?'lightblue':'blue',
  marginLeft:40,
  transition:'font-size 0.5s, text-decoration 0.5s, color 0.5s'
 });

  return(
    <div style={{display:'flex',border:'1px solid blue',borderRadius:8}}>
      <h2 style={{color:'blue',fontSize:30,marginLeft:30,marginRight:200}}>DARYL ANTONY LUIZ</h2>
      <h2 style={getStyle('Home')} onMouseEnter={()=>setHoveredItem('Home')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToHome} >Home</h2>
      <h2 style={getStyle('About')} onMouseEnter={()=>setHoveredItem('About')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToAbout}>About</h2>
      <h2 style={getStyle('Works')} onMouseEnter={()=>setHoveredItem('Works')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToWorks}>Works</h2>
      <h2 style={getStyle('Certificates')} onMouseEnter={()=>setHoveredItem('Certificates')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToCertificates}>Certificates</h2>
      <h2 style={getStyle('Contact')} onMouseEnter={()=>setHoveredItem('Contact')} onMouseLeave={()=>setHoveredItem(null)} onClick={scrollToContact}>Contact</h2>
      <button style={{border:'none',borderRadius:'100px',padding:15,marginTop:20,marginLeft:40,width:50,height:50,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={chmod}><img src={"./Icons/Moon UI.png"} alt="B/B Mode" style={{borderRadius:'70px',width:50}}/></button>
    </div>
  );
}

function Home()
{
  const Ico='./Icons/';
  const [Hovereditem,setHoveredItem]=useState(null);
  return(
    <div style={{marginTop:10}}>
      <div style={{display:"flex"}}>
        <div className="Title" style={{width:800,borderRadius:30,display:'inline-block'}}>
         <p style={{color:(Hovereditem==='Daryl')?'lightblue':'black',width:500,marginLeft:200,marginBottom:5,marginTop:5,fontSize:70,fontWeight:'bold',fontFamily:'Calibri',wordSpacing:30,transition:'color 0.5s'}} onMouseEnter={()=>setHoveredItem('Daryl')} onMouseLeave={()=>setHoveredItem(null)}>DARYL ANTONY</p>
         <p style={{color:(Hovereditem==='Daryl')?'lightblue':'black',width:130,marginLeft:350,marginTop:5,marginBottom:5,fontSize:70,fontWeight:'bold',fontFamily:'Calibri',transition:'color 0.5s'}} onMouseEnter={()=>setHoveredItem('Daryl')} onMouseLeave={()=>setHoveredItem(null)}>LUIZ</p>
         <p style={{width:800,marginLeft:80,fontSize:30,display:'inline-block'}}>Web developer - App Developer - Database management - Video Editor - Animation Maker - Teacher - Song Writer</p>
        </div>
        <div className="Profile Image" style={{display:'inline-block',marginLeft:150}}>
          <img src="./Daryl Photo 5.jpg" alt="Daryl's profile" style={{width:300,height:380,borderRadius:30,animation:' float 3s infinite'}}/>
        </div>
      </div>

      <p style={{marginTop:10,marginBottom:5,marginLeft:30,fontFamily:'papyrus',color:'#14e70d',fontSize:25,fontWeight:'bold',animation:'fadeInOut 3s infinite'}}>" Any fool can write code that a computer can understand. Good programmers write code that humans can understand. "</p>
      
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
        <div className="About">
        <h1 style={{marginLeft:30,color:'black'}}>About</h1>
          <div style={{width:680,marginTop:1,marginLeft:30,border:'1px solid black',borderRadius:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p style={{height:407,marginLeft:10,marginRight:10,fontSize:20,color:'black'}}>
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
                {plang.map((item,index)=>(<p key={index} style={{display:'flex',margin:'10px',backgroundColor:'#14e70d',fontSize:20,fontWeight:'bold',borderRadius:'10px',padding:5,width:150,justifyContent:'center'}}>{item}</p>))}
              </ul>
            </div>

          <h1>Frontend</h1>
          <div className="Frontend" style={{ borderRadius:'10px' }}>
            <ul style={{display:'flex',flexWrap:'wrap',padding:0,margin:0,width:550}}>
              {fl.map((item, index) => (<p key={index} style={{display:'flex',margin:'10px',backgroundColor:'#14e70d',fontSize:20,fontWeight:'bold',borderRadius:'10px',padding:5,width:150,justifyContent:'center'}}>{item}</p>))}
            </ul>
          </div>


            <h1>Backend</h1>
            <div className="Backend" style={{borderRadius:'10px'}}>
              <ul style={{display:'flex',flexWrap:'wrap',padding:0,margin:0,width:550}}>
                {bl.map((item,index)=>(<p key={index} style={{display:'flex',margin:'10px',backgroundColor:'#14e70d',fontSize:20,fontWeight:'bold',borderRadius:'10px',padding:5,width:150,justifyContent:'center'}}>{item}</p>))}
              </ul>
            </div>
          </div>
      </div>

      <div className="Skills" style={{display:'flex',height:100,marginLeft:100,marginBottom:350}}>
        <div className="Technical">
          <h1>Technical Skills</h1>
          <ul>
            {tskills.map((item,index)=>(<p key={index} style={{display:'flex',width:200,backgroundColor:'#14e70d',borderRadius:10,padding:'5px 5px 5px 5px',justifyContent:'center',alignContent:'center',fontWeight:'bold',fontSize:20}}>{item}</p>))}
          </ul>
        </div>

        <div className="Non Technical" style={{marginLeft:200}}>
          <h1>Non Technical Skills</h1>
          <ul>
            {ntskills.map((item,index)=>(<p key={index} style={{display:'flex',width:200,backgroundColor:'#14e70d',borderRadius:10,padding:'5px 5px 5px 5px',justifyContent:'center',alignContent:'center',fontWeight:'bold',fontSize:20}}>{item}</p>))}
          </ul>
        </div>

        <div className="Language" style={{marginLeft:150}}>
          <h1>Languages Known</h1>
          <ul>
            {lang.map((item,index)=>(<p key={index} style={{display:'flex',width:200,backgroundColor:'#14e70d',borderRadius:10,padding:'5px 5px 5px 5px',justifyContent:'center',alignContent:'center',fontWeight:'bold',fontSize:20}}>{item}</p>))}
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
  const Imagestyle=(idx)=>
  ({
    padding:0,
    marginLeft:70,
    marginTop:20,
    display:'inline-block',
    opacity:0,
    animation:(vis)?(idx%2===0?'slideInLeft 0.5s forwards':'slideInRight 0.5s forwards'):(idx%2===0?'slideOutLeft 0.5s forwards':'slideOutRight 0.5s forwards'),    //First cert slideleft,sec cert slideright
    animationDelay:'0.1s'
  })

  const Folder='./Works/'

  const [curIdx,setcurIdx]=useState(0);
  const [fade,setFade]=useState(true);

  const works=[{name:'Simple Icon Drag App',img:['icdg1.png','icdg2.png','icdg3.png']},
               {name:'Simple Flexing App',img:['flex.png']},
               {name:'Remade Instagram App',img:['classinsta.png','class.png']},//What abt 'class.png'?
               {name:'Card with Images App',img:['card.png']},
               {name:'Login App',img:['login1.png','login2.png','login3.png']},
               {name:'Note Taking App',img:['Starting screen.png','Note signin.png','Home screen(Categories).png','Notes screen resized.png','Note details screen.png']},
               {name:'Food Ordering App',img:['Hotel Home resized.png','Hotel dishes.png','Hotel cart.png','Hotel orders.png','Hotel order success.png','Hotel list of orders.png']},
               {name:"Route",img:['Route App.png']},
               {name:"API",img:['API app.png']},
               {name:'Todo App',img:['Todo App.png']}];

  useEffect(()=>                      //For some effects to happen
  {
    const interval=setInterval(()=>   //setInterval for effect to happen every 2 sec
    {
      setFade(false);
      setTimeout(()=>                //setTimeout for image to change with fade out on time.It waits for fade out to complete before changing the image and fading in
      {
       setcurIdx((curIdx)=>curIdx+1);
       setFade(true)
      },500);
    },2000);

    return ()=>clearInterval(interval);
  },[]);
  
  return(
    <div>
      <h1 style={{marginLeft:600,marginTop:500}}>Works</h1>
      <h3 style={{marginLeft:70,marginTop:1,marginBottom:1,fontWeight:'bold'}}>See my progress over time...</h3>
      <ul style={{padding:0,margin:0,overflow:'hidden'}}>  {/*overflow to remove Xscrollbar*/}
        {works.map((item,index)=>
        (
         <div key={index} style={Imagestyle(index)}>
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
  const Imagestyle=(idx)=>
  ({
    display:'inline-block',
    margin:10,
    zindex:1,
    opacity:0,
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
           {name:'Gate 2024 Score Card',img:'Gate score 2024.png',ht:250,wt:420}];
  return(
    <div>
      <h1 style={{marginLeft:600,marginTop:100}}>Certificates</h1>
      <ul style={{padding:0,marginLeft:10,overflow:'hidden'}}>    {/*overflow to remove Xscrollbar*/}
        {C.map((item,index)=>
        (
          <div key={index} style={Imagestyle(index)}>
            <p style={{fontSize:20,fontWeight:'bold',padding:0}}>{item.name}</p>
            <img src={Folder+item.img} alt={item.name} height={item.ht} width={item.wt} style={{border:'1px solid black',borderRadius:'10px'}}/>
          </div>
        ))}
      </ul>
    </div>
  );
}

function Contacts({scrollToHome})
{
 const [showpopup,setshowpopup]=useState(false);
 
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
      {showpopup&&<h1 style={{position: "fixed",
                              bottom: "20px",
                              right: "600px",
                              backgroundColor: "blue",
                              color: "#fff",
                              padding: "10px 20px",
                              borderRadius:50,
                              cursor: "pointer",
                              zIndex: 1000,
                              animation:'slideInBottom 0.5s forwards'}} 
                              onClick={scrollToHome}>^</h1>}
    </div>
  );
}

export default function Profile()
{
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  const [cviewed,setcviewed]=useState(false);
  const [wviewed,setwviewed]=useState(false);

  const scrollTo=(xref)=>{xref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return(
    <div>
      <Header scrollToHome={()=>scrollTo(homeRef)}
              scrollToAbout={()=>scrollTo(aboutRef)}
              scrollToWorks={()=>scrollTo(worksRef)}
              scrollToCertificates={()=>scrollTo(certificatesRef)}
              scrollToContact={()=>scrollTo(contactRef)}/>
      <div ref={homeRef}><Home/></div>
      <div ref={aboutRef}><About/></div>
      <div ref={worksRef} onMouseEnter={()=>setwviewed(true)}  onMouseLeave={()=>setwviewed(false)}><Works isW={wviewed}/></div>
      <div ref={certificatesRef} onMouseEnter={()=>setcviewed(true)}  onMouseLeave={()=>setcviewed(false)}><Certificates isC={cviewed}/></div>
      <div ref={contactRef}><Contacts scrollToHome={()=>scrollTo(homeRef)}/></div>
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

For alignment to work,first put display:'flex'

For deploying website online follow https://youtu.be/7wzuievFjrk?si=2MM_DNYPweNbGtvM (through github)
*/