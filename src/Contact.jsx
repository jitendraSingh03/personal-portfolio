import React from 'react';


const Contact = () => {

    return (
        <>
            <div className="row">
                <div className="col-6 mx-auto my-3">
                    <div className="row">
                        <h1 style={{ textAlign:"center"}}><strong>Contact us</strong></h1>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="inputEmail4">Name</label>
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Name" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="inputPassword4">Email</label>
                                    <input type="email" class="form-control" id="inputPassword4" placeholder="Email" />
                                </div>
                            </div>                                                                                                  
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;