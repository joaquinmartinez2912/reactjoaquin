export default function Figura(width=300, height=200, texto="itec"){
 let cxCirculo = Math.floor(width/2)
 let cyCirculo = 100
 let radioCirculo = cxCirculo / 2
 let sizeText = 50
 let sizeGeneral = texto.length * sizeText

 return(
    
    <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg">
        <rect width={width} height={height} fill="black" />
        <circle cx={cxCirculo} cy={cyCirculo} r={radioCirculo} fill="blue" />    
        <polygon points="150,40 200,120 100,120" fill="green"/>
        <text x={sizeGeneral}
              y="100" 
              textAnchor="middle" 
              font-size={sizeText}
              fill="#FFF">
        {texto}
        </text>
    </svg>
 )
 }




