import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function Display() {
  const [patient, setPatient] = useState([]);
  const [message, setmessage] = useState("");

  useEffect(() => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
        console.log(result);
        debugger;
        setPatient(result);
      }
    };
    helper.open("GET", "http://localhost:9999/patients");
    helper.send();
  }, []);
  useEffect(() => {
    if (message != "") {
      if (message == "Record Removed Successfully!") {
        //Refresh the set of employees
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
          if (helper.readyState == 4 && helper.status == 200) {
            var result = JSON.parse(helper.responseText);
            setPatient(result);
          }
        };
        helper.open("GET", "http://localhost:9999/patients");
        helper.send();
      }
      setTimeout(() => {
        setmessage("");
      }, 2000);
    }
  }, [message]);

  const removeRecord = (No) => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState == 4 && helper.status == 200) {
        var result = JSON.parse(helper.responseText);
        if (result.affectedRows != undefined) {
          if (result.affectedRows > 0) {
            // debugger;
            setmessage("Record Removed Successfully!");
          } else {
            setmessage("We could not remove the record.!");
          }
        } else {
          setmessage("Something went wrong! Try Again!");
        }
      }
    };
    helper.open("DELETE", "http://localhost:9999/patients/" + No);
    helper.send();
  };

  function filterData(searchInput, retraunts) {
    const filterData = retraunts.filter((retraunt) =>
      retraunt.info.name.includes(searchInput)
    );
    return filterData;
  }

  const retrauntList = [
    {
      info: {
        id: "147547",
        name: "James",
        cloudinaryImageId:
          "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        locality: "Kothari Blocks",
        areaName: "Bibwewadi",
        costForTwo: "₹300 for two",
        cuisines: ["James Thomas, Welsh navigator, explorer, and author"],
        avgRating: 4.5,
        veg: true,
        feeDetails: {
          restaurantId: "147547",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5200,
        },
        parentId: "227837",
        avgRatingString: "4.5",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 5.5,
          serviceability: "SERVICEABLE",
          slaString: "33 mins",
          lastMileTravelString: "5.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-21 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "5107",
        name: "Amelia Brown ",
        cloudinaryImageId:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        locality: "Bund Garden Road",
        areaName: "Camp Area",
        costForTwo: "₹700 for two",
        cuisines: [
          "Amelia Brown is Senior Lecturer in Greek History & Language in the Classics & Ancient History discipline",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "5107",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4500,
        },
        parentId: "145",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-21 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "13907",
        name: "Joe Smith",
        cloudinaryImageId:
          "https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg",
        locality: "Law College Road",
        areaName: "Kothrud",
        costForTwo: "₹350 for two",
        cuisines: [
          "Joseph Smith was the founder and first president of The Church of Jesus Christ of Latter-day Saints.",
        ],
        avgRating: 4.5,
        feeDetails: {
          restaurantId: "13907",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4000,
        },
        parentId: "1770",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 3.7,
          serviceability: "SERVICEABLE",
          slaString: "31 mins",
          lastMileTravelString: "3.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-21 22:55:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "12050",
        name: "Steve Jobs",
        cloudinaryImageId:
          "https://onlinejpgtools.com/images/examples-onlinejpgtools/steve-jobs.png",
        locality: "MAHABALESHWAR HOTEL",
        areaName: "Baner",
        costForTwo: "₹350 for two",
        cuisines: [
          "Steve Jobs, in full Steven Paul Jobs,cofounder of Apple Computer, Inc.",
        ],
        avgRating: 4.9,
        feeDetails: {
          restaurantId: "12050",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 6400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 6400,
        },
        parentId: "2",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 7.9,
          serviceability: "SERVICEABLE",
          slaString: "36 mins",
          lastMileTravelString: "7.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-21 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "200980",
        name: "Lily Thomas",
        cloudinaryImageId:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhm0iRfnudPiJvFZ4PhpMNDgn3FE0JxZ3GqPf6YriPa5rbTdBDDMTxYsx8uy77CIJf_Y&usqp=CAU",
        locality: "Prabhat Road",
        areaName: "Erandwane",
        costForTwo: "₹200 for two",
        cuisines: [
          "Lily Thomson (born 5 April 1989), better known by her stage name Lily James, is an English actress.",
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "200980",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "4057",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 2.7,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "2.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-21 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "507946",
        name: "James Williams",
        cloudinaryImageId:
          "https://cdn.w600.comps.canstockphoto.com/confident-businessman-portrait-of-stock-image_csp18959962.jpg",
        locality: "Ghole Road",
        areaName: "SHIVAJINAGAR",
        costForTwo: "₹250 for two",
        cuisines: [
          "James Williams was born a slave on May 16, 1985, in Powhatan County, Virginia.",
        ],
        avgRating: 3.7,
        feeDetails: {
          restaurantId: "507946",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "306004",
        avgRatingString: "3.7",
        totalRatingsString: "50+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-21 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹399",
          discountTag: "FLAT DEAL",
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "507940",
        name: "Isla Evans",
        cloudinaryImageId:
          "https://media.istockphoto.com/id/621603944/photo/beautiful-teenage-girl.jpg?s=612x612&w=0&k=20&c=p9e5SFhooPXyv0QuIvxxpstwVqADywMM09uftuUV0VI=",
        locality: "Ghole Road",
        areaName: "Shivajinagar",
        costForTwo: "₹270 for two",
        cuisines: [
          "Isla Evans is an Australian author. She has written across several genres from light fiction",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "507940",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "76139",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "18 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-21 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "288388",
        name: "George Davies",
        cloudinaryImageId:
          "https://media.istockphoto.com/id/670377106/photo/portrait-of-smiling-handsome-masseur-with-arms-crossed.jpg?s=612x612&w=is&k=20&c=ExOCTB_At8rO7KKRiQVBssIXTF6tOKelJn6EFgKNnTQ=",
        locality: "FC Road",
        areaName: "Shivajinagar",
        costForTwo: "₹400 for two",
        cuisines: ["George Davies is an English fashion designer and retailer"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "288388",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "195515",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-08-21 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "ABOVE ₹700",
          discountTag: "FLAT DEAL",
          discountCalloutInfo: {
            message: "Free Delivery",
            logoCtx: {
              logo: "v1655895371/free_delivery_logo_hqipbo.png",
            },
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
  ];

  const RestrauntCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
    return (
      <div className="card">
        <img src={cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.slice(0, 3).join(",")}</h3>
        <h4>{avgRating}, stars</h4>
      </div>
    );
  };

  const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const [retraunts, setRetraunts] = useState(retrauntList);

    return (
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter search person name"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const data = filterData(searchInput, retraunts);
              setRetraunts(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="restraunt-list">
          {retraunts.map((retraunt) => {
            return <RestrauntCard {...retraunt.info} key={retraunt.info.id} />;
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <Body />
    </>
  );
  //         <div>
  //             <span style={{color: "orange"}}>{message}</span>
  //               <div  className="table-responsive marginset">
  //         <center>
  //             <h5><u>Display</u></h5>
  //         <table className="table">
  //          <thead>
  //         <tr>
  //           <th scope="col">SNo.</th>
  //           <th scope="col">Book Name</th>
  //           <th scope="col">Book Author</th>
  //           <th scope="col">Book Price</th>
  //           <th scope="col">Book Category</th>
  //           <th scope="col">Book Img</th>
  //     </tr>
  //   </thead>
  //             <tbody>
  //                 {
  //                     patient.map((pat)=>{
  //                         return<tr key={pat.id}>
  //                             <td>{pat.id}</td>
  //                             <td>{pat.name}</td>
  //                             <td>{pat.email}</td>
  //                             <td>{pat.password}</td>
  //                             <td>{pat.phone}</td>
  //                             <td>
  //                                 <button className="btn btn-danger" onClick={()=>{removeRecord(pat.id);}}>Delete</button>
  //                             </td>
  //                         </tr>
  //                     })
  //                 }
  //             </tbody>
  //         </table>
  //         </center>
  //        </div>

  //         </div>
}
export default Display;
