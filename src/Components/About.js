import {Component} from 'react';


class About extends Component{
    render(){
        return (
          
          <div className="text-center mb-4" >
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABOUT US</h1>
        
            <div data-testid="about-content">
                <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://i.pinimg.com/564x/91/b7/fc/91b7fcfeeae99d15b2b665c552d722f9.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h3>
        <p className="lead">ABC Automobiles has carved out a niche as the undisputed leader in the car wrap industry, specializing exclusively in all kinds of black car wraps. Founded on the principle of elegance and sophistication, ABC Automobiles offers a wide array of customization options, ranging from matte black finishes to glossy obsidian hues.

The company's success stems from its unwavering commitment to quality and innovation. ABC Automobiles boasts state-of-the-art facilities dedicated to the art of car wrapping, employing skilled craftsmen who meticulously transform vehicles into sleek, black-clad marvels. Each wrap is tailored to perfection, ensuring a flawless fit and finish that enhances both the aesthetics and durability of the vehicle.

</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact US</button>
        </div>
      </div>
    </div>
  </div>
</div>







  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://i.pinimg.com/564x/64/f9/a4/64f9a4baa293b2ea02120983902c20fe.jpg" className="card-img-top" height={430} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">LAMBORGHINI</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://i.pinimg.com/564x/30/41/cb/3041cb27927560a094dac6d3d8c9026a.jpg" className="card-img-top" height={430} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">PORSCHE</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://i.pinimg.com/564x/e1/cc/fd/e1ccfd7183183576b0c640154502776c.jpg" className="card-img-top" height={430} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">MASERATI</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default About;