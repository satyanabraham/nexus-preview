import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

// Platform pages
import { PlatformOverview } from "./pages/platform/PlatformOverview";
import { Architecture } from "./pages/platform/Architecture";
import { DCIM } from "./pages/platform/DCIM";
import APM from "./pages/platform/APM";
import FinOps from "./pages/platform/FinOps";
import Kubernetes from "./pages/platform/Kubernetes";
import AIOrchestration from "./pages/platform/AIOrchestration";

// Other sections
import { Solutions } from "./pages/Solutions";
import { Ecosystem } from "./pages/Ecosystem";
import { About } from "./pages/About";
import { References } from "./pages/References";
import { Contact } from "./pages/Contact";
import { InteractiveDemo } from "./pages/InteractiveDemo";
import { Careers } from "./pages/Careers";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: NotFound,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "platform",
        Component: PlatformOverview,
      },
      {
        path: "platform/architecture",
        Component: Architecture,
      },
      {
        path: "platform/dcim",
        Component: DCIM,
      },
      {
        path: "platform/apm",
        Component: APM,
      },
      {
        path: "platform/finops",
        Component: FinOps,
      },
      {
        path: "platform/kubernetes",
        Component: Kubernetes,
      },
      {
        path: "platform/ai-orchestration",
        Component: AIOrchestration,
      },
      {
        path: "solutions",
        Component: Solutions,
      },
      {
        path: "ecosystem",
        Component: Ecosystem,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "references",
        Component: References,
      },
      {
        path: "interactive-demo",
        Component: InteractiveDemo,
      },
      {
        path: "careers",
        Component: Careers,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);