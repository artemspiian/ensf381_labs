import "./HousePricePredictor.css";
import { useState } from "react";



export default function HousePricePredictor() {
    const [ predictedPrice, setPredictedPrice ] = useState(null)
    const [ errorMessage, setErrorMessage ] = useState(null)

    async function submitForm(event) {
        event.preventDefault();
        let info = {
            city: event.target[0].value,
            province: event.target[1].value,
            latitude: event.target[2].value,
            longitude: event.target[3].value,
            lease_term: event.target[4].value,
            type: event.target[5].value,
            beds: event.target[6].value,
            baths: event.target[7].value,
            sq_feet: event.target[8].value,
            furnishing: event.target[9].value,
            smoking: event.target[10].value
        }
        try {
            const response = await fetch("http://127.0.0.1:5000/predict_house_price",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(info)
                }
            );
            const data = await response.json();
            setErrorMessage(null);
            setPredictedPrice(data.predicted_price);
        } catch(e) {
            console.error(e);
            setErrorMessage("Unable to connect");
            setPredictedPrice(null)
        }
    }

    return (
        <>
            <div id="house-form-container">
                <form onSubmit={submitForm}>
                    <h1>House Price Predictor</h1>
                    <label htmlFor="city">City: </label>
                    <input id="city" type="text" />
                    <label htmlFor="province">Province: </label>
                    <input id="province" type="text" />
                    <label htmlFor="latitude">Latitude: </label>
                    <input id="latitude" type="text" />
                    <label htmlFor="longitude">Longitude: </label>
                    <input id="longitude" type="text" />
                    <label htmlFor="lease-term">Lease Term: </label>
                    <input id="lease-term" type="text" />
                    <label htmlFor="type-of-house">Type: </label>
                    <input id="type-of-hous" type="text" />
                    <label htmlFor="beds">Beds: </label>
                    <input id="beds" type="text" />
                    <label htmlFor="baths">Baths: </label>
                    <input id="baths" type="text" />
                    <label htmlFor="square-feet">Square Feet: </label>
                    <input id="square-feet" type="text" />
                    <label htmlFor="furnishing">Furnishing: </label>
                    <select id="furnishing">
                        <option>Unfurnished</option>
                        <option>Partially Furnished</option>
                        <option>Fully Furnished</option>
                    </select>
                    <label htmlFor="smoking">Smoking: </label>
                    <select id="smoking">
                        <option>Non-Smoking</option>
                        <option>Smoking</option>
                    </select>
                    <label htmlFor="pets">Pets: </label>
                    <input id="pets" type="checkbox" />
                    <button>Predict</button>
                </form>
                {predictedPrice != null && 
                    <div id="predicted-price">
                        Predicted Rent Price: ${predictedPrice}
                    </div>
                }
            </div>
            <p id="error-message">{errorMessage}</p>
        </>
    );
}