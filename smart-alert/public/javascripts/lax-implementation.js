  $('document').ready(()=>{

    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', ()=> {
      return window.scrollY
    })

    lax.addDriver('screenWidth', () =>{
      return window.screen.width
    })

    var rock = $('#rock')

    lax.addElements(
      '.rock',
      {
        scrollY : {
          translateY: [
            [0, 600],
            [50, 'screenHeight*2 - 150'],{
              frameStep: 1  
            }
          ],

          // 'position': [
          //   [0, 600],
          //   ['absolute', 'fixed'],{
          //     cssfn: (val)=> {
          //       return `$(val)`
          //     }
          //   }
          // ]
        }
      }
    )

    // lax.addElements(
    //   '.tree1',
    //   {
    //     scrollY : {
    //        translateY: [
    //         [0, 600],
    //         ['screenHeight*0.45', 'screenHeight*0.75']
    //       ]
    //     }
    //   }
    // )

    // lax.addElements(
    //   '.curtain',
    //   {
    //     scrollY: {
    //       opacity: [
    //         ['screenHeight*8', 'screenHeight*9'],
    //         [0, 1]
    //       ]
    //     }
    //   }
    // )
  })
 

  // 


  // // addElements('.selector', {
  // //   scrollY: {
  // //     translateX: [
  // //       ["elInY", "elCenterY", "elOutY"],
  // //       [0, 'screenWidth/2', 'screenWidth'],
  // //     ]
  // //   }
  // // })

  // lax.addElements(
  //   '.rectangle',
  //   {
  //     scrollY: {
  //       translateX: [
  //         ['elInY', 'elOutY'],
  //         [0, 'screenWidth']
  //       ]
  //     }
  //   }

  // )
