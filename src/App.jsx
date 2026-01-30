import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WorshipKeys from "./pages/WorshipKeys";
import WorshipKeysEnroll from "./pages/WorshipKeysEnroll";
import ThankYou from "./pages/ThankYou";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Landing Page */}
      <Route
        path="/programs/worship-keys"
        element={<WorshipKeys />}
      />

      {/* Enrollment Page */}
      <Route
        path="/programs/worship-keys/enroll"
        element={<WorshipKeysEnroll />}
      />

      {/* Thank You Page */}
      <Route
        path="/programs/worship-keys/thank-you"
        element={<ThankYou />}
      />
    </Routes>
  );
}
