/*********************************
 ********AUTHOR: MICHAEL_KING****
 ***The answer to your question; 'Your Eyes thats all'.
 **************27/11/2018 *****/

$(document).ready(() => {

    /****************BIG BITCOIN APPEARS AND DISSAPEARS***********************/
  
    const $bitcoinGroup = $('#bitcoin-group'),
        $letters = $('.cls-5'),
        $bitcoinFifthRoll = $('#bitcoin-5'),
        $bodyContainer = $('body, .container-all'),
        $sectionsAppear =$('#bitcoin--logo, .myBitcharge, .line, .section'), 
        $allLettersDissapear = $('#letters'),
        $button = $('.raise'),
        $myDrawSvg = new TimelineMax({
            paused: false
        });
    TweenMax.set($('.bitcoin-big-wrapper'), {
        css: {
            display: 'block',
            zIndex:999
        }
    })

    TweenMax.set($letters, {
        opacity: 1,
        visibility: 'visible',
        fill: '#e62739',
        stroke: '#e62739'
    });
    TweenMax.set($bitcoinGroup, {
        opacity: 1,
        visibility: 'visible'
    });
    TweenMax.set($bodyContainer, {
        css: {
            height: 'auto'
        }
    })
   


    function $allcontents() {

        $myDrawSvg.staggerFrom($letters, 0.5, {
                drawSVG: '49% 51%',
                opacity: 0,
                stroke: '#e62739',
                strokeMiterlimit: "10",
                strokeWidth: "160",
                scale:1.5,
                delay: 0.5
            }, 0.4)
            .to($bitcoinFifthRoll, 0.5, {
                drawSVG: ' -50%',
                strokeWidth: '0',
                fill: 'none'
            })
            .from($bitcoinGroup, 1, {
                rotation: 360,
                transformOrigin: '50% 50%',
                opacity: 0,
                ease: Expo.easeIn
            }, '-=0.6')
            .staggerTo($letters, 1, {
                drawSVG: '-50%',
                strokeWidth: '0',
                fill: 'none',
                display: 'none'
            })
            .to($bitcoinGroup, 1, {
                x: -300,
                rotation: 360,
                transformOrigin: '50% 50%',
                opacity: 0,
                ease: Expo.easeOut
            }, '-=0.5')
            .set($bodyContainer, {
                css: {
                    height: '100vh'
                }
            })
            .set($sectionsAppear, {css:{display:'block'}})
            .staggerFrom($sectionsAppear, 1, {opacity:'0', y:-100}, 0.7)//the contents.
            .from($button, 0.5, {x:-200, opacity: 0, ease: Expo.easeIn },'-=0.5')
            .call( walletPlay)//call function to play the animation
            .set($('.border--highlight'), {display:'block'})
            .from($('.border--highlight'),0.5, {opacity:0, scale:1}, '+=0.5')
            .set($('.bitcoin-big-wrapper'), {
        css: {
            display: 'block',
            zIndex:-999
        }
    })
            
    }
    $allcontents();

    /******************bitcoin-wallet ***********************/

    const $wallet_ = $('.cls'),
        $allContentsWallet = $('#shadow, #BIG--brown, #outer--and--inner,#outer--and--inner-2, #opener, #path, #holder, #holder-2, #dot--lines'),
        $dot = $('#dot--lines'),
        $bigcoin = $('#big--coin, #big--coin-2, #big--coin-3').toArray(),
        $myWalletTimeline = new TimelineMax({
            paused: true
        });

    //TweenMax.staggerFrom($wallet_, 0.5,{drawSVG:'49% 51%', opacity:0, strokeWidth:"50"}, 0.4)
    function $myBrownWallet() {
        $myWalletTimeline.call($myBigcoin)
        TweenMax.set($('#wallet'), {display:'block'})
        $allContentsWallet.each(function (index, e) {
            TweenMax.set($(e), {
                fill: 'none'
            });
            if ($(e).hasClass('dot')) {
                console.log(e)
                $myWalletTimeline.from($(e), 0.5, {
                    opacity: 0
                })

            } else if ($(e).hasClass('holder--2')) {
                $myWalletTimeline.set($(e), {
                        fill: '#d8d7d6'
                    })
                    .from($(e), 0.5, {
                        opacity: 0,
                        stroke: 'none',
                        strokeWidth: '0'
                    })
            } else if ($(e).hasClass('holder')) {
                $myWalletTimeline.set($(e), {
                        fill: '#636363'
                    })
                    .from($(e), 0.5, {
                        opacity: 0,
                        stroke: 'none',
                        strokeWidth: '0'
                    })
            } else if ($(e).hasClass('small--path')) {
                $myWalletTimeline.set($(e), {
                        fill: '#cdaf75'
                    })
                    .from($(e), 0.5, {
                        opacity: 0,
                        stroke: 'none',
                        strokeWidth: '0'
                    })
            } else if ($(e).hasClass('cls-6')) {
                $myWalletTimeline.staggerFrom($(e), .5, {
                        x: function (i) {
                            return i * 100
                        },
                        opacity: 0
                    })
                    .to($(e), 0.5, {
                        fill: '#cd983f'
                    }, '-=0.5')
            } else if ($(e).hasClass('brown')) {
                $myWalletTimeline.from($(e), .5, {
                        drawSVG: '-50% -50%',
                        strokeWidth: "40",
                        stroke: '#e7c100',
                        opacity: 0,
                        y: -100
                    })
                    .to($(e), 0.5, {
                        fill: '#634a23'
                    }, '-=0.5')
                //TweenMax.set($(e), {fill:'#634a23'})
            } else if ($(e).hasClass('shadow')) {
                //TweenMax.set($(e), {fill:'#0c0c0b'})
                $myWalletTimeline.from($(e), .5, {
                        drawSVG: '-50% -50%',
                        strokeWidth: "40",
                        stroke: '#634a23',
                        opacity: 0
                    })
                    .to($(e), 0.5, {
                        fill: '#0c0c0b'
                    }, '-=0.5')
            }
        })
    }
    
    
    function walletPlay(){//call function to play the animation
        let $mySavedbrownWallet = $myBrownWallet()
        $myWalletTimeline.play()
    }
  

    const $coin = new TimelineMax({
        paused: true,
        repeat: -1
    });
    TweenMax.set($bigcoin, {
        display: 'block',
        opacity: 1,
        y: -550,
        scale: 1
    });
    $coin.to($bigcoin[0], 0.9, {
            y: 200,
            opacity: 0.5
        })
        .to($bigcoin[1], 1, {
            y: 400
        }, '-=0.5')
        .to($bigcoin[2], 1, {
            y: 500,
            scale: 1.3
        }, '-=0.5')



    function $myBigcoin() {

        $coin.play().delay(5)

    }
 
     

    /*****************button onclick ***************************/


      const $flexContents = $('.flex--contents'),
        $borderHighlight = $('.border--highlight'),
        $float = $('.float'),
        $spinCoin =$('#spin--coin'),
        $slideLeft = $('.slide--left'),
       $slideLeft2= $('.slide--left2'),
        $button2 = $('.raise2'),
       click = true;
    
            
    
           TweenMax.set($spinCoin, {
                    rotationY: 180,
                    transformOrigin: '50% 50%',
                    display:'block'
                })
    
            let mySpin = new TimelineMax({
                paused: true,
            });
            mySpin.to([$flexContents, $float], 0.5, {display:'none'})
                   .to($borderHighlight,0.5, {
                   y:200, opacity:0
            })
                .from($spinCoin, 0.5, {
                    rotationY: 0,
                    transformOrigin: '50% 50%',
                    opacity:0,
                    repeat: 4
                })
                .to($spinCoin, 0.5, {
                    rotationY: 0,
                    transformOrigin: '50% 50%',
                   repeat: 4
                })
                .set($spinCoin, {x:'-180%', opacity: 0})
                .to($slideLeft, 0.5, {display:'block', width: '50%', height:'100%', zIndex:1})
                .to($slideLeft2, 0.5, {display:'block', width: '50%', height:'100%', zIndex:1});
                
                       
                
    $button.on('click', () => {
        
        if (click === true) {
            $coin.pause()
            mySpin.play().delay(1)
          
        }
    })
    $button2.on('click', ()=>{
        if(click === true){
            $coin.play().delay(1)
             mySpin.reverse()
           
        }
    })









})
