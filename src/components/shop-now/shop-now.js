import React from 'react';
import './shop-now.css';
import '../../helper/helper.css';

import saree from '../../images/saree photoshoot/9e44a6b37ffe74858bffe74aba82910b.jpg';

const ShopNow = () => {
    return (
        <div className="page-layout">
            <h1 className="collection-title"> Designer Wear </h1>
            <div className="collections-group">
                <div className="collection">
                    <img src={saree} className="image" />
                    <i className="fa fa-heart fa-2x heart-icon"></i>
                    <div className="image-footer">
                        <i class="fa fa-inr fa-2x rate" aria-hidden="true"> 3500</i>
                        <i className="fa fa-shopping-cart fa-2x cart-icon"></i>
                    </div>
                </div>
                <div className="collection">
                    <i className="fa fa-heart fa-2x heart-icon"></i>
                    <div className="image">  </div>
                    <div className="image-footer">
                        <i class="fa fa-inr fa-2x rate" aria-hidden="true"> 3500</i>
                        <i className="fa fa-shopping-cart fa-2x cart-icon"></i>
                    </div>
                </div>
                <div className="collection">
                    <i className="fa fa-heart fa-2x heart-icon"></i>
                    <div className="image">  </div>
                    <div className="image-footer">
                        <i class="fa fa-inr fa-2x rate" aria-hidden="true"> 3500</i>
                        <i className="fa fa-shopping-cart fa-2x cart-icon"></i>
                    </div>
                </div>
                <div className="collection">
                    <i className="fa fa-heart fa-2x heart-icon"></i>
                    <div className="image">  </div>
                    <div className="image-footer">  
                    </div>
                </div>
                <div className="collection">
                    <i className="fa fa-heart fa-2x heart-icon"></i>
                    <div className="image">  </div>
                    <div className="image-footer">  </div>
                </div>
            </div>
        </div>
    )
}
export default ShopNow;