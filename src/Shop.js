import { useState } from "react";
import { data } from "./data";
import Clothes from "./Clothes"


function Home(){


const [clothes] = useState(data);


return(<div className="cont">
    <Clothes shopClothes={clothes}/>
    </div>
)
}

export default Home;