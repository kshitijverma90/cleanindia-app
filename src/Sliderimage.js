import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import './Sliderimage.css'
 
const MyCollection = [
  {
  
    imgPath:
"https://wallsdesk.com/wp-content/uploads/2017/01/Tel-Aviv-Photos.jpg",
  },
  {
    
    imgPath:
"https://i.kinja-img.com/gawker-media/image/upload/s---Jp3oE95--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/199zpfi8dig2njpg.jpg",
  },
  {
   
    imgPath:
"https://iso.500px.com/wp-content/uploads/2014/08/500-px-banner-1500x1000.jpg",
  },
];

function Sliderimage() {
    const CollectionSize = MyCollection.length;
    const theme = useTheme();
    const [index, setActiveStep] = React.useState(0);
   
    const goToNextPicture = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

  return (
    <div className='mainsliderimage'>
         <div
      
    >
      
      <div
        style={{
          maxWidth: 400,
          flexGrow: 1,
        }}
      >
        
        <img className="imageofslides"
          src={MyCollection[index].imgPath}
          
          alt={MyCollection[index].label}
        />
        <MobileStepper
          variant="text"
          position="static"
          index={index}
          steps={CollectionSize}
          nextButton={
            <Button
              className="buttonofslides"
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1}
            >
              Next
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </div>
    </div>
  )
}

export default Sliderimage