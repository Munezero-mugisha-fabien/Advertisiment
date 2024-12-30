import React from "react";
import { ArrowLink } from "./ArrowLink";
import Prop from "./Prop";
import { SecondParty } from "./SecondParty";
import Second from "./Second";

 
const HomeBody = () =>{

const    HeadingStyle1 = {
        color:"black",
                 };


    return(

        <div className="HomeBody">
            <marquee>
            <p><h1> ONLINE ADVERTISMENT WEBSITE </h1>
            <h1>UKENEYE KWAMAMAZA WA DUHAMAGARA 0790723191</h1>
            </p></marquee>
            <div className="ContainBoard">
                <div className="FirstParty">
                <p><h1 style={ HeadingStyle1 }  className="ProductOwner">Product and owner <br/>of bussiness</h1></p>
                   <div className="ContainArrowLink">
          {Prop.map((item, index) => (
            <ArrowLink
              key={index}
              Names ={ item.Names }
              Location ={ item.Location }
              CompanyName  ={ item.CompanyName  }
              Tel ={item.Tel }
              />
          ))}

          
        </div>
                
                </div>
                <div>
                <p><h1 style={ HeadingStyle1 }  className="ProductOwner">Product and owner <br/>of bussiness</h1></p>
                {Second.map((item, index) => (
            <SecondParty
              key={index}
              Names ={item.Names }
              Location ={item.Location }
              CompanyName  ={item.CompanyName  }
              Tel ={item.Tel }
            />
          ))}
          

                </div>

               

                </div>
              
                <div className="Paragraphys">
                    <p>
                         Advertisement plays a pivotal role <br/>
                         in shaping consumer behavior and driving<br/>
                         brand awareness. Through various channels <br/>
                         like television, social media, and print,<br/>
                         companies create compelling <br/>
                         campaigns that grab attention and persuade <br/>
                         audiences to take action.<br/>
                    </p>

                    <p>

                    Advertisers carefully <br/>
                    craft their messages, using persuasive language, <br/>
                    appealing visuals, and emotional triggers <br/>
                     to make an impact.<br/>
                    </p>

                    <p>
                    The goal is often to increase sales, improve brand<br/>
                    recognition, and foster customer loyalty.<br/>
                    </p>

                    <p>
                In today's digital age, targeted advertisements <br/>
                and personalized <br/>
                marketing strategies have become essential, <br/>
                allowing businesses to <br/>
                reach their ideal <br/>
                audience more effectively than ever before. <br/>
                    </p>
               
               <p>

               The constant evolution of advertising techniques<br/>
               reflects the dynamic nature of the marketplace, where <br/>
               creativity and innovation are key to <br/>
               staying ahead of competitors.<br/>
               </p>
                <p>
               <br/>
                         Advertisment of product carried out online .<br/>
                          other information to help you in case of problems<br/>
                         Tel:0790723191.<br/>
                    </p>
               
                </div>
           
         
        </div>
    )
}
export default HomeBody;