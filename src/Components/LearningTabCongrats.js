import React from "react";
import Lottie from 'react-lottie';
import highFive from '../lotties/85848-high-five.json';
import congrats from '../lotties/42183-congratulation-success-batch.json';




function LearningTabCongrats() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: highFive,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const defaultCongrats = {
        loop: false,
        autoplay: true,
        animationData: congrats ,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h1>Congratulations!</h1>
                <Lottie 
                    options={defaultCongrats}
                    height={300}
                    width={300}
                />
                <h2>You completed the pharases section!</h2>
                <p> alllllll  thheeeee txxxxtttt in the world <br></br>sdfajsldfjalsdfjalsdjf
                    asldkjfhaskdljfhaskjf
                    alksdjfhalksdfhfalksdjfhkhhk
                </p>
                <button> Feedback </button> <button> Feedback </button>
            </div>

            
    
        </div>
    );
}

export default LearningTabCongrats