console.log("hello alarm")
const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('alarm.mp3');

function ringBell(e) {
    //console.log(e.offsetX, e.offsetY);
    audio.play();
    document.body.style.backgroundColor = 'lightgreen'
    document.getElementById('cancel').style.display='none'
    document.getElementById('reset').style.display='block'
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value)
    console.log(`Setting Alarm for ${alarmDate}...`);
    const now=new Date()
    tothedate=alarmDate-now
    if(tothedate>=0){
        setTimeout(()=>{
            console.log("ringing now...")
            ringBell()
        },tothedate)
    }
    else{
        // document.write(" sorry Not possible,this given time exceed")
        confirm('sorry the time has already passed')
    }
}

//for stop
const alarmstop=document.getElementById("alarmpause1")
alarmstop.addEventListener('click',stopalarm)

function stopalarm(m){
    m.preventDefault()
    audio.pause()
}

const cancel=document.getElementById("cancel")
cancel.addEventListener('click',(e)=>{
    window.onload=()=>{
        console.log("loaded")
    }
    
})