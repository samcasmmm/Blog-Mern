import React from 'react';

const SinglePost = () => {
  //   const [addComp, setAddComp] = useState([
  //     {
  //       img: '',
  //     },
  //   ]);
  //   const handleAdd = () => {
  //     console.log(
  //       addComp.length === 0 ? 'workings' + addComp.length : 'No' + addComp.length
  //     );

  //     setAddComp([...addComp,{}])
  //   };
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          {/* {addComp.map((singleS, index) => ( */}
          <center>
            <img
              // key={index}
              className="singlePostImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </center>
          {/* ))} */}
          <h1 className="singlePostTitle">
            Lorem ipsum dolor
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                {/* <span className="link" onClick={handleAdd}>  Safak
                </span>*/}
                <span className="link">Safak</span>
              </b>
            </span>
            <span>1 day ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
            eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
            adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
            doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
            eum beatae, adipisci voluptas a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
