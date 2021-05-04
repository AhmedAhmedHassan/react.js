import './form.css';

const Form=()=>{
    return(
          <div>
              <div class="container">
  <form action="" >
  <div class="row">
    <div class="col-25">
      <label for="fname"> Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    </div>
  </div>
  
  <div class="row">
    <div class="col-25">
      <label for="country">Country</label>
    </div>
    <div class="col-75">
      <input type="number"  name="age"  />
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Subject</label>
    </div>
    <div class="col-75">
    <input type="date"  name="date"  />
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Submit" />
  </div >
  </form >
</div>
 </div>
    );
}
export default Form