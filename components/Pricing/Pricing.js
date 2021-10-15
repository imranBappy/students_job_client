import Image from "next/image";
import mlmPkg from "../../public/mlm-pkg.jpg";
import styles from '../../styles/Home.module.css'
const Pricing = () => {
  return (
    <div id="pricing">
      <div className="card-group">
        <div className="card mx-5">
          <Image src={mlmPkg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Basic</h4>
            <p className="card-text">
              <small className="text-muted">For free income</small>
            </p>
            <h3 >Free</h3>
            
            <ul>
              <li>Every day earn limit 15 taka</li>
              <li>Reference 5 taka</li>
              <li>User reference unlimited</li>
            </ul>

            
            
            <div className="d-grid">
              <button className="btn btn-primary" type="button">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        
        <div className="card mx-5">
          <Image src={mlmPkg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Standard</h4>
            <p className="card-text">
              <small className="text-muted">For medium income</small>
            </p>
            <h3><span className={styles.taka}>৳</span> 1100</h3>
            
            <ul>
              <li>Every day earn limit 45 taka</li>
              <li>Reference 100 taka</li>
              <li>User reference unlimited</li>
            </ul>

            
            <div className="d-grid">
              <button className="btn btn-primary" type="button">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="card mx-5">
          <Image src={mlmPkg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Premium</h4>
            <p className="card-text">
              <small className="text-muted">For free income</small>
            </p>
            <h3 ><span className={styles.taka}>৳</span> 2200  </h3>
            
            <ul>
              <li>Every day earn limit 90 taka</li>
              <li>Reference 170 taka</li>
              <li>User reference unlimited</li>
            </ul>

            <div className="d-grid">
              <button className="btn btn-primary" type="button">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
