import React, { useEffect, useState } from "react";
import FaceRecognition from "../../assets/images/face-recognition.png";
import Voice from "../../assets/images/voice.png";
import App from "../../assets/images/mobile-app.png";
import Select from "react-select";
import "./Login.css";
import cryptoJs from "crypto-js";
import { LoginService } from "./LoginServices";
import { v4 as uuidv4 } from "uuid";
import { Socket, io } from "socket.io-client";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ulid } from "ulid";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "react-bootstrap";
import { TempSpecialLoginService } from "./TempSpecialLoginService";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

function SpecialLogin() {
  let websocket_Service;
  let message = new Subject();
  let secret = "8dfb66a9-d84b-40e9-a6b9-bac2a8f9765c";
  let agentName = "1234";
  let externalRef = "+919890945819";
  const [token, setToken] = useState();
  const [uuid, setUuid] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [splitUniqueMobileNumber, setSplitUniqueMobileNumber] = useState("");
  const [mongoDbRequest, setMongoDbRequest] = useState("");
  const [bootstrapSession, setBootstrapSession] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [lookupData, setLookUpCustomerData] = useState("");
  const [deviceObject, setDeviceObj] = useState({});
  const [authenticationExecution, setAuthenticationExecution] = useState([]);
  const [socketData, setSocketData] = useState({});
  const [facialData, setFacialData] = useState([]);
  const [authenticationChoice, setAuthenticationChoice] = useState("");
  const [qrcode, setQrCode] = useState("");
  const [mongoDbResponse, setMongoDbResponse] = useState(false);
  const [buttonEnable, setButtonEnabled] = useState(false);
  const [authenticationFailure, setAuthenticationFailure] = useState(false);
  const [arr, setArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState({});
  const [authenticationFacialCounter, setAuthenticationCounter] = useState(0);

  let navigate = useNavigate();
  let exampleSocket;
  let exampleSocket1;

  const handleClose = () => {
    console.log("close-event", exampleSocket);

    setModal(false);
    setButtonEnabled(false);
  };
  let uuid1 = "";
  let jwttoken = "";
  useEffect(() => {
    // signToken();
    // getMongodbResponse(externalRef);
  }, []);

  //select option data object
  const data = [
    {
      value: "Facial",
      text: "Facial",
      icon: <img src={FaceRecognition} height="28px" />,
    },
    {
      value: "App",
      text: "App",
      icon: <img src={Voice} height="28px" />,
    },
  ];
  //custom styles for select
  const customStyles = {
    control: (base) => ({
      ...base,
      border: "1px solid #ccc",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #ccc",
        boxShadow: "0px 0px 6px #ccc",
      },
      height: "42px",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      padding: "0 6px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
  };

  //creating token
  function signToken(agentName) {
    // let uniqueId = Math.floor(100000 + Math.random() * 900000);
    const expiresIn = 24; // hours

    let claims = {
      sub: agentName,
      ifr: "c9a0c715-fac8-4c2f-992e-8e6ecf380244",
      exp: +new Date() + 3_600 * expiresIn,
    };

    let token = encodeToken(claims);
    let signature = cryptoJs.HmacSHA256(token, secret);
    signature = base64url(signature);

    let signedToken = token + "." + signature;
    // console.log("signToken", signedToken);
    localStorage.setItem("token", signedToken);
    setUuid(ulid());
    uuid1 = ulid();
  }
  console.log("ulid", uuid1);
  console.log("uuid", uuid);
  function encodeToken(payload) {
    let header = {
      alg: "HS256",
      typ: "JWT",
    };

    let stringifiedHeader = cryptoJs.enc.Utf8.parse(JSON.stringify(header));
    let encodedHeader = base64url(stringifiedHeader);

    let stringifiedData = cryptoJs.enc.Utf8.parse(JSON.stringify(payload));
    let encodedData = base64url(stringifiedData);

    return encodedHeader + "." + encodedData;
  }
  function base64url(source) {
    let encodedSource = cryptoJs.enc.Base64.stringify(source);

    encodedSource = encodedSource.replace(/=+$/, "");

    encodedSource = encodedSource.replace(/\+/g, "-");
    encodedSource = encodedSource.replace(/\//g, "_");

    return encodedSource;
  }
  async function getMongodbResponse(externalRef) {
    const body = JSON.stringify({
      dataSource: "mongodb-atlas",
      database: "avayaocf-qnamaker",
      collection: "JourneyID-Chats",
      filter: {
        _id: externalRef,
      },
    });

    let startStr = externalRef?.includes("+");
    // send request payload to mongodb url
    if (startStr) {
      let responseData = await LoginService.postMongoDbRequest(body);
      setMongoDbRequest(responseData?.data);
      console.log("mongodb", responseData);
      let sessionvalue = uuid1 + "_" + mobilenumber.split("+")[1];
      console.log(sessionvalue);
      let splitnumber = mobilenumber.split("+")[1];
      setSplitUniqueMobileNumber(splitnumber);
      setSessionId(sessionvalue);
      createBootstrapSession(splitnumber);
    }
  }
  console.log(mongoDbRequest);

  async function createBootstrapSession(splitnumber) {
    let jwttoken = localStorage.getItem("token");
    let bootstrapPayload = {
      event: "start-session",
      session: {
        externalRef: splitnumber,
      },
      user: {
        phoneNumber: mobilenumber,
        uniqueId: mobilenumber.split("+")[1],
      },
    };

    let response = await LoginService.createBootstrapSession(
      bootstrapPayload,
      jwttoken
    );
    setBootstrapSession(response?.data);
    getLookupDataFromAPI(mobilenumber.split("+")[1]);
  }
  console.log(bootstrapSession);
  async function getLookupDataFromAPI(number) {
    let response = await LoginService.getLookupCustomerData(number);
    setLookUpCustomerData(response?.data);
    let deviceObj = response?.data.devices[0];
    setDeviceObj(deviceObj);
  }

  //--push notification code
  // async function sdkAuthentication() {
  //   let pipelineKey = "6871934e-a546-4d9b-910b-2b566df42376";
  //   let reqPayload = createSDKPayload(pipelineKey);
  //   let jwtToken = localStorage.getItem("token");
  //   setTimeout(async () => {
  //     await LoginService.sendAuthenticationExecutionRequest(
  //       reqPayload,
  //       jwtToken
  //     ).then((data) => {
  //       setAuthenticationExecution(data.data);
  //       let url = `wss://app.journeyid.io/api/iframe/ws/users/${data.data.user.id}/sessions/${data.data.session.id}`;
  //       const exampleSocket = new WebSocket(url);
  //       exampleSocket.onopen = (e) => {
  //         exampleSocket.send(`CONNECT ${jwtToken}`);
  //       };
  //       exampleSocket.onmessage = (e) => {
  //         let SocketEvent = JSON.parse(e.data);
  //         if (SocketEvent?.event === "session-authenticated") {
  //         }
  //         setSocketData(SocketEvent);
  //         message.next(SocketEvent);
  //       };

  //       //   next: (value) => {
  //       //     // console.log('comp events: ', value);

  //       //     // execution-completed

  //       //     setTimeout(() => {
  //       //       const exampleSocket = new WebSocket(url);
  //       //       exampleSocket.onopen = (e) => {
  //       //         console.log("onopen: ", e);

  //       //         exampleSocket.send(`CONNECT ${jwtToken}`);
  //       //       };
  //       //       exampleSocket.onmessage = (e) => {
  //       //         let SocketEvent = JSON.parse(e.data);
  //       //         console.warn("ws event: ", SocketEvent);
  //       //         message.next(SocketEvent);
  //       //       };
  //       //     }, 3000);

  //       // this.webSocketEvents = value;
  //       // this.statusOfRequest(
  //       //   this.webSocketEvents.event,
  //       //   this.webSocketEvents
  //       // );
  //       //   },
  //       // });
  //       // exampleSocket.onerror = (event) => {
  //       //  exampleSocket.error(event);
  //       // };
  //       // exampleSocket.onclose = (e) => {
  //       //   exampleSocket.next(e);
  //       // };
  //       // var socket = io(url);

  //       // // const socket = Socket.connect(url);
  //       // // socket.on(`CONNECT ${jwtToken}`, (arg) => {
  //       // //   console.log(arg); // world
  //       // // });

  //       // socket.on("connection", (socket) => {
  //       //   socket.send(`${jwtToken}`);
  //       //   console.log("hi");
  //       // });

  //       // console.log('Execution data: ', data);
  //       // this.authRequestedData = data;

  //       // this.websocket_Service.connectWebSocket(
  //       //   this.authRequestedData.user.id,
  //       //   this.authRequestedData.session.id,
  //       //   `CONNECT ${this.jwtToken}`
  //       // );

  //       // this.websocket_Service.message.subscribe({
  //       //   next: (value) => {
  //       //     // console.log('comp events: ', value);

  //       //     if (
  //       //       (value.type === "close" || value.code === 1006) &&
  //       //       this.webSocketEvents?.event !== "session-authenticated"
  //       //     ) {
  //       //       setTimeout(() => {
  //       //         this.websocket_Service.connectWebSocket(
  //       //           this.authRequestedData.user.id,
  //       //           this.authRequestedData.session.id,
  //       //           `CONNECT ${this.jwtToken}`
  //       //         );
  //       //       }, 3000);
  //       //     }

  //       //     this.webSocketEvents = value;

  //       //     this.statusOfRequest(
  //       //       this.webSocketEvents.event,
  //       //       this.webSocketEvents
  //       //     );
  //       //   },
  //       // });
  //     });
  //   }, 3000);
  // }
  // end of push notification code
  console.log("push-o", mongoDbRequest);
  function createSDKPayload(RequestPipelineKey, type) {
    console.log(type);
    let reqPayload = {
      pipelineKey: RequestPipelineKey,
      user: {
        id: bootstrapSession?.user?.id,
        uniqueId: bootstrapSession?.user?.uniqueId,
        email: bootstrapSession?.user?.email,
        phoneNumber: bootstrapSession?.user?.phoneNumber,
        firstName: bootstrapSession?.user?.firstName,
        middleName: bootstrapSession?.user?.middleName,
        lastName: bootstrapSession?.user?.lastName,
        devices: [],
        type: "customer",
      },
      session: {
        id: null,
        // id: "NS5LWDPJ2N86JF_919890945819",
        // externalRef:
        // mongoDbRequest?.documents[0]?.journeyid_session_externalref,
        externalRef: uuid + "_" + mobilenumber.split("+")[1],
        isAuthenticated: bootstrapSession?.session?.isAuthenticated,
      },
      // delivery: {
      //   // method: 'sms',
      //   method: "push-notification",
      //   deviceId: deviceObject?.id,
      // },
      delivery:
        type === "facial"
          ? {
              method: "url",
              // phoneNumber: mongoDbRequest.mobilephone,
            }
          : {
              // method: "sms",
              // phoneNumber: bootstrapSession?.user?.phoneNumber,
              method: "push-notification",
              deviceId: deviceObject?.id,
            },
      configuration: {},
      language: "en-US",
    };

    return reqPayload;
  }
  // useEffect(() => {
  //   window.myObj = sessionId;
  // }, [sessionId]);
  async function sdkAuthentication() {
    let pipelineKey = "6871934e-a546-4d9b-910b-2b566df42376";
    let reqPayload = createSDKPayload(pipelineKey, "push-notification");
    let jwtToken = localStorage.getItem("token");
    console.log(jwtToken);
    setTimeout(() => {
      LoginService.sendAuthenticationExecutionRequest(
        reqPayload,
        jwtToken
      ).then((data) => {
        setAuthenticationExecution(data.data);
        localStorage.setItem(
          "webChatSessionId",
          JSON.stringify(uuid + "_" + mobilenumber.split("+")[1])
        );
        localStorage.setItem("webChatAuthentication", JSON.stringify(true));
        localStorage.setItem(
          "uniqueId",
          JSON.stringify(mobilenumber.split("+")[1])
        );
        localStorage.setItem("location", JSON.stringify("loggedIn"));
        console.log(data?.data?.session);
        let url = `wss://app.journeyid.io/api/iframe/ws/users/${data.data.user.id}/sessions/${data?.data?.session?.id}`;
        exampleSocket1 = new WebSocket(url);

        exampleSocket1.onopen = (e) => {
          exampleSocket1.send(`CONNECT ${jwtToken}`);
        };
        exampleSocket1.onmessage = (e) => {
          console.log("onmessage facial", e.data);
          let SocketEvent = JSON.parse(e.data);

          if (SocketEvent?.event === "session-authenticated") {
            window
              .initWebchat(
                "https://endpoint-trial.cognigy.ai/2a7dbd4efa25354aa8b6abb0b637629ee8fcd3aab960523599c5da1e0204f5a5",
                {
                  settings: {
                    disableBranding: "true",
                    designTemplate: "2",
                    title: "Login",
                    startBehavior: "injection",
                    getStartedText: "",
                    getStartedData: {
                      session_extref:
                        data?.data?.session?.id +
                        "_" +
                        mobilenumber.split("+")[1],
                      authenticated: "yes",
                      customer_uniqueId: mobilenumber.split("+")[1],
                      location: "loggedIn",
                    },
                  },
                }
              )
              .then((webchat) => {
                console.log("response of webchat", webchat);
              });
            secureLocalStorage.setItem(
              "user",
              JSON.stringify(bootstrapSession?.user)
            );
            localStorage.setItem(
              "users",
              JSON.stringify(bootstrapSession?.user)
            );
            navigate("/Home3");
          }
          setSocketData(SocketEvent);
          message.next(SocketEvent);
        };

        exampleSocket1.onerror = (e) => {
          console.log(e);
        };
      });
    }, 3000);
  }

  async function sendFacialAuthRequest() {
    let requestNotificationName = "Face authentication Request";

    // let pipelineKey = 'd73d7733-5450-46a3-a1c7-42bf06e09ea0';
    let pipelineKey = "dc2db844-c4a9-45fe-9316-44edd90b68dd";

    let reqPayload = createSDKPayload(pipelineKey, "facial");
    let jwtToken = localStorage.getItem("token");

    setModal(true);
    // setQrCode(response?.data?.url);

    try {
      setTimeout(() => {
        LoginService.sendAuthenticationExecutionRequest(
          reqPayload,
          jwtToken
        ).then((data) => {
          setAuthenticationExecution(data.data);
          setModal(true);
          setQrCode(data?.data?.url);
          localStorage.setItem(
            "webChatSessionId",
            JSON.stringify(uuid + "_" + mobilenumber.split("+")[1])
          );
          localStorage.setItem("webChatAuthentication", JSON.stringify(true));
          localStorage.setItem("welcomeMessage", JSON.stringify(true));
          localStorage.setItem(
            "uniqueId",
            JSON.stringify(mobilenumber.split("+")[1])
          );
          localStorage.setItem("location", JSON.stringify("loggedIn"));
          let url = `wss://app.journeyid.io/api/iframe/ws/users/${data.data.user.id}/sessions/${data?.data?.session?.id}`;
          exampleSocket = new WebSocket(url);
          exampleSocket.timeoutInterval = 30000;
          console.log("hello socket", exampleSocket.timeoutInterval);
          let temparr = [];
          exampleSocket.onopen = (e) => {
            exampleSocket.send(`CONNECT ${jwtToken}`);
            console.log("open", e);
            setTimeout(() => {
              exampleSocket.close();
              console.log("hi");
            }, 120000);
          };

          exampleSocket.onmessage = (e) => {
            console.log("onmessage");
            let SocketEvent = JSON.parse(e.data);
            temparr.push(SocketEvent);

            setArr(temparr.slice(-1));
            if (temparr.slice(-1)[0].event === "session-authenticated") {
              window
                .initWebchat(
                  "https://endpoint-trial.cognigy.ai/2a7dbd4efa25354aa8b6abb0b637629ee8fcd3aab960523599c5da1e0204f5a5",
                  {
                    settings: {
                      disableBranding: "true",
                      designTemplate: "2",
                      title: "Login",
                      startBehavior: "injection",
                      getStartedText: "",
                      getStartedData: {
                        session_extref:
                          data?.data?.session?.id +
                          "_" +
                          mobilenumber.split("+")[1],
                        authenticated: "yes",
                        customer_uniqueId: mobilenumber.split("+")[1],
                        location: "loggedIn",
                      },
                    },
                  }
                )
                .then((webchat) => {
                  console.log("response of webchat", webchat);
                });
              secureLocalStorage.setItem(
                "user",
                JSON.stringify(bootstrapSession?.user)
              );
              localStorage.setItem(
                "users",
                JSON.stringify(bootstrapSession?.user)
              );
              setTimeout(() => {
                navigate("/Home3");
              }, 5000);
            }

            // message.next(SocketEvent);
          };
          if (exampleSocket.timeoutInterval === 30000) {
            exampleSocket.onclose = (e) => {
              console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                  10000 / 1000
                )} second.`,
                e.reason
              );

              //call check function after timeout
            };
          }
        });
      }, 6000);
    } finally {
      if (exampleSocket && exampleSocket.readyState === WebSocket.OPEN) {
        exampleSocket.close(); // Close the WebSocket connection if it's open
      }
    }
  }
  function handleChange(event) {
    setValue(event.target.value);
    setAuthenticationChoice(event.target.value);
    setMongoDbResponse(true);
    setButtonEnabled(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setButtonEnabled(true);
    if (value === "App") {
      // sdkAuthentication();
      // setTimeout(() => {
      //   handleApp();
      // }, 5000);

      sdkAuthentication();
    } else {
      // sendFacialAuthRequest();
      setTimeout(() => {
        sendFacialAuthRequest();
      }, 3000);
    }
  }
  const handleClickOutside = (event) => {
    event.preventDefault();
    signToken();
    getMongodbResponse(mobilenumber);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Identifier
          </label>
          <input
            type="text"
            className="form-control shadow-none"
            id="mobilenumber"
            placeholder="Identifier"
            value={mobilenumber}
            onBlur={handleClickOutside}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Send Request
            </label>

            {/* <Select
              placeholder=" "
              // value={selectedOption}
              options={data}
              onChange={handleChange}
              styles={customStyles}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {e.icon} {e.text}
                </div>
              )}
            /> */}

            <div>
              <label className="layersMenu">
                <input
                  type="radio"
                  name="Facial"
                  value="Facial"
                  onChange={(e) => handleChange(e)}
                  checked={authenticationChoice === "Facial"}
                />
                <img
                  src={FaceRecognition}
                  className="pl-1"
                  height="28px"
                  alt=""
                />{" "}
                Facial
              </label>

              <label className="layersMenu ml-5">
                <input
                  type="radio"
                  name="App"
                  value="App"
                  onChange={handleChange}
                  checked={authenticationChoice === "App"}
                />
                <img
                  src={`https://lab.bravishma.com:6500/assets/images/mobile-app.png`}
                  className="pl-1"
                  height="28px"
                  alt=""
                />{" "}
                App
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="btn-blue btn-block">
            Submit
          </button>
        </div>
        {/* <img
          src={`https://e7.pngegg.com/pngimages/878/377/png-clipart-check-mark-computer-icons-others-miscellaneous-angle.png`}
          alt=""
          height="200px"
          width="200px"
        /> */}
      </form>

      {modal && qrcode ? (
        <div>
          <Modal show={modal} style={{ marginTop: "150px" }}>
            {/* <Modal.Header> */}
            <Modal.Title>
              <div className="d-flex justify-content-between px-3 pt-4 pb-1">
                <div>QR Code</div>
                <div
                  onClick={handleClose}
                  style={{ cursor: "pointer", float: "right" }}
                >
                  <AiOutlineClose />
                </div>
              </div>
              <hr />
            </Modal.Title>
            {/* </Modal.Header> */}
            <Modal.Body>
              <div>
                {arr[0]?.event === "session-authenticated" ? (
                  <>
                    <h5 className="text-center">Authentication Successful!</h5>
                    <h6 className="text-center">
                      You have been successfully authenticated
                    </h6>
                  </>
                ) : (
                  <>
                    <h5 className="text-center">
                      Please scan the below Qr Code{" "}
                    </h5>
                    <h6 className="text-center">
                      Please don't reload the page
                    </h6>
                  </>
                )}
              </div>
              <div className="text-center">
                {arr[0]?.event === "session-authenticated" ? (
                  <img
                    src={`https://e7.pngegg.com/pngimages/878/377/png-clipart-check-mark-computer-icons-others-miscellaneous-angle.png`}
                    alt=""
                    height="200px"
                    width="200px"
                  />
                ) : (
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&margin=50&data=${qrcode}`}
                    alt=""
                  />
                )}

                <h6>
                  {/* Waiting for you to complete the process on your Mobile... */}{" "}
                  {arr[0]?.event === "execution-created"
                    ? "Please check the notification link on you mobile app to complete the authentication"
                    : arr[0]?.event === "execution-started"
                    ? "Getting Ready for Face Authentication"
                    : arr[0]?.event === "execution-progress"
                    ? "Face Authentication is in progress,Please wait... "
                    : arr[0]?.event === "session-authenticated"
                    ? "You are successfully authenticated,Thank-You"
                    : ""}
                </h6>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SpecialLogin;
