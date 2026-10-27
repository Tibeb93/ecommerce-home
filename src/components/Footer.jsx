function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>🛍 GebreMarket</h5>
            <p className="text-secondary">Your favorite online store.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p className="mb-1 text-secondary">Bahir Dar, Ethiopia</p>
            <p className="mb-1 text-secondary">gebremarket@gmail.com</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Newsletter</h5>
            <div className="input-group">
              <input
                className="form-control"
                type="email"
                placeholder="Your email"
              />
              <button className="btn btn-warning">Submit</button>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center text-secondary mb-0">
          © 2026 GebreMarket. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
