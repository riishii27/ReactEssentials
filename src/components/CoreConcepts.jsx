export default function CoreConcepts({image,description,title}){
    return (
      <li>
        <img src={image} alt={title} />
          <h3>{title}</h3>
            <p>{description} </p>
      </li>
    );
  }