import { ToastContainer } from "react-toastify";
import { Error, Landing, Register, ProtectedRoute } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Stats,
  Sharedlayout,
  Alljobs,
  Addjob,
  Profile,
} from "./pages/dashboard/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Sharedlayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<Alljobs />}></Route>
          <Route path="add-job" element={<Addjob />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
