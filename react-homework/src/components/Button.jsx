function Button ({background, content, hoverBackground}){
  let style = {
    width:"340px",
    height:"50px",
    display: "block",
    margin: "10px auto",
    color: "white",
    borderRadius: "10px",
    fontSize: "20px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s",
    background: background,
}

const handleMouseEnter = e => {
  e.target.style.background = hoverBackground
}

const handleMouseLeave = e => {
  e.target.style.background = background
}

  return (
    <>
      <button
      style= {style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {content}
      </button>
    </>
  )
}

export default Button;