$('document').ready(()=>{

    currentState = Object.keys(states)[0]

    $(window).click(() => {
        if(currentState != undefined){
            renderTransformations(states[currentState])
            currentState = nextState(states, currentState)
            console.log(currentState)
        }
        
    })
})

const states = {
    "frame1": {
        "#curtain": {
            "opacity": "0"
        },
        "#rock": {
            "top": "75%"
        },
        "#tree1": {
            "top": "5%"
        },
        "#bg_img": {
            "scale": "102%",
            "top": "-1%"
        }
    },
    "frame2": {
        "#firstquota": {
            "left": "62%",
            "opacity": "1"
        },
        "#openingtext": {
            "opacity": "0"
        }
    },
    "frame3": {
        "#firstquota": {
            "opacity": "0"
        }
    },
    "frame4": {
        "#redcurtain": {
            "opacity": "0.6"
        }
    },
    "frame5": {
        "#redcurtain": {
            "opacity": "0.8"
        }
    },
    "frame6": {
        "#redcurtain": {
            "opacity": "0.9"
        }
    },
    "frame7": {
        "#phone": {
            "opacity": "1",
            "top": "50%"
        }
    },
    "frame8": {
        "#phone": {
            "opacity": "0",
            "top": "150%"
        },
        "#redcurtain": {
            "transition": "1.5s ease-in",
            "opacity": "0"
        },
        "#personwaving": {
            "opacity": "1"
        },
        "#dialogue": {
            "opacity": "1"
        }
    },
    "lastframe": {
        "#curtain": {
            "opacity": "1",
        },
        "#closingtext": {
            "opacity": "1"
        },
        "body": {
            "overflow": "visible"
        },
        "#tree1": {
            "visibility": "hidden"
        },
        "#rock": {
            "visibility": "hidden"
        },
        "#bg_img": {
            "visibility": "hidden"
        },
        "#personwaving": {
            "visibility": "hidden"
        },
        "#dialogue": {
            "visibility": "hidden"
        }
    }
}

function nextState(states, currentState){
    var currentIndex = Object.keys(states).indexOf(currentState)
    if (currentIndex ==  Object.keys(states).length - 1){
        return;
    }
    return Object.keys(states)[currentIndex + 1];
}

function renderTransformations(newState){
    for(element in newState){
        $(element).css(newState[element])
    }
}