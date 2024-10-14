export default function ImagemDeComposicao({imageSrc, text}){
    const imagStyle = {
        backgroundImage: `url(${imageSrc})`,
    };

    return(
        <div className="imagemHolder" style={imagStyle} >  
        <p>{text}</p>
      </div>
    );
}