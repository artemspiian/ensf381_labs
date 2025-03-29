import "./App.css";

function Predict() {
  return (
    <div className="App">
      <form className="predictform">
        <label className="predictLabel">House Price Predictor</label>

        <label>City:</label>
        <input name="city" required type="text" />

        <label>Province:</label>
        <input name="province" required type="text" />

        <label>Latitude:</label>
        <input name="latitude" required type="text" />

        <label>Longtitude:</label>
        <input name="longtitude" required type="text" />

        <label>Lease Term:</label>
        <input name="lease_term" required type="text" />

        <label>Type of House:</label>
        <input name="type" required type="text" />

        <label>Number of Beds:</label>
        <input name="beds" required type="text" />

        <label>Number of Baths:</label>
        <input name="baths" required type="text" />

        <label>Square Feet:</label>
        <input name="sq_feet" required type="text" />

        <label>Furnishing:</label>
        <select name="furnishing" required>
          <option value="unfir">Unfirnished</option>
          <option value="parfir">Partially Furnished</option>
          <option value="fullfir">Fully Furnished</option>
        </select>

        <label>Smoking:</label>
        <input name="smoking" required type="text" />


        <label>Pets:</label>
        <input name="pets" defaultChecked={false} type="checkbox" />

        <button type="submit">Predict</button>
      </form>
    </div>
  );
}

export default Predict;
