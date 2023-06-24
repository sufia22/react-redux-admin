import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";
import privateRouter from "./privateRouter";

// create browser router
const router = createBrowserRouter([...publicRouter, ...privateRouter]);

// export browser router
export default router;
