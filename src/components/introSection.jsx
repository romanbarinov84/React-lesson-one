import React from "react";
{/*export default function IntroSection(){
    return(
        <section>
            <h1 style={{color:"red"}}>
             RANDOM TEXT
            </h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veniam placeat, eum iusto natus dignissimos, modi dolore magnam culpa voluptate numquam accusamus reprehenderit, autem porro. Veritatis dolorem pariatur soluta officiis!
              
            </h3>
        </section>
    )
}*/}

export default function IntroSection(){
    return React.createElement(
        "section",
        null,
       [React.createElement("h1",{style:{color:"red"},key:1 }, "Random Color"),
        React.createElement("h3",{style:{color:"green"} ,key:2},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veniam placeat, eum iusto natus dignissimos, modi dolore magnam culpa voluptate numquam accusamus reprehenderit, autem porro. Veritatis dolorem pariatur soluta officiis!")
       ]
    )
}