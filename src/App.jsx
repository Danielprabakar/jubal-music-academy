import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WorshipKeys from "./pages/WorshipKeys";
import WorshipKeysEnroll from "./pages/WorshipKeysEnroll";
import ThankYou from "./pages/ThankYou";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/programs/worship-keys"
        element={<WorshipKeys />}
      />

      <Route
        path="/enroll/worship-keys"
        element={<WorshipKeysEnroll />}
      />

      <Route
        path="/thank-you"
        element={<ThankYou />}
      />
    </Routes>
  );
}