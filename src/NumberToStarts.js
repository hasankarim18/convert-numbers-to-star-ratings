import React from 'react'

const NumberToStarts = () => {

    let comments = [
        {comment:'comment--1', rating:3.4},
        {comment:'comment--2', rating:4.1},
        {comment:'comment--3', rating:5.3},
        {comment:'comment--4', rating:4},
        {comment:'comment--5', rating:1},
        {comment:'comment--6', rating:5},
        {comment:'comment--7', rating:3},

    ]

    const showComment = comments.map(item => {
            let output = [];

            function getStars(rating) {
              // Round to nearest half
              rating = Math.round(rating * 2) / 2;

              // Append all the filled whole stars
              for (var i = rating; i >= 1; i--)
                output.push(
                  `<i class="fa-solid fa-star" style="color:gold;" ></i>`
                );

              // If there is a half a star, append it
              if (i === 0.5)
                output.push(
                  '<i class="fa-regular fa-star-half" style="color:gold;" ></i>'
                );

              // Fill the empty stars
              for (let i = 5 - rating; i >= 1; i--)
                output.push(
                  '<i class="fa-regular fa-star" style="color:gold;" ></i>'
                );

              // return output.join("");
              return output.join("");
            }

                let numStars = getStars(item.rating);

        return (
          <div className="pt-2">
            <h3>{item.comment}</h3>
            <div className="ms-4">
                Start got comments {item.rating} --
                <span className="ms-2">:</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: numStars,
                }}
              />
            </div>
          </div>
        );

    })

 //let numStars = getStars(2);    

return showComment
 

}

export default NumberToStarts