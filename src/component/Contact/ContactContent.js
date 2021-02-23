import React, { Component } from 'react';

class ContactContent extends Component {

    render() {
        return (
            <div className="contact">
                <div className="container">
                    <h3 className="w3ls-title w3ls-title1">Về chúng tôi</h3>
                    <div className="map-info">
                        <div className="col-md-6 map-grids">
                            <h4>Smart Store 1</h4>
                            <iframe title="Smart Store " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785448771!2d105.80194413492788!3d21.02273601629448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1599747840665!5m2!1svi!2s"></iframe>
                        </div>
                        <div className="col-md-6 map-grids">
                            <h4>Smart Store 2</h4>
                            <iframe title="Smart Store 2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.4604550706!2d106.415031120071!3d10.754666396423705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1599747979889!5m2!1svi!2s"></iframe>
                        </div>
                        <div className="col-md-6 map-grids">
                            <h4>Smart Store 3</h4>
                            <iframe title="Smart Store 3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.64667009188!2d108.17168645260251!3d16.04716590690333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1599748083520!5m2!1svi!2s"></iframe>
                        </div>
                        <div className="col-md-6 map-grids">
                            <h4>Smart Store 4</h4>
                            <iframe title="Smart Store 4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124762.71128107775!2d109.17646139834119!3d12.259461267015215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170677811cc886f%3A0x5c4bbc0aa81edcb9!2zVHAuIE5oYSBUcmFuZywgS2jDoW5oIEjDsmEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1599748147368!5m2!1svi!2s"></iframe>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="contact-form-row">
                        <h3 className="w3ls-title w3ls-title1">Gửi cho chúng tôi một dòng</h3>
                        <div className="col-md-7 contact-left">
                            <form action="#" method="post">
                                <input type="text" name="Name" placeholder="Name" required="" />
                                <input className="email" type="text" name="Email" placeholder="Email" required="" />
                                <textarea placeholder="Message" name="Message" required=""></textarea>
                                <input type="submit" value="SUBMIT" />
                            </form>
                        </div>
                        <div className="col-md-4 contact-right">
                            <div className="cnt-w3agile-row">
                                <div className="col-md-3 contact-w3icon">
                                    <i className="fa fa-truck" aria-hidden="true"></i>
                                </div>
                                <div className="col-md-9 contact-w3text">
                                    <p> Quản lý đơn đặt hàng của bạn <br /> Dễ dàng theo dõi đơn đặt hàng - trả hàng </p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="cnt-w3agile-row cnt-w3agile-row-mdl">
                                <div className="col-md-3 contact-w3icon">
                                    <i className="fa fa-bell" aria-hidden="true"></i>
                                </div>
                                <div className="col-md-9 contact-w3text">
                                    <p> Thông báo <br /> Nhận thông báo liên quan - Đề xuất </p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="cnt-w3agile-row">
                                <div className="col-md-3 contact-w3icon">
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                </div>
                                <div className="col-md-9 contact-w3text">
                                    <p> Yêu cầu <br /> Với Danh sách yêu thích, Bài đánh giá, Xếp hạng </p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactContent;
