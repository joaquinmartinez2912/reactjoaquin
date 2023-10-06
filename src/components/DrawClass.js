import React from 'react';

export default function DrawClass(props) {
  const fontPx = 20 //20 es el tamaño aprox de pixeles que ocupa cada letra
  const marginElement = 20 //margin para la separación entre los elementos del componente
  const heightAttributes = props.data.attributes.length * fontPx 
  const heightMethods = props.data.methods.length * fontPx
  const heightTitle = 24 
  const svgHeight = heightTitle + heightAttributes + heightMethods + (marginElement*3) 
  
  return (
    <svg width='200' height={svgHeight} xmlns="http://www.w3.org/2000/svg">
      {/* Rectángulo principal */}
      <rect
        className="main"
        width="100%"
        height="100%"
        fill={'white'}
        stroke={props.data.borderColor}
        />

      {/* Título */}
      <rect
        className="titleRec"
        x="0"
        y="0"
        width="100%"
        height={heightTitle} 
        fill={props.data.headColor}
      />
      <text 
        x="100"
        y="18" 
        fill={props.data.textColor}
        textAnchor='middle'
        >
        {props.data.name}
      </text>

      {/* Lista de atributos */}
  
      {props.data.attributes.map((item, index) => {
        return (
          <text 
            key={index} 
            x="20" 
            y={heightTitle+marginElement + fontPx*index}
            fill={props.data.textColor}
            >
            {item}
          </text>
        );
      })}

      <line 
        x1={0}
        x2={200} 
        y1={(svgHeight - (heightMethods+marginElement*2))}
        y2={(svgHeight - (heightMethods+marginElement*2))} 
        stroke={props.data.borderColor}/>

      {/* Lista de métodos */}
      {props.data.methods.map((item, index) => {
        return (
          <text
            key={index}
            x="20"
            y={(heightAttributes+marginElement + heightTitle+marginElement + marginElement)+ fontPx*index}
            fill={props.data.textColor}
          >
            {item}
          </text>
        );
      })}
    </svg>
  );
}
