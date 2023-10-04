import React from 'react';

export default function DrawClass(props) {
  const heightAttributes = props.data.attributes.length * 20 //20 es el tamaño aprox de pixeles de alto de la tipografía
  const heightMethods = props.data.methods.length * 20
  const heightTitle = 24 
  const svgHeight = heightTitle + heightAttributes + heightMethods + 60 //64 es la suma de todos los margins 
  const marginElement = 20 //margin para la separación entre los elementos del componente

  return (
    <svg width="200" height={svgHeight} xmlns="http://www.w3.org/2000/svg">
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
        x={((200 - (props.data.name.length*10))/2)} 
        y="18" 
        fill={props.data.textColor}>
        {props.data.name}
      </text>

      {/* Lista de atributos */}
  
      {props.data.attributes.map((item, index) => {
        return (
          <text 
            key={index} 
            x="20" 
            y={heightTitle+marginElement + 20*index}
            fill={props.data.textColor}>
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
            y={(heightAttributes+marginElement + heightTitle+marginElement + marginElement)+ 20*index}
            fill={props.data.textColor}
          >
            {item}
          </text>
        );
      })}
    </svg>
  );
}
