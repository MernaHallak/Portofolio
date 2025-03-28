import React, { useContext } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
// const {id}=useParams()
const Project = ({ image, title,id, previewDesc,demo  }) => {
  // const {img}=useContext(Image)

  return (
    <Link to={`/project/${id}`}>
      <img src={image} alt="" className="w-full mb-3" />

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-md">{previewDesc && previewDesc}</p>
        </div>
       
          <a  onClick={(e) => e.stopPropagation()} className="relative z-10" href={demo&&demo} target="_blank"><BsArrowUpRightCircle size={20} color="#7DE0EA" /></a>
      
      </div>
      </Link>
  );
};

export default Project;
