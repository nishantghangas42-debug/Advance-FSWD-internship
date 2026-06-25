import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormValidation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [MOB, setMOB] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState("");
  const [agree, setAgree] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSkills = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  function handleSubmit(e) {
  e.preventDefault();

  if (firstName.trim() === "") {
    alert("First Name is required");
  } else if (firstName.length < 3) {
    alert("First Name must be at least 3 characters");
  } else if (!/^[A-Za-z\s]+$/.test(firstName)) {
    alert("First Name should contain only alphabets");
  }

  else if (lastName.trim() === "") {
    alert("Last Name is required");
  } else if (lastName.length < 2) {
    alert("Last Name must be at least 2 characters");
  } else if (!/^[A-Za-z\s]+$/.test(lastName)) {
    alert("Last Name should contain only alphabets");
  }

  else if (email.trim() === "") {
    alert("Email is required");
  } else if (
    !email.includes("@") ||
    !(email.endsWith(".com") || email.endsWith(".in"))
  ) {
    alert("Enter a valid Email");
  }

  else if (password.trim() === "") {
    alert("Password is required");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters");
  } else if (!/[A-Z]/.test(password)) {
    alert("Password must contain at least one uppercase letter");
  } else if (!/[a-z]/.test(password)) {
    alert("Password must contain at least one lowercase letter");
  } else if (!/[0-9]/.test(password)) {
    alert("Password must contain at least one number");
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert("Password must contain at least one special character");
  }

  else if (confirmPassword.trim() === "") {
    alert("Confirm Password is required");
  } else if (/\s/.test(confirmPassword)) {
    alert("Confirm Password should not contain spaces");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match");
  }

  else if (age === "") {
    alert("Age is required");
  } else if (isNaN(age)) {
    alert("Age must be a number");
  } else if (age < 18 || age > 60) {
    alert("Age must be between 18 and 60");
  }

  else if (MOB.trim() === "") {
    alert("Mobile Number is required");
  } else if (!/^[6-9][0-9]{9}$/.test(MOB)) {
    alert("Enter a valid 10-digit Mobile Number");
  }

  else if (gender === "") {
    alert("Select Gender");
  }

  else if (
    course === "" ||
    course === "Select Course"
  ) {
    alert("Select a Course");
  }

  else if (skills.length < 2) {
    alert("Select at least 2 Skills");
  } else if (skills.length > 4) {
    alert("Maximum 4 Skills allowed");
  }

  else if (address.trim() === "") {
    alert("Address is required");
  } else if (address.length < 20) {
    alert("Address must be at least 20 characters");
  } else if (address.length > 150) {
    alert("Address cannot exceed 150 characters");
  }

  else if (!agree) {
    alert("Please accept Terms & Conditions");
  }

  else {
    alert("Registration Successful!");

    console.log({
      firstName,
      lastName,
      email,
      password,
      age,
      MOB,
      gender,
      course,
      skills,
      address,
    });
  }
}

  return (
    <div className="main"
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "420px",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,.2)",
        }}
      >
        <h2
        >
          Student Registration Form
        </h2>

        {/* First Name */}
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={inputStyle}
        />

        {/* Last Name */}
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={inputStyle}
        />

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        {/* Password */}
        <label>Password</label>

        <div
          style={{
            position: "relative",
            marginBottom: "15px",
          }}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              ...inputStyle,
              marginBottom: "0",
              paddingRight: "45px",
            }}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555",
              fontSize: "18px",
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password */}
        <label>Confirm Password</label>

        <div
          style={{
            position: "relative",
            marginBottom: "15px",
          }}
        >
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              ...inputStyle,
              marginBottom: "0",
              paddingRight: "45px",
            }}
          />

          <span
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555",
              fontSize: "18px",
            }}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

                {/* Age */}
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputStyle}
        />

        {/* Mobile Number */}
        <label>Mobile Number</label>
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={MOB}
          onChange={(e) => setMOB(e.target.value)}
          style={inputStyle}
        />

        {/* Gender */}
        <label>Gender</label>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "15px" }}>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Male
          </label>

          <label style={{ marginRight: "15px" }}>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Female
          </label>

          <label>
            <input
              type="radio"
              value="Other"
              checked={gender === "Other"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Other
          </label>
        </div>

        {/* Course */}
        <label>Course</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={inputStyle}
        >
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="BCA">BCA</option>
          <option value="B.Sc">B.Sc</option>
          <option value="MCA">MCA</option>
          <option value="M.Tech">M.Tech</option>
        </select>

        {/* Skills */}
        <label>Skills</label>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ marginRight: "15px" }}>
            <input
              type="checkbox"
              value="HTML"
              checked={skills.includes("HTML")}
              onChange={handleSkills}
            />{" "}
            HTML
          </label>

          <label style={{ marginRight: "15px" }}>
            <input
              type="checkbox"
              value="CSS"
              checked={skills.includes("CSS")}
              onChange={handleSkills}
            />{" "}
            CSS
          </label>

          <label style={{ marginRight: "15px" }}>
            <input
              type="checkbox"
              value="JavaScript"
              checked={skills.includes("JavaScript")}
              onChange={handleSkills}
            />{" "}
            JavaScript
          </label>

          <label>
            <input
              type="checkbox"
              value="React"
              checked={skills.includes("React")}
              onChange={handleSkills}
            />{" "}
            React
          </label>
        </div>

        {/* Address */}
        <label>Address</label>
        <textarea
          rows="4"
          placeholder="Enter your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{
            ...inputStyle,
            resize: "none",
          }}
        />

        {/* Terms */}
        <div style={{ marginBottom: "20px" }}>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />{" "}
            I Agree to Terms & Conditions
          </label>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#667eea",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  marginBottom: "15px",
  border: "2px solid #ddd",
  borderRadius: "8px",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

export default FormValidation;