import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Book.css';


import frame1 from '../../assets/animationFrames/book_cover_webp/0000.webp';
import frame2 from '../../assets/animationFrames/book_cover_webp/0001.webp';
import frame3 from '../../assets/animationFrames/book_cover_webp/0002.webp';
import frame4 from '../../assets/animationFrames/book_cover_webp/0003.webp';
import frame5 from '../../assets/animationFrames/book_cover_webp/0004.webp';
import frame6 from '../../assets/animationFrames/book_cover_webp/0005.webp';
import frame7 from '../../assets/animationFrames/book_cover_webp/0006.webp';
import frame8 from '../../assets/animationFrames/book_cover_webp/0007.webp';
import frame9 from '../../assets/animationFrames/book_cover_webp/0008.webp';
import frame10 from '../../assets/animationFrames/book_cover_webp/0009.webp';
import frame11 from '../../assets/animationFrames/book_cover_webp/0010.webp';
import frame12 from '../../assets/animationFrames/book_cover_webp/0011.webp';
import frame13 from '../../assets/animationFrames/book_cover_webp/0012.webp';
import frame14 from '../../assets/animationFrames/book_cover_webp/0013.webp';
import frame15 from '../../assets/animationFrames/book_cover_webp/0014.webp';
import frame16 from '../../assets/animationFrames/book_cover_webp/0015.webp';
import frame17 from '../../assets/animationFrames/book_cover_webp/0016.webp';
import frame18 from '../../assets/animationFrames/book_cover_webp/0017.webp';
import frame19 from '../../assets/animationFrames/book_cover_webp/0018.webp';
import frame20 from '../../assets/animationFrames/book_cover_webp/0019.webp';
import frame21 from '../../assets/animationFrames/book_cover_webp/0020.webp';
import frame22 from '../../assets/animationFrames/book_cover_webp/0021.webp';
import frame23 from '../../assets/animationFrames/book_cover_webp/0022.webp';
import frame24 from '../../assets/animationFrames/book_cover_webp/0023.webp';
import frame25 from '../../assets/animationFrames/book_cover_webp/0025.webp';
import frame26 from '../../assets/animationFrames/book_cover_webp/0026.webp';
import frame27 from '../../assets/animationFrames/book_cover_webp/0027.webp';
import frame28 from '../../assets/animationFrames/book_cover_webp/0028.webp';
import frame29 from '../../assets/animationFrames/book_cover_webp/0029.webp';
import frame30 from '../../assets/animationFrames/book_cover_webp/0030.webp';
import frame31 from '../../assets/animationFrames/book_cover_webp/0031.webp';
import frame32 from '../../assets/animationFrames/book_cover_webp/0032.webp';
import frame33 from '../../assets/animationFrames/book_cover_webp/0033.webp';
import frame34 from '../../assets/animationFrames/book_cover_webp/0034.webp';
import frame35 from '../../assets/animationFrames/book_cover_webp/0035.webp';
import frame36 from '../../assets/animationFrames/book_cover_webp/0036.webp';
import frame37 from '../../assets/animationFrames/book_cover_webp/0037.webp';
import frame38 from '../../assets/animationFrames/book_cover_webp/0038.webp';
import frame39 from '../../assets/animationFrames/book_cover_webp/0039.webp';
import frame40 from '../../assets/animationFrames/book_cover_webp/0040.webp';
import frame41 from '../../assets/animationFrames/book_cover_webp/0041.webp';
import frame42 from '../../assets/animationFrames/book_cover_webp/0042.webp';
import frame43 from '../../assets/animationFrames/book_cover_webp/0043.webp';
import frame44 from '../../assets/animationFrames/book_cover_webp/0044.webp';
import frame45 from '../../assets/animationFrames/book_cover_webp/0045.webp';
import frame46 from '../../assets/animationFrames/book_cover_webp/0046.webp';
import frame47 from '../../assets/animationFrames/book_cover_webp/0047.webp';
import frame48 from '../../assets/animationFrames/book_cover_webp/0048.webp';
import frame49 from '../../assets/animationFrames/book_cover_webp/0049.webp';
import frame50 from '../../assets/animationFrames/book_cover_webp/0050.webp';
import frame51 from '../../assets/animationFrames/book_cover_webp/0051.webp';
import frame52 from '../../assets/animationFrames/book_cover_webp/0052.webp';
import frame53 from '../../assets/animationFrames/book_cover_webp/0053.webp';
import frame54 from '../../assets/animationFrames/book_cover_webp/0054.webp';
import frame55 from '../../assets/animationFrames/book_cover_webp/0055.webp';
import frame56 from '../../assets/animationFrames/book_cover_webp/0056.webp';
import frame57 from '../../assets/animationFrames/book_cover_webp/0057.webp';
import frame58 from '../../assets/animationFrames/book_cover_webp/0058.webp';
import frame59 from '../../assets/animationFrames/book_cover_webp/0059.webp';
import frame60 from '../../assets/animationFrames/book_cover_webp/0060.webp';
import frame61 from '../../assets/animationFrames/book_cover_webp/0061.webp';
import frame62 from '../../assets/animationFrames/book_cover_webp/0062.webp';
import frame63 from '../../assets/animationFrames/book_cover_webp/0063.webp';
import frame64 from '../../assets/animationFrames/book_cover_webp/0064.webp';
import frame65 from '../../assets/animationFrames/book_cover_webp/0065.webp';
import frame66 from '../../assets/animationFrames/book_cover_webp/0066.webp';
import frame67 from '../../assets/animationFrames/book_cover_webp/0067.webp';
import frame68 from '../../assets/animationFrames/book_cover_webp/0068.webp';
import frame69 from '../../assets/animationFrames/book_cover_webp/0069.webp';
import frame70 from '../../assets/animationFrames/book_cover_webp/0070.webp';
import frame71 from '../../assets/animationFrames/book_cover_webp/0071.webp';
import frame72 from '../../assets/animationFrames/book_cover_webp/0072.webp';
import frame73 from '../../assets/animationFrames/book_cover_webp/0073.webp';
import frame74 from '../../assets/animationFrames/book_cover_webp/0074.webp';
import frame75 from '../../assets/animationFrames/book_cover_webp/0075.webp';
import frame76 from '../../assets/animationFrames/book_cover_webp/0076.webp';
import frame77 from '../../assets/animationFrames/book_cover_webp/0077.webp';
import frame78 from '../../assets/animationFrames/book_cover_webp/0078.webp';
import frame79 from '../../assets/animationFrames/book_cover_webp/0079.webp';
import frame80 from '../../assets/animationFrames/book_cover_webp/0080.webp';
import frame81 from '../../assets/animationFrames/book_cover_webp/0081.webp';
import frame82 from '../../assets/animationFrames/book_cover_webp/0082.webp';
import frame83 from '../../assets/animationFrames/book_cover_webp/0083.webp';
import frame84 from '../../assets/animationFrames/book_cover_webp/0084.webp';
import frame85 from '../../assets/animationFrames/book_cover_webp/0085.webp';
import frame86 from '../../assets/animationFrames/book_cover_webp/0086.webp';
import frame87 from '../../assets/animationFrames/book_cover_webp/0087.webp';
import frame88 from '../../assets/animationFrames/book_cover_webp/0088.webp';
import frame89 from '../../assets/animationFrames/book_cover_webp/0089.webp';
import frame90 from '../../assets/animationFrames/book_cover_webp/0090.webp';
import frame91 from '../../assets/animationFrames/book_cover_webp/0091.webp';
import frame92 from '../../assets/animationFrames/book_cover_webp/0092.webp';
import frame93 from '../../assets/animationFrames/book_cover_webp/0093.webp';
import frame94 from '../../assets/animationFrames/book_cover_webp/0094.webp';
import frame95 from '../../assets/animationFrames/book_cover_webp/0095.webp';
import frame96 from '../../assets/animationFrames/book_cover_webp/0096.webp';
import frame97 from '../../assets/animationFrames/book_cover_webp/0097.webp';
import frame98 from '../../assets/animationFrames/book_cover_webp/0098.webp';
import frame99 from '../../assets/animationFrames/book_cover_webp/0099.webp';
import frame100 from '../../assets/animationFrames/book_cover_webp/0100.webp';
import frame101 from '../../assets/animationFrames/book_cover_webp/0101.webp';
import frame102 from '../../assets/animationFrames/book_cover_webp/0102.webp';
import frame103 from '../../assets/animationFrames/book_cover_webp/0103.webp';
import frame104 from '../../assets/animationFrames/book_cover_webp/0104.webp';
import frame105 from '../../assets/animationFrames/book_cover_webp/0105.webp';
import frame106 from '../../assets/animationFrames/book_cover_webp/0106.webp';
import frame107 from '../../assets/animationFrames/book_cover_webp/0107.webp';
import frame108 from '../../assets/animationFrames/book_cover_webp/0108.webp';
import frame109 from '../../assets/animationFrames/book_cover_webp/0109.webp';
import frame110 from '../../assets/animationFrames/book_cover_webp/0110.webp';
import frame111 from '../../assets/animationFrames/book_cover_webp/0111.webp';
import frame112 from '../../assets/animationFrames/book_cover_webp/0112.webp';
import frame113 from '../../assets/animationFrames/book_cover_webp/0113.webp';
import frame114 from '../../assets/animationFrames/book_cover_webp/0114.webp';
import frame115 from '../../assets/animationFrames/book_cover_webp/0115.webp';
import frame116 from '../../assets/animationFrames/book_cover_webp/0116.webp';
import frame117 from '../../assets/animationFrames/book_cover_webp/0117.webp';
import frame118 from '../../assets/animationFrames/book_cover_webp/0118.webp';
import frame119 from '../../assets/animationFrames/book_cover_webp/0119.webp';
import frame120 from '../../assets/animationFrames/book_cover_webp/0120.webp';
import frame121 from '../../assets/animationFrames/book_cover_webp/0121.webp';
import frame122 from '../../assets/animationFrames/book_cover_webp/0122.webp';
import frame123 from '../../assets/animationFrames/book_cover_webp/0123.webp';
import frame124 from '../../assets/animationFrames/book_cover_webp/0124.webp';
import frame125 from '../../assets/animationFrames/book_cover_webp/0125.webp';
import frame126 from '../../assets/animationFrames/book_cover_webp/0126.webp';
import frame127 from '../../assets/animationFrames/book_cover_webp/0127.webp';
import frame128 from '../../assets/animationFrames/book_cover_webp/0128.webp';
import frame129 from '../../assets/animationFrames/book_cover_webp/0129.webp';
import frame130 from '../../assets/animationFrames/book_cover_webp/0130.webp';
import frame131 from '../../assets/animationFrames/book_cover_webp/0131.webp';
import frame132 from '../../assets/animationFrames/book_cover_webp/0132.webp';
import frame133 from '../../assets/animationFrames/book_cover_webp/0133.webp';
import frame134 from '../../assets/animationFrames/book_cover_webp/0134.webp';
import frame135 from '../../assets/animationFrames/book_cover_webp/0135.webp';
import frame136 from '../../assets/animationFrames/book_cover_webp/0136.webp';
import frame137 from '../../assets/animationFrames/book_cover_webp/0137.webp';
import frame138 from '../../assets/animationFrames/book_cover_webp/0138.webp';
import frame139 from '../../assets/animationFrames/book_cover_webp/0139.webp';
import frame140 from '../../assets/animationFrames/book_cover_webp/0140.webp';
import frame141 from '../../assets/animationFrames/book_cover_webp/0141.webp';
import frame142 from '../../assets/animationFrames/book_cover_webp/0142.webp';
import frame143 from '../../assets/animationFrames/book_cover_webp/0143.webp';
import frame144 from '../../assets/animationFrames/book_cover_webp/0144.webp';
import frame145 from '../../assets/animationFrames/book_cover_webp/0145.webp';
import frame146 from '../../assets/animationFrames/book_cover_webp/0146.webp';
import frame147 from '../../assets/animationFrames/book_cover_webp/0147.webp';
import frame148 from '../../assets/animationFrames/book_cover_webp/0148.webp';
import frame149 from '../../assets/animationFrames/book_cover_webp/0149.webp';
import frame150 from '../../assets/animationFrames/book_cover_webp/0150.webp';
import frame151 from '../../assets/animationFrames/book_cover_webp/0151.webp';
import frame152 from '../../assets/animationFrames/book_cover_webp/0152.webp';
import frame153 from '../../assets/animationFrames/book_cover_webp/0153.webp';
import frame154 from '../../assets/animationFrames/book_cover_webp/0154.webp';
import frame155 from '../../assets/animationFrames/book_cover_webp/0155.webp';
import frame156 from '../../assets/animationFrames/book_cover_webp/0156.webp';
import frame157 from '../../assets/animationFrames/book_cover_webp/0157.webp';
import frame158 from '../../assets/animationFrames/book_cover_webp/0158.webp';
import frame159 from '../../assets/animationFrames/book_cover_webp/0159.webp';
import frame160 from '../../assets/animationFrames/book_cover_webp/0160.webp';
import frame161 from '../../assets/animationFrames/book_cover_webp/0161.webp';
import frame162 from '../../assets/animationFrames/book_cover_webp/0162.webp';
import frame163 from '../../assets/animationFrames/book_cover_webp/0163.webp';
import frame164 from '../../assets/animationFrames/book_cover_webp/0164.webp';
import frame165 from '../../assets/animationFrames/book_cover_webp/0165.webp';
import frame166 from '../../assets/animationFrames/book_cover_webp/0166.webp';
import frame167 from '../../assets/animationFrames/book_cover_webp/0167.webp';
import frame168 from '../../assets/animationFrames/book_cover_webp/0168.webp';
import frame169 from '../../assets/animationFrames/book_cover_webp/0169.webp';
import frame170 from '../../assets/animationFrames/book_cover_webp/0170.webp';
import frame171 from '../../assets/animationFrames/book_cover_webp/0171.webp';
import frame172 from '../../assets/animationFrames/book_cover_webp/0172.webp';
import frame173 from '../../assets/animationFrames/book_cover_webp/0173.webp';
import frame174 from '../../assets/animationFrames/book_cover_webp/0174.webp';
import frame175 from '../../assets/animationFrames/book_cover_webp/0175.webp';
import frame176 from '../../assets/animationFrames/book_cover_webp/0176.webp';
import frame177 from '../../assets/animationFrames/book_cover_webp/0177.webp';
import frame178 from '../../assets/animationFrames/book_cover_webp/0178.webp';
import frame179 from '../../assets/animationFrames/book_cover_webp/0179.webp';
import frame180 from '../../assets/animationFrames/book_cover_webp/0180.webp';
import frame181 from '../../assets/animationFrames/book_cover_webp/0181.webp';
import frame182 from '../../assets/animationFrames/book_cover_webp/0182.webp';
import frame183 from '../../assets/animationFrames/book_cover_webp/0183.webp';
import frame184 from '../../assets/animationFrames/book_cover_webp/0184.webp';
import frame185 from '../../assets/animationFrames/book_cover_webp/0185.webp';
import frame186 from '../../assets/animationFrames/book_cover_webp/0186.webp';
import frame187 from '../../assets/animationFrames/book_cover_webp/0187.webp';
import frame188 from '../../assets/animationFrames/book_cover_webp/0188.webp';
import frame189 from '../../assets/animationFrames/book_cover_webp/0189.webp';
import frame190 from '../../assets/animationFrames/book_cover_webp/0190.webp';
import frame191 from '../../assets/animationFrames/book_cover_webp/0191.webp';
import frame192 from '../../assets/animationFrames/book_cover_webp/0192.webp';
import frame193 from '../../assets/animationFrames/book_cover_webp/0193.webp';
import frame194 from '../../assets/animationFrames/book_cover_webp/0194.webp';
import frame195 from '../../assets/animationFrames/book_cover_webp/0195.webp';
import frame196 from '../../assets/animationFrames/book_cover_webp/0196.webp';
import frame197 from '../../assets/animationFrames/book_cover_webp/0197.webp';
import frame198 from '../../assets/animationFrames/book_cover_webp/0198.webp';
import frame199 from '../../assets/animationFrames/book_cover_webp/0199.webp';
import frame200 from '../../assets/animationFrames/book_cover_webp/0200.webp';
// import frame201 from './images/cover-pronites animation.webm';


const frameArr = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, frame11, frame12, frame13, frame14, frame15, frame16, frame17, frame18, frame19, frame20, frame21, frame22, frame23, frame24, frame25, frame26, frame27, frame28, frame29, frame30, frame31, frame32, frame33, frame34, frame35, frame36, frame37, frame38, frame39, frame40, frame41, frame42, frame43, frame44, frame45, frame46, frame47, frame48, frame49, frame50, frame51, frame52, frame53, frame54, frame55, frame56, frame57, frame58, frame59, frame60, frame61, frame62, frame63, frame64, frame65, frame66, frame67, frame68, frame69, frame70, frame71, frame72, frame73, frame74, frame75, frame76, frame77, frame78, frame79, frame80, frame81, frame82, frame83, frame84, frame85, frame86, frame87, frame88, frame89, frame90, frame91, frame92, frame93, frame94, frame95, frame96, frame97, frame98, frame99, frame100, frame101, frame102, frame103, frame104, frame105, frame106, frame107, frame108, frame109, frame110, frame111, frame112, frame113, frame114, frame115, frame116, frame117, frame118, frame119, frame120, frame121, frame122, frame123, frame124, frame125, frame126, frame127, frame128, frame129, frame130, frame131, frame132, frame133, frame134, frame135, frame136, frame137, frame138, frame139, frame140, frame141, frame142, frame143, frame144, frame145, frame146, frame147, frame148, frame149, frame150, frame151, frame152, frame153, frame154, frame155, frame156, frame157, frame158, frame159, frame160, frame161, frame162, frame163, frame164, frame165, frame166, frame167, frame168, frame169, frame170, frame171, frame172, frame173, frame174, frame175, frame176, frame177, frame178, frame179, frame180, frame181, frame182, frame183, frame184, frame185, frame186, frame187, frame188, frame189, frame190, frame191, frame192, frame193, frame194, frame195, frame196, frame197, frame198, frame199, frame200];


gsap.registerPlugin(ScrollTrigger);
function Book() {
    console.clear();
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");

        canvas.width = 1600;
        canvas.height = 1170;

        const frameCount = 199;
        const currentFrame = index => (
            frameArr[index]
        );

        const images = []
        const book_cover = {
            frame: 0
        };

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }
        // const video = document.createElement('video');
        // video.src=currentFrame(200);
        // video.controls=true;
        // images.push(video)
        // console.log(images);

        const animation = gsap.to(book_cover, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger:'.book-container',
                start:'100px 60%',
                end:'60% 80%',
                scrub: 1,
            },
            onUpdate: render ,// use animation onUpdate instead of scrollTrigger's onUpdate
            // onComplete:(e)=>{
            //     // document.getElementById('canvas_section').setAttribute('display','none');
            //     // const video = document.createElement('video');
            //     // video.src=bookcovervideo;
            //     // video.controls=true;
            //     // document.getElementById('animation__Container').appendChild(video);
            //     // video.play();
            //     // context.drawImage(video,0,0);
            //     console.log('completed')
            // },
        });
        images[0].onload = render;

        function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[book_cover.frame], 0, 0);
        }
    });
    return ( 
            <div id='animation__Container' className='animation__Container' >
                <section id='canvas_section' className='book-container'>
                    <canvas id="canvas" />
                </section>
            </div>
    )
}

export default Book;
