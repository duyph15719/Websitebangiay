import React from 'react'
import '../index.css';
type Props = {}

const Products = (props: Props) => {
    return (
        <div>
            <div>products</div>
            <div className="shop-page-title category-page-title page-title ">
                <div className="page-title-inner flex-row  medium-flex-wrap container">
                    <div className="flex-col flex-grow medium-text-center">
                        <div className="is-large">
                            <nav className="woocommerce-breadcrumb breadcrumbs"><a href="http://mauweb.monamedia.net/converse">Trang chủ</a> <span className="divider">/</span> Nữ</nav></div>
                        <div className="category-filtering category-filter-row show-for-medium">
                            <a href="#" data-open="#shop-sidebar" data-visible-after="true" data-pos="left" className="filter-button uppercase plain">
                                <i className="icon-menu" />
                                <strong>Lọc</strong>
                            </a>
                            <div className="inline-block">
                                <div className="widget woocommerce widget_layered_nav_filters"><ul><li className="chosen"><a rel="nofollow" aria-label="Xóa bộ lọc" href="http://mauweb.monamedia.net/converse/danh-muc/nu/?max_price=2800000" className="tooltipstered">Nhỏ nhất <span className="woocommerce-Price-amount amount">1,120,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></a></li><li className="chosen"><a rel="nofollow" aria-label="Xóa bộ lọc" href="http://mauweb.monamedia.net/converse/danh-muc/nu/?min_price=1120000" className="tooltipstered">Lớn nhất <span className="woocommerce-Price-amount amount">2,800,000&nbsp;<span className="woocommerce-Price-currencySymbol">₫</span></span></a></li></ul></div>	</div>
                        </div>
                    </div>{/* .flex-left */}
                    <div className="flex-col medium-text-center">
                        <p className="woocommerce-result-count hide-for-medium">
                            Hiển thị 1–12 trong 22 kết quả</p>
                        <form className="woocommerce-ordering" method="get">
                            <select name="orderby" className="orderby">
                                <option value="menu_order" >Thứ tự mặc định</option>
                                <option value="popularity">Thứ tự theo mức độ phổ biến</option>
                                <option value="rating">Thứ tự theo điểm đánh giá</option>
                                <option value="date">Mới nhất</option>
                                <option value="price">Thứ tự theo giá: thấp đến cao</option>
                                <option value="price-desc">Thứ tự theo giá: cao xuống thấp</option>
                            </select>
                            <input type="hidden" name="paged" defaultValue={1} />
                            <input type="hidden" name="min_price" defaultValue={1120000} /><input type="hidden" name="max_price" defaultValue={2800000} /></form>
                    </div>{/* .flex-right */}
                </div>{/* flex-row */}
            </div>
            {/* main product */}
          

        </div>



    )
}

export default Products