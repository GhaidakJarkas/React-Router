import { useLoaderData } from "react-router-dom"

export default function CareerDetails() {

  const career = useLoaderData();
  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corporis ipsa perferendis vitae esse repellendus? Alias libero natus modi laboriosam quod labore corporis distinctio ipsa. Blanditiis culpa ratione nemo praesentium!</p>
        </div>
    </div>
  )
}

export const careerDetailsLoader = async ({params}) => {
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/' + id)

    if(!res.ok){
      throw Error("Could not fetch that career");
    }
    return res.json();
} 
