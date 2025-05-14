const Card = ({bgColor,img,heading,description}) => {
  return (
      <section className="">
          <img src={img} alt="" />
          <h2>{heading}</h2>
          <p>{description}</p>
    </section>
  )
}

export default Card