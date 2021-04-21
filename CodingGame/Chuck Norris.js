
let getSections = (binary)=>{
    
    var previousElement = binary[0];
    // 1000011
    // 1 0000 11
    var result = [];
    result.push(previousElement);
    for(var i=1; i < binary.length; i++){
        var nextElement = binary[i];
       if(previousElement == nextElement){
           result.push(nextElement);
       }else{
           result.push(" ");
           result.push(nextElement);
       }
       previousElement = nextElement;              
    }
    return result.join``;
};

const MESSAGE = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
var finalResult = "";

var conversion =(input)=> input == "1" ? "0" : "00"

var ASCIS = MESSAGE.split``.map((char)=>
    char.charCodeAt()
);

var EncodedBinary = ASCIS.map((asci)=>
    {
      var asciR = asci.toString(2);
       if( asciR.length < 7) {
           asciR = "0" +asciR;
       }
       return asciR;
    }

).join``;

var sections = getSections(EncodedBinary);

var t = sections.split` `.map((c)=>conversion(c[0]) + " " + "0"
       .repeat(c.length) +" ")
       .join``
       .slice(0,-1);


console.log(t);
