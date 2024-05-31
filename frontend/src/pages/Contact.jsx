import contactCSS from "../assets/styles/Contact.module.css";

export const Contact = () => {
    return (
        <section className={contactCSS.contact}>
            <div className={contactCSS.container}>
                <div className="box">
                    <div className={contactCSS.title_container}>
                        <h2 className={contactCSS.title}>
                            Please contact us at MARW.
                        </h2>

                        <h2 className={contactCSS.title}>
                            We would love to hear from you.
                        </h2>
                    </div>

                    <ul>
                        <li>
                            <span>+46 723 77 (7777 THORN RING)</span>
                        </li>

                        <li>
                            <i className="fa fa-at" aria-hidden="true"></i>

                            <span>MARW@CryptoWiener.com</span>
                        </li>

                        <li>
                            <i
                                className="fa fa-location-pin"
                                aria-hidden="true"
                            ></i>

                            <span>
                                12 Tarnished Way, Limgrave, ER1 3NG, Lands
                                Between
                            </span>
                        </li>
                    </ul>
                </div>

                <div className={contactCSS.box}>
                    <div className={contactCSS.box_r}>
                        <div className={contactCSS.form_box}>
                            <div className={contactCSS.form_title}>
                                <h2>Get in touch</h2>
                            </div>

                            <form action="" method="post">
                                <div className={contactCSS.one_line}>
                                    <div className={contactCSS.box_input}>
                                        <i className="far fa-user"></i>

                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className={contactCSS.text}
                                            placeholder="Full Name"
                                        />
                                    </div>

                                    <div className={contactCSS.box_input}>
                                        <i className="fa fa-phone"></i>

                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className={contactCSS.text}
                                            placeholder="your phone #"
                                        />
                                    </div>
                                </div>

                                <div className={contactCSS.box_input}>
                                    <i className="fa fa-at"></i>

                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        className={contactCSS.text}
                                        placeholder="E-mail"
                                    />
                                </div>

                                <div className={contactCSS.box_input}>
                                    <label className={contactCSS.address}>
                                        <i className="fa fa-location-pin"></i>
                                    </label>

                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="5"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <button className={contactCSS.btn_send}>
                                    Contact us
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
