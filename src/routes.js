/**
=========================================================
* Argon Dashboard 2 PRO MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-mui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Argon Dashboard 2 PRO MUI are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Argon Dashboard 2 PRO MUI layouts
import Landing from "layouts/dashboards/landing";
import Default from "layouts/dashboards/default";
import Automotive from "layouts/dashboards/automotive";
import SmartHome from "layouts/dashboards/smart-home";
import VRDefault from "layouts/dashboards/virtual-reality/vr-default";
import VRInfo from "layouts/dashboards/virtual-reality/vr-info";
import CRM from "layouts/dashboards/crm";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Teams from "layouts/pages/profile/teams";
import AllProjects from "layouts/pages/profile/all-projects";
import Reports from "layouts/pages/users/reports";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Security from "layouts/pages/account/security";
import General from "layouts/pages/projects/general";
import Timeline from "layouts/pages/projects/timeline";
import NewProject from "layouts/pages/projects/new-project";
import Widgets from "layouts/pages/widgets";
import Charts from "layouts/pages/charts";
import SweetAlerts from "layouts/pages/sweet-alerts";
import Notifications from "layouts/pages/notifications";
import PricingPage from "layouts/pages/pricing-page";
import RTL from "layouts/pages/rtl";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import Analytics from "layouts/applications/analytics";
import Overview from "layouts/ecommerce/overview";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import ProductsList from "layouts/ecommerce/products/products-list";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import Referral from "layouts/ecommerce/referral";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpBasic from "layouts/authentication/sign-up/basic";
import SignUpCover from "layouts/authentication/sign-up/cover";
import SignUpIllustration from "layouts/authentication/sign-up/illustration";
import ResetBasic from "layouts/authentication/reset-password/basic";
import ResetCover from "layouts/authentication/reset-password/cover";
import ResetIllustration from "layouts/authentication/reset-password/illustration";
import LockBasic from "layouts/authentication/lock/basic";
import LockCover from "layouts/authentication/lock/cover";
import LockIllustration from "layouts/authentication/lock/illustration";
import VerificationBasic from "layouts/authentication/2-step-verification/basic";
import VerificationCover from "layouts/authentication/2-step-verification/cover";
import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import GrantsandProposals from "layouts/pages/grants-proposals";
import JobProfile from "layouts/pages/job-profile";
import Grants from "layouts/pages/grants-proposals/Grant";
import Proposals from "layouts/pages/grants-proposals/Proposals";
import Jobs from "layouts/pages/grants-proposals/Jobs";
import Reputation from "layouts/pages/profile/reputation";
import PastExperience from "layouts/pages/profile/past-experience";
import Overview2 from "layouts/pages/profile/overview";
import Articles from "layouts/pages/articles";
import ArticleMain from "layouts/pages/article-main";
import ProposalDiscussion from "layouts/pages/proposal-discussion";
import JobListing from "layouts/pages/job-listing";
import NewDAOProtocol from "layouts/pages/dao-protocol";
import ProtocolDiscussion from "layouts/pages/dao-protocol/protocol-discussion";
import RelatedProtocols from "layouts/pages/dao-protocol/related-protocols";
import OrganizationOverview from "layouts/pages/profile/organization-overview";
import ProposalList from "layouts/pages/proposal-list";
import GrantMainPage from "layouts/pages/grants-proposals/Grant-Main";
import OrganizationJobs from "layouts/pages/organisation-overview/Organisation-Jobs";
import DefiAnalysis from "layouts/pages/defi-analysis";
import NewDAOUser from "layouts/pages/users/DAO-new-user";
import JobPostingOrg from "layouts/pages/job-posting";
import JobPostingUser from "layouts/pages/job-posting-user";


const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-shop" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/default",
        component: <Default />,
      },
      { name: "Calender", key: "crm", route: "/dashboards/crm", component: <CRM /> },
    ],
  },
  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-ungroup" />,
    collapse: [
      {
        name: "Profile",
        key: "profile",
        collapse: [
          {
            name: "Profile Overview",
            key: "profile-overview",
            route: "/pages/profile/profile-overview",
            component: <ProfileOverview />,
          },
          {
            name: "Organization Overview", 
            key: "organization-overview", 
            route: "/pages/profile/organization-overview",
            component: <OrganizationOverview/>
          }, 
          {
            name: "Job Description",
            key: "job-description",
            route: "/pages/profile/job-description",
            component: <JobProfile />,
          },
          {
            name: "Job Posting (Org)", 
            key: "job-posting-org",
            route: "/pages/profile/job-posting-org",
            component: <JobPostingOrg/>
          }, 
          {
            name: "Job Posting (User)", 
            key: "job-posting-user",
            route: "/pages/profile/job-posting-user",
            component: <JobPostingUser/>
          }
          
          // {
          //   name: "Teams",
          //   key: "teams",
          //   route: "/pages/profile/teams",
          //   component: <Teams />,
          // },
          // {
          //   name: "All Projects",
          //   key: "all-projects",
          //   route: "/pages/profile/all-projects",
          //   component: <AllProjects />,
          // },
        ],
      },
      {
        name: "Users",
        key: "users",
        collapse: [
          // {
          //   name: "Reports",
          //   key: "reports",
          //   route: "/pages/users/reports",
          //   component: <Reports />,
          // },
          {
            name: "New User",
            key: "new-user",
            route: "/pages/users/new-user",
            component: <NewDAOUser/> 
          },
        ],
      },
      // {
      //   name: "Account",
      //   key: "account",
      //   collapse: [
      //     {
      //       name: "Settings",
      //       key: "settings",
      //       route: "/pages/account/settings",
      //       component: <Settings />,
      //     },
      //     // {
      //     //   name: "Billing",
      //     //   key: "billing",
      //     //   route: "/pages/account/billing",
      //     //   component: <Billing />,
      //     // },
      //     // {
      //     //   name: "Invoice",
      //     //   key: "invoice",
      //     //   route: "/pages/account/invoice",
      //     //   component: <Invoice />,
      //     // },
      //     // {
      //     //   name: "Security",
      //     //   key: "security",
      //     //   route: "/pages/account/security",
      //     //   component: <Security />,
      //     // },
      //   ],
      // },
      {
        name: "Grants and Proposals",
        key: "grants and proposals",
        collapse: [
          {
            name: "Grants and Proposal",
            key: "protocol grants and proposals",
            route: "/pages/grantsandproposals",
            component: <GrantsandProposals />,
          },
          // {
          //   name: "Proposals",
          //   key: "proposals",
          //   route: "/pages/grantsandproposals/grantproposals",
          //   component: <Proposals />,
          // }, 
          // {
          //   name: "Grants",
          //   key: "grants",
          //   route: "/pages/grantsandproposals/grants",
          //   component: <Grants />,
          // }, 
          {
            name: "Grants Main Page", 
            key: "grants main page", 
            route: "/pages/grants-main-page", 
            component: <GrantMainPage/>
          },
          // {
          //   name: "Jobs",
          //   key: "jobs",
          //   route: "/pages/grantsandproposals/jobs",
          //   component: <Jobs />,
          // }
        ],
      },
      {
        name:"Defi Analysis",
        key: "defi analysis", 
        route: "/pages/defi-analysis",
        component: <ArticleMain/>
      }, 
      {
        name: "Latest Happenings",
        key: "latest happenings",
        route: "/pages/latest-happenings",
        component: <DefiAnalysis/>
      },
      {
        name:"Article",
        key: "article",
        route: "/pages/article",
        component: <Articles/>
      }, 
      {
        name:"Proposal Discussion",
        key: "proposal discussion",
        route: "/pages/proposal-disucssion",
        component: <ProposalDiscussion/>
      }, 
      {
        name:"Proposal Listing",
        key: "proposal listing",
        route: "/pages/proposal-listing",
        component: <ProposalList/>
      }, 
      {
        name:"New DAO Protocol", 
        key: "new dao job",
        route: "/pages/new-dao-job",
        component: <NewDAOProtocol/>
      },
      {
        name: "DAO Protocol Discussion",
        key: "dao protocol discussion",
        route: "/pages/dao-protocol-discussion",
        component: <ProtocolDiscussion/>
      },
      {
        name: "Related Protocols", 
        key: "related protocols", 
        route: "/pages/related-protocols",
        component: <RelatedProtocols/>
      }, 
      {
        name: "Job Listing",
        key: "job listing",
        route: "/pages/joblisting",
        component: <JobListing/>
      }, 
      // {
      //   name: "Pricing Page",
      //   key: "pricing-page",
      //   route: "/pages/pricing-page",
      //   component: <PricingPage />,
      // },
      // { name: "RTL", key: "rtl", route: "/pages/rtl", component: <RTL /> },
      // { name: "Widgets", key: "widgets", route: "/pages/widgets", component: <Widgets /> },
      // { name: "Charts", key: "charts", route: "/pages/charts", component: <Charts /> },
      // {
      //   name: "Sweet Alerts",
      //   key: "sweet-alerts",
      //   route: "/pages/sweet-alerts",
      //   component: <SweetAlerts />,
      // },
      // {
      //   name: "Notfications",
      //   key: "notifications",
      //   route: "/pages/notifications",
      //   component: <Notifications />,
      // },
    ],
  },
  {
    type: "collapse",
    name: "Applications",
    key: "applications",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-ui-04" />,
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        component: <Kanban />,
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        component: <Wizard />,
      },
      // {
      //   name: "Data Tables",
      //   key: "data-tables",
      //   route: "/applications/data-tables",
      //   component: <DataTables />,
      // },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        component: <Calendar />,
      },
      // {
      //   name: "Analytics",
      //   key: "analytics",
      //   route: "/applications/analytics",
      //   component: <Analytics />,
      // },
    ],
  },
  // {
  //   type: "collapse",
  //   name: "Ecommerce",
  //   key: "ecommerce",
  //   icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-archive-2" />,
  //   collapse: [
  //     {
  //       name: "Overview",
  //       key: "overview",
  //       route: "/ecommerce/overview",
  //       component: <Overview />,
  //     },
  //     {
  //       name: "Products",
  //       key: "products",
  //       collapse: [
  //         {
  //           name: "New Product",
  //           key: "new-product",
  //           route: "/ecommerce/products/new-product",
  //           component: <NewProduct />,
  //         },
  //         {
  //           name: "Edit Product",
  //           key: "edit-product",
  //           route: "/ecommerce/products/edit-product",
  //           component: <EditProduct />,
  //         },
  //         {
  //           name: "Product Page",
  //           key: "product-page",
  //           route: "/ecommerce/products/product-page",
  //           component: <ProductPage />,
  //         },
  //         {
  //           name: "Products List",
  //           key: "products-list",
  //           route: "/ecommerce/products/products-list",
  //           component: <ProductsList />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Orders",
  //       key: "orders",
  //       collapse: [
  //         {
  //           name: "Order List",
  //           key: "order-list",
  //           route: "/ecommerce/orders/order-list",
  //           component: <OrderList />,
  //         },
  //         {
  //           name: "Order Details",
  //           key: "order-details",
  //           route: "/ecommerce/orders/order-details",
  //           component: <OrderDetails />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Referral",
  //       key: "referral",
  //       route: "/ecommerce/referral",
  //       component: <Referral />,
  //     },
  //   ],
  // },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <ArgonBox component="i" color="error" fontSize="14px" className="ni ni-single-copy-04" />,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/sign-in/basic",
            component: <SignInBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
        ],
      },
      {
        name: "Sign Up",
        key: "sign-up",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/sign-up/basic",
            component: <SignUpBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-up/illustration",
            component: <SignUpIllustration />,
          },
        ],
      },
      {
        name: "Reset Password",
        key: "reset-password",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/reset-password/basic",
            component: <ResetBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/reset-password/illustration",
            component: <ResetIllustration />,
          },
        ],
      },
      {
        name: "Lock",
        key: "lock",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/lock/basic",
            component: <LockBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/lock/cover",
            component: <LockCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/lock/illustration",
            component: <LockIllustration />,
          },
        ],
      },
      {
        name: "2-Step Verification",
        key: "2-step-verification",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/verification/basic",
            component: <VerificationBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/verification/cover",
            component: <VerificationCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/verification/illustration",
            component: <VerificationIllustration />,
          },
        ],
      },
      {
        name: "Error",
        key: "error",
        collapse: [
          {
            name: "Error 404",
            key: "error-404",
            route: "/authentication/error/404",
            component: <Error404 />,
          },
          {
            name: "Error 500",
            key: "error-500",
            route: "/authentication/error/500",
            component: <Error500 />,
          },
        ],
      },
    ],
  },
  // { type: "divider", key: "divider-1" },
  // { type: "title", title: "Docs", key: "title-docs" },
  // {
  //   type: "collapse",
  //   name: "Basic",
  //   key: "basic",
  //   icon: <ArgonBox component="i" color="inherit" fontSize="14px" className="ni ni-spaceship" />,
  //   collapse: [
  //     {
  //       name: "Getting Started",
  //       key: "getting-started",
  //       collapse: [
  //         {
  //           name: "Overview",
  //           key: "overview",
  //           href: "https://www.creative-tim.com/learning-lab/react/overview/argon-dashboard/",
  //         },
  //         {
  //           name: "License",
  //           key: "license",
  //           href: "https://www.creative-tim.com/learning-lab/react/license/argon-dashboard/",
  //         },
  //         {
  //           name: "Quick Start",
  //           key: "quick-start",
  //           href: "https://www.creative-tim.com/learning-lab/react/quick-start/argon-dashboard/",
  //         },
  //         {
  //           name: "Build Tools",
  //           key: "build-tools",
  //           href: "https://www.creative-tim.com/learning-lab/react/build-tools/argon-dashboard/",
  //         },
  //       ],
  //     },
  //     {
  //       name: "Foundation",
  //       key: "foundation",
  //       collapse: [
  //         {
  //           name: "Colors",
  //           key: "colors",
  //           href: "https://www.creative-tim.com/learning-lab/react/colors/argon-dashboard/",
  //         },
  //         {
  //           name: "Grid",
  //           key: "grid",
  //           href: "https://www.creative-tim.com/learning-lab/react/grid/argon-dashboard/",
  //         },
  //         {
  //           name: "Typography",
  //           key: "base-typography",
  //           href: "https://www.creative-tim.com/learning-lab/react/base-typography/argon-dashboard/",
  //         },
  //         {
  //           name: "Borders",
  //           key: "borders",
  //           href: "https://www.creative-tim.com/learning-lab/react/borders/argon-dashboard/",
  //         },
  //         {
  //           name: "Box Shadows",
  //           key: "box-shadows",
  //           href: "https://www.creative-tim.com/learning-lab/react/box-shadows/argon-dashboard/",
  //         },
  //         {
  //           name: "Functions",
  //           key: "functions",
  //           href: "https://www.creative-tim.com/learning-lab/react/functions/argon-dashboard/",
  //         },
  //         {
  //           name: "Routing System",
  //           key: "routing-system",
  //           href: "https://www.creative-tim.com/learning-lab/react/routing-system/argon-dashboard/",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   type: "collapse",
  //   name: "Components",
  //   key: "components",
  //   icon: <ArgonBox component="i" color="inherit" fontSize="14px" className="ni ni-app" />,
  //   collapse: [
  //     {
  //       name: "Alerts",
  //       key: "alerts",
  //       href: "https://www.creative-tim.com/learning-lab/react/alerts/argon-dashboard/",
  //     },
  //     {
  //       name: "Avatar",
  //       key: "avatar",
  //       href: "https://www.creative-tim.com/learning-lab/react/avatar/argon-dashboard/",
  //     },
  //     {
  //       name: "Badge",
  //       key: "badge",
  //       href: "https://www.creative-tim.com/learning-lab/react/badge/argon-dashboard/",
  //     },
  //     {
  //       name: "Badge Dot",
  //       key: "badge-dot",
  //       href: "https://www.creative-tim.com/learning-lab/react/badge-dot/argon-dashboard/",
  //     },
  //     {
  //       name: "Box",
  //       key: "box",
  //       href: "https://www.creative-tim.com/learning-lab/react/box/argon-dashboard/",
  //     },
  //     {
  //       name: "Buttons",
  //       key: "buttons",
  //       href: "https://www.creative-tim.com/learning-lab/react/buttons/argon-dashboard/",
  //     },
  //     {
  //       name: "Date Picker",
  //       key: "date-picker",
  //       href: "https://www.creative-tim.com/learning-lab/react/datepicker/argon-dashboard/",
  //     },
  //     {
  //       name: "Dropzone",
  //       key: "dropzone",
  //       href: "https://www.creative-tim.com/learning-lab/react/dropzone/argon-dashboard/",
  //     },
  //     {
  //       name: "Editor",
  //       key: "editor",
  //       href: "https://www.creative-tim.com/learning-lab/react/quill/argon-dashboard/",
  //     },
  //     {
  //       name: "Input",
  //       key: "input",
  //       href: "https://www.creative-tim.com/learning-lab/react/input/argon-dashboard/",
  //     },
  //     {
  //       name: "Pagination",
  //       key: "pagination",
  //       href: "https://www.creative-tim.com/learning-lab/react/pagination/argon-dashboard/",
  //     },
  //     {
  //       name: "Progress",
  //       key: "progress",
  //       href: "https://www.creative-tim.com/learning-lab/react/progress/argon-dashboard/",
  //     },
  //     {
  //       name: "Select",
  //       key: "select",
  //       href: "https://www.creative-tim.com/learning-lab/react/select/argon-dashboard/",
  //     },
  //     {
  //       name: "Snackbar",
  //       key: "snackbar",
  //       href: "https://www.creative-tim.com/learning-lab/react/snackbar/argon-dashboard/",
  //     },
  //     {
  //       name: "Social Button",
  //       key: "social-button",
  //       href: "https://www.creative-tim.com/learning-lab/react/social-buttons/argon-dashboard/",
  //     },
  //     {
  //       name: "Tag Input",
  //       key: "tag-input",
  //       href: "https://www.creative-tim.com/learning-lab/react/tag-input/argon-dashboard/",
  //     },
  //     {
  //       name: "Typography",
  //       key: "typography",
  //       href: "https://www.creative-tim.com/learning-lab/react/typography/argon-dashboard/",
  //     },
  //   ],
  // },
  // {
  //   type: "collapse",
  //   name: "Change Log",
  //   key: "changelog",
  //   href: "https://github.com/creativetimofficial/ct-argon-dashboard-pro-material-ui/blob/main/CHANGELOG.md",
  //   icon: <ArgonBox component="i" color="inherit" fontSize="14px" className="ni ni-align-left-2" />,
  //   noCollapse: true,
  // },
];

export default routes;
