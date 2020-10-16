import React from 'react';
import { useForm } from "react-hook-form";

const HomeFooter = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
           <div className="row" style={{backgroundColor:'#FBD062',width:'100%'}}>
               <div className="col-md-5 m-3">
                   <h1 >
                  <strong> Let us handle your  <br/>project, professionally.</strong>
                   </h1>
                   <p>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero unde natus necessitatibus dignissimos. Recusandae doloribus non vitae nobis dolorum corporis?
                   </p>
               </div>
               <div className="col-md-5">
                    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}><br/>
    {/* register your input into the hook by invoking the "register" function */}
      <input className="m-4" style={{height:'70px',width:'100% '}} name="email" placeholder="Your Email Address" ref={register} />
      <br/>
      {/* include validation with required or other standard HTML validation rules */}
      <input className="m-4" style={{height:'70px',width:'100% '}} name="yourName" placeholder="Your Name/Company Name" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>} <br/>
      <input className="m-4 text-top" style={{height:'270px',width:'100%'}} name="Comment" placeholder="give your valuable feedback" ref={register({ required: true })} />
      <input className="m-4 btn-main" type="submit" />
    </form>
               </div>
           </div>
        </div>
    );
};

export default HomeFooter;